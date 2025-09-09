# 作業メモ T_COMMON_STORAGE

## 目的
localStorage抽象化ユーティリティ（保存/読込/削除）

## 受け入れ基準（AC）
- save/get/remove が提供され、例外無く動作する
- タスク配列の保存・復元ができる
- モード状態の保存・復元ができる

## 実装方針
- `storage.js` にユーティリティを切り出し
- API: `save(key, value)`, `get(key, defaultValue)`, `remove(key)`
- JSONシリアライズ/パース（try/catch）

## 参照（設計）
- 設計バンドル: `work_T_COMMON_STORAGE__design.md`
- Story/Screen対応: `screen_map.yaml`

## タスク分解（小さく）
- [ ] storage.js を作成（save/get/remove）
- [ ] app.js からタスクとモード状態を永続化
- [ ] 動作確認（保存→再読込）

## 動作確認観点
- 追加したタスクがページ再読込後も残る
- モード切替が再読込後も保持される
- Consoleエラーが出ていない
