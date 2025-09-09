# 作業メモ T_COMMON_ENV

## 目的
プロジェクト初期設定（HTML/CSS/JS構成/Live Server）

## 受け入れ基準（AC）
- 基本表示（index.htmlが表示できる）
- クリック動作（簡易ボタンでConsoleログが出る）
- CSSが適用されている

## 実装方針（HTML/CSS/JS, localStorage）
- HTML: 最小構成の`index.html`（タイトル、見出し、入力、追加ボタン）
- CSS: ベーススタイル（余白/色/フォント）
- JS: エントリポイント`app.js`でDOMバインドとログ

## 参照（設計）
- 設計バンドル: `work_T_COMMON_ENV__design.md`
- Story/Screen対応: `screen_map.yaml`
- スクリーンフロー: `screen_flow.yaml` / `screen_flow_mermaid.md`
- Draw.io: `drawio/SC1.drawio`, `drawio/SC2.drawio`

## タスク分解（小さく）
- [ ] DOMにプレースホルダを追加
- [ ] JSにエントリポイントを追加
- [ ] 動作確認（手動）

## 動作確認観点（最低限）
- 表示できる / 主要要素が見える
- クリック/入力に反応する
- CSSが適用されている
- Consoleにエラーが出ていない

---

## ユーザー受け入れ確認ガイド（ブラウザ手順）
1) `Flow/202509/2025-09-09/hackathon_new/index.html` をブラウザで開く
2) 表示確認（タイトル/見出し/入力+追加/CSS）
3) クリックするとConsoleに`[click] add`が出る
4) エラーなしであればOK
