# 作業メモ T_ST2_MODE

## 目的
家事/仕事モード切替（状態管理+UI）

## 受け入れ基準（AC）
- ワンタップで1秒以内に切替
- 文言/スタイルが切替に追随
- aria-pressed が正しく反映

## 実装方針
- app.js: setMode時に `.is-home` クラスを modeBtn に付与/削除
- styles.css: `.is-home` 用の配色（背景/枠/文字色）

## タスク分解
- [ ] CSS: .btn.is-home スタイルを追加
- [ ] JS: setModeでクラス切替を追加
- [ ] 動作確認
