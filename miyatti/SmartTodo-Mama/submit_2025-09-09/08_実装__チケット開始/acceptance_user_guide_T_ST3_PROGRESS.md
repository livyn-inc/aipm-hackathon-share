# ユーザー受け入れ確認ガイド（T_ST3_PROGRESS）

1) 進捗表示の確認
   - `#progress-area` に 完了/全体 と % が表示される
2) タスクを完了操作
   - 数値と%が更新される
   - バッジ（✅/🎖/🏅など）が条件に応じて表示される
3) Consoleログ
   - `[state] progress { done, total, ratio }`
   - `[state] badge <emoji>`
4) エラーが出ていない
