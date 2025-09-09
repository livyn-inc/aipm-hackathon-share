# ユーザー受け入れ確認ガイド（T_ST3_TIME_MATCH）

1) SC2（詳細/完了）に以下のUIが表示される
   - 入力: `#time-input`、ボタン: `#suggest-btn`、リスト: `#suggest-list`
2) `5` と入力して「候補」をクリック
   - Console: `[click] suggest { minutes: '5' }`
   - Console: `[state] candidates(time<= 5 ) = [...]`（先頭5件まで表示）
   - 画面: `#suggest-list` に候補が表示される
3) `10` や `30` でも候補が変化する
4) 候補の完了操作が可能（チェック/完了）
5) Consoleに赤いエラーが出ていない
