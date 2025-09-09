# 作業メモ T_ST1_VIEW（今やる1つ）

## 目的
未完了タスクの先頭を「今やる1つ」として提示し、ワンタップ完了が可能なUIを追加

## 実装方針
- HTML: focusCard（タイトル/ラベル/ボタン）を追加
- JS: getNextTask() で候補選定（mode適用 / 未完了 / 先頭）
- JS: renderFocus() でfocusCardを更新、do-now で完了+再描画
- CSS: カードスタイル追加

## タスク分解
- [ ] HTML: focusCardセクションを追加
- [ ] CSS: .focus-card スタイル
- [ ] JS: getNextTask()/renderFocus()/do-now 実装
- [ ] 動作確認

## 受け入れ基準
- 常に最新の候補表示
- ボタンで完了→次候補表示
- 未該当時のメッセージ
