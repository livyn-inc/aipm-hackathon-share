import { save, get } from './storage.js';

(function () {
  const $ = (sel) => document.querySelector(sel);

  const KEY_TASKS = 'todo_tasks';
  const KEY_MODE = 'todo_mode';

  const input = $('#task-input');
  const addBtn = $('#add-btn');
  const modeBtn = $('#mode-btn');
  const list = $('#task-list');
  const focusLabel = $('#focus-label');
  const doNowBtn = $('#do-now-btn');
  const timeInput = $('#time-input');
  const suggestBtn = $('#suggest-btn');
  const suggestList = $('#suggest-list');
  const progressArea = $('#progress-area');
  const badgeArea = $('#badge-area');

  // ---- state ----
  let tasks = get(KEY_TASKS, []);
  let mode = get(KEY_MODE, 'work'); // 'work' | 'home'

  // ---- helpers ----
  function saveState() {
    try {
      save(KEY_TASKS, tasks);
      save(KEY_MODE, mode);
    } catch (_) {}
  }

  // 既存データの既定値補完（estimateMin/importance）
  function migrateTaskDefaults() {
    let changed = false;
    const IMPORTANCE_PATTERN = [3, 2, 1];
    const ESTIMATE_PATTERN = [5, 15, 30];
    let i = 0;
    for (const t of tasks) {
      const hasEst = Number.isFinite(Number(t.estimateMin)) && Number(t.estimateMin) > 0;
      const hasImp = Number.isFinite(Number(t.importance)) && Number(t.importance) >= 1 && Number(t.importance) <= 3;
      if (!hasEst) {
        t.estimateMin = ESTIMATE_PATTERN[i % ESTIMATE_PATTERN.length];
        changed = true;
      }
      if (!hasImp) {
        t.importance = IMPORTANCE_PATTERN[i % IMPORTANCE_PATTERN.length];
        changed = true;
      }
      i += 1;
    }
    if (changed) saveState();
  }

  // ---- priority helpers ----
  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  function normalizedImportance(t) {
    const v = Number(t.importance);
    if (!Number.isFinite(v)) return 2;
    if (v < 1) return 1;
    if (v > 3) return 3;
    return v;
  }

  function normalizedEstimateMin(t) {
    const v = Number(t.estimateMin);
    if (!Number.isFinite(v) || v <= 0) return 15;
    return v;
  }

  function scoreTask(t) {
    const importance = normalizedImportance(t);
    const est = clamp(normalizedEstimateMin(t), 0, 60);
    return importance * 10 - est;
  }

  function getSortedTasks() {
    return tasks
      .filter((t) => !t.completed && taskMatchesMode(t))
      .slice()
      .sort((a, b) => {
        const sa = scoreTask(a);
        const sb = scoreTask(b);
        if (sb !== sa) return sb - sa; // desc
        return a.id - b.id; // asc
      });
  }

  function setMode(next) {
    mode = next;
    const isHome = (mode === 'home');
    modeBtn.setAttribute('aria-pressed', String(isHome));
    modeBtn.textContent = isHome ? '家事モード' : '仕事モード';
    modeBtn.classList.toggle('is-home', isHome);
    console.log('[aria] mode-btn aria-pressed:', modeBtn.getAttribute('aria-pressed'));
    saveState();
    render(); // モード切替時に再描画
  }

  function taskMatchesMode(t) {
    if (!t.category) return true;
    return t.category === mode;
  }

  function getNextTask() {
    const sorted = getSortedTasks();
    return sorted.length ? sorted[0] : null;
  }

  function renderFocus() {
    const next = getNextTask();
    if (!next) {
      focusLabel.textContent = '今やるタスクはありません';
      doNowBtn.disabled = true;
      return;
    }
    focusLabel.textContent = next.label;
    doNowBtn.disabled = false;
  }

  function render() {
    // list
    list.innerHTML = '';
    const inMode = tasks.filter(taskMatchesMode);
    const active = inMode
      .filter((t) => !t.completed)
      .sort((a, b) => {
        const sa = scoreTask(a);
        const sb = scoreTask(b);
        if (sb !== sa) return sb - sa;
        return a.id - b.id;
      });
    const done = inMode.filter((t) => !!t.completed);
    const ordered = active.concat(done);

    ordered.forEach((t) => {
      const li = document.createElement('li');
      li.className = 'task-item' + (t.completed ? ' completed' : '');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = !!t.completed;
      checkbox.addEventListener('change', () => {
        t.completed = checkbox.checked;
        li.classList.toggle('completed', t.completed);
        saveState();
        renderFocus();
      });

      const span = document.createElement('span');
      span.className = 'label';
      span.textContent = t.label;

      if (t.category) {
        const badge = document.createElement('span');
        badge.textContent = t.category === 'work' ? ' [W]' : ' [H]';
        badge.style.color = '#64748b';
        span.appendChild(badge);
      }

      // meta info: importance/estimate
      const meta = document.createElement('span');
      meta.textContent = ` ★${normalizedImportance(t)} ⏱${normalizedEstimateMin(t)}m`;
      meta.style.marginLeft = '6px';
      meta.style.color = '#94a3b8';
      span.appendChild(meta);

      li.appendChild(checkbox);
      li.appendChild(span);
      list.appendChild(li);
    });

    // focus
    renderFocus();

    // suggest list 初期描画は空
    if (suggestList) suggestList.innerHTML = '';

    // progress/badge
    renderProgress();
  }

  function addTask(label) {
    const IMPORTANCE_PATTERN = [3, 2, 1];
    const ESTIMATE_PATTERN = [5, 15, 30];
    const idx = tasks.length % IMPORTANCE_PATTERN.length;
    const task = { id: Date.now(), label, completed: false, category: mode, estimateMin: ESTIMATE_PATTERN[idx], importance: IMPORTANCE_PATTERN[idx] };
    tasks.push(task);
    saveState();
    render();
  }

  // ---- observer (auto log) ----
  try {
    const logAria = () => console.log('[aria] mode-btn aria-pressed:', modeBtn.getAttribute('aria-pressed'));
    new MutationObserver(logAria).observe(modeBtn, { attributes: true, attributeFilter: ['aria-pressed'] });
  } catch (_) {}

  // ---- events ----
  addBtn.addEventListener('click', () => {
    console.log('[click] add');
    const v = (input.value || '').trim();
    if (!v) return;
    addTask(v);
    input.value = '';
    input.focus();
  });

  modeBtn.addEventListener('click', () => {
    const next = (mode === 'work') ? 'home' : 'work';
    setMode(next);
    console.log('[toggle] mode', next);
  });

  doNowBtn.addEventListener('click', () => {
    const next = getNextTask();
    if (!next) return;
    next.completed = true;
    saveState();
    render();
  });
  // ---- ST3: progress ----
  function calcProgress() {
    const total = tasks.length;
    const done = tasks.filter((t) => t.completed).length;
    const ratio = total ? Math.round((done / total) * 100) : 0;
    console.log('[state] progress', { done, total, ratio: ratio + '%' });
    const badge = done >= 5 ? '🏅5+' : done >= 3 ? '🎖3+' : done >= 1 ? '✅1+' : '';
    console.log('[state] badge', badge);
    return { done, total, ratio, badge };
  }

  function renderProgress() {
    if (!progressArea || !badgeArea) return;
    const p = calcProgress();
    progressArea.textContent = `${p.done} / ${p.total} (${p.ratio}%)`;
    badgeArea.textContent = p.badge;
  }


  // ---- ST3: time match ----
  function getCandidatesByTime(minutes) {
    const m = Number(minutes) || 0;
    const inMode = tasks.filter(taskMatchesMode);
    const candidates = inMode.filter((t) => !t.completed && (normalizedEstimateMin(t) <= m));
    console.log('[state] candidates(time<=', m, ')=', candidates.slice(0, 5));
    // 優先度順で並べる
    return candidates.sort((a, b) => {
      const sa = scoreTask(a);
      const sb = scoreTask(b);
      if (sb !== sa) return sb - sa;
      return a.id - b.id;
    });
  }

  function renderSuggestList(items) {
    if (!suggestList) return;
    suggestList.innerHTML = '';
    items.forEach((t) => {
      const li = document.createElement('li');
      li.textContent = `${t.label}（★${normalizedImportance(t)} ⏱${normalizedEstimateMin(t)}m）`;
      // 完了操作
      li.addEventListener('click', () => {
        t.completed = true;
        saveState();
        render();
        // 再計算
        const m = timeInput?.value;
        const items2 = getCandidatesByTime(m);
        renderSuggestList(items2);
      });
      suggestList.appendChild(li);
    });
  }

  try {
    if (suggestList) {
      new MutationObserver(() => {
        console.log('[state] suggest-list.children =', suggestList.children.length);
      }).observe(suggestList, { childList: true });
    }
  } catch (_) {}

  if (suggestBtn) {
    suggestBtn.addEventListener('click', () => {
      const m = timeInput?.value;
      console.log('[click] suggest', { minutes: m });
      const items = getCandidatesByTime(m);
      renderSuggestList(items);
    });
  }

  // ---- init ----
  migrateTaskDefaults();
  setMode(mode); // 反映 & 初期ログ
  render();
})();
