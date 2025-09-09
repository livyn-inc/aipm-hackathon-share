# 作業メモ T_ST3_PROGRESS

## 目的
達成感可視化（進捗/バッジ）を表示し、完了操作と連動して更新する。

## 受け入れ基準（AC）
- 完了件数/全件数/%が表示される
- バッジ（1/3/5件など）が表示・更新される
- Consoleに進捗ログ（progress/badge）が出力される

## 実装方針（HTML/CSS/JS, localStorage）
- HTML: 進捗表示領域 `#progress-area` を追加（SC2内/またはメイン）
- CSS: バッジの簡易スタイル
- JS: `calcProgress(tasks)` で進捗算出、描画・イベント連動

## インストルメンテーション（Console出力）
- スニペット: `instrumentation_snippets.md`（T_ST3_PROGRESS）
- 期待ログ:
  - `[state] progress { done, total, ratio }`
  - `[state] badge <emoji>`

## 参照（設計）
- 設計バンドル: `work_T_ST3_PROGRESS__design.md`
- Story/Screen対応: `screen_map.yaml`（ST3→SC2）

## タスク分解（小さく）
- [ ] DOMに `#progress-area` を追加
- [ ] JSに `calcProgress(tasks)` を実装
- [ ] 完了イベント連動で再計算・再描画
- [ ] 観測ログを追加
- [ ] 動作確認（手動）

## 動作確認観点
- 完了操作で数値・バッジが更新
- Consoleにエラー無し
