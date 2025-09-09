# Console観測ログ用スニペット（T_ST3_TIME_MATCH）

## 隙間時間入力と候補提示
```js
const timeInput = document.querySelector('#time-input');
const suggestBtn = document.querySelector('#suggest-btn');

function getCandidatesByTime(tasks, minutes){
  const m = Number(minutes) || 0;
  const list = tasks.filter(t => !t.completed && (t.estimateMin || 0) <= m);
  console.log('[state] candidates(time<=', m, ')=', list.slice(0, 5));
  return list;
}

suggestBtn?.addEventListener('click', () => {
  const m = timeInput?.value;
  console.log('[click] suggest', { minutes: m });
});
```

## MutationObserver（候補表示先の監視）
```js
const container = document.querySelector('#suggest-list');
try {
  new MutationObserver(() => {
    console.log('[state] suggest-list.children =', container?.children?.length || 0);
  }).observe(container, { childList: true });
} catch (e) {}
```

## 例外の捕捉
```js
try {
  // time match flow
} catch (err) {
  console.error('[error] exception', err);
}
```

# Console観測ログ用スニペット（T_ST3_PROGRESS）

## 進捗計測/バッジ
```js
function calcProgress(tasks){
  const total = tasks.length;
  const done = tasks.filter(t=>t.completed).length;
  const ratio = total ? Math.round((done/total)*100) : 0;
  console.log('[state] progress', { done, total, ratio: ratio + '%' });
  const badge = done >= 5 ? '🏅5+' : done >= 3 ? '🎖3+' : done >= 1 ? '✅1+' : '';
  console.log('[state] badge', badge);
  return {done, total, ratio, badge};
}
```
