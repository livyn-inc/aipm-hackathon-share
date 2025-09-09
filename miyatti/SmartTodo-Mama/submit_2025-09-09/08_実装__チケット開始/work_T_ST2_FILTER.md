# 作業メモ T_ST2_FILTER

## 目的
モード別にタスク表示をフィルタ（仕事=work / 家事=home）

## 実装方針
- タスクスキーマに `category` を追加
- 追加時: 現在 `mode` を category に付与
- 描画時: `tasks.filter(t => t.category === mode)` を使用

## タスク分解
- [ ] JS: addTask に category を追加
- [ ] JS: render をフィルタ付きに修正
- [ ] 既存タスクの互換: category 未定義は全モードで表示 or 既定をworkに
- [ ] 動作確認

## 受け入れ基準
- モード切替でリスト内容が切り替わる
- 新規追加は現在モードのカテゴリーで保存
