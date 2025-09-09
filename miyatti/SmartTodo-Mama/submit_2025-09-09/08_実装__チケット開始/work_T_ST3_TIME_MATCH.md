# 作業メモ T_ST3_TIME_MATCH

## 目的
隙間時間（5/10/30分）に応じて未完了タスク候補を提示する（ST3）。

## 受け入れ基準（AC）
- 入力した利用可能時間に応じて、その時間内にできるタスク候補が表示される
- 候補の中から選んで完了できる
- Consoleに観測ログ（click/state/error）が出力され、エラーがない

## 実装方針（HTML/CSS/JS, localStorage）
- HTML: SC2要素に `#time-input`, `#suggest-btn`, `#suggest-list` を追加
- CSS: `#suggest-list` の簡易レイアウト（リスト/バッジ）
- JS: `getCandidatesByTime(tasks, minutes)` 実装し、候補描画と完了処理を追加

## インストルメンテーション（Console出力）
- スニペット: `instrumentation_snippets.md` を参照
- 最低限の観測ログ:
  - `[click] suggest { minutes: N }`
  - `[state] candidates(time<=N) = [...]`
  - `[state] suggest-list.children = K`
  - `[error] exception ...`（例外時のみ）

## 参照（設計）
- 設計バンドル: `work_T_ST3_TIME_MATCH__design.md`
- Story/Screen対応: `screen_map.yaml`（ST3→SC2）
- スクリーンフロー: `screen_flow.yaml` / `screen_flow_mermaid.md`
- Draw.io: `drawio/SC2.drawio`

## タスク分解（小さく）
- [ ] DOMにプレースホルダ（SC2）を追加
- [ ] JSに候補算出関数を追加
- [ ] 候補描画/完了処理を追加
- [ ] 観測ログを追加（上記スニペット）
- [ ] 動作確認（手動）

## 動作確認観点（最低限）
- 表示できる / 主要要素が見える
- クリック/入力に反応する
- CSSが適用されている
- Consoleにエラーが出ていない

---

## ユーザー受け入れ確認ガイド（ブラウザ手順）
1) ファイルを開く → 開発者ツール Console を開く
2) SC2（詳細/完了）に以下があることを確認
   - 入力: `#time-input`、ボタン: `#suggest-btn`、リスト: `#suggest-list`
3) `5` を入力して「候補」をクリック
   - Consoleに `[click] suggest { minutes: '5' }`
   - Consoleに `[state] candidates(time<= 5 ) = [...]`
   - 画面に候補が表示される
4) 候補のチェック/完了ができる
5) 赤いエラーが出ていない
