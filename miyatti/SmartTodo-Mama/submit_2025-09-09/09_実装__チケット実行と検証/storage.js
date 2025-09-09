export function save(key, value) {
  try {
    const s = JSON.stringify(value);
    localStorage.setItem(key, s);
    return true;
  } catch (e) {
    console.error('[storage.save] failed', e);
    return false;
  }
}

export function get(key, defaultValue = null) {
  try {
    const s = localStorage.getItem(key);
    if (s == null) return defaultValue;
    return JSON.parse(s);
  } catch (e) {
    console.error('[storage.get] failed', e);
    return defaultValue;
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error('[storage.remove] failed', e);
    return false;
  }
}

// 公開: 非モジュールスクリプトからも使えるように window に公開
try {
  if (typeof window !== 'undefined') {
    window.storage = { save, get, remove };
  }
} catch (_) {}
