# 作業メモ T_ST1_PRIORITY（優先度算出）

## 目的
未完了タスクの優先度をスコア化して並べ替え、今やる1つ/リスト表示の品質を高める。

## 実装方針
- タスクに任意属性 `estimateMin`（推定分, 既定15）/ `importance`（1-3, 既定2）を追加許容
- `scoreTask(t)` を追加し、`getSortedTasks()` でモード内の未完了をスコア降順に並べ替え
- `render()` と `renderFocus()` はこの順序を使用

## タスク分解
- [ ] JS: scoreTask/getSortedTasks 実装
- [ ] JS: render/renderFocus で順序を適用
- [ ] 既存データ互換（estimate/importance未定義なら既定値）
- [ ] 動作確認

## 受け入れ基準
- 明確な並び替えが確認できる
- 既存の動作（追加/完了/モード切替/保存）は維持
