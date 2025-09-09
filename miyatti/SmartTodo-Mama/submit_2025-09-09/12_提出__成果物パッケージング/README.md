# TODO MVP 提出パッケージ（submit_2025-09-09）

## 起動方法
- ブラウザで `index.html` を開いてください（ローカルでそのまま可）
- 推奨ブラウザ: Chrome / Edge（DevTools Consoleでログ確認）

## デモ手順（抜粋）
1) 仕事/家事モード切替（ボタン）
2) タスク追加 → リスト反映
3) 「今やる一つ」表示 → 完了で繰り上がり
4) 隙間時間候補（5/10/30分）→ 候補クリックで完了
5) 進捗/バッジの更新を確認

Console期待ログ（例）
- `[click] add`
- `[aria] mode-btn aria-pressed: true/false`
- `[click] suggest { minutes: '5' }`
- `[state] candidates(time<= 5 ) = [...]`
- `[state] progress { done, total, ratio }`
- `[state] badge <emoji>`

## 成果物一覧
- UI: `index.html`, `styles.css`, `app.js`
- 企画/仮説: `persona_todo.md`, `problem_todo.md`, `solution_map_todo.md`, `story_map_todo.md`, `ui_wireframe_todo.md`
- 実装計画/進捗: `dev_tasks.yaml`, `progress_report.md`
- 受け入れ/作業メモ: `acceptance_user_guide_T_ST3_TIME_MATCH.md`, `acceptance_user_guide_T_ST3_PROGRESS.md`, `check_T_ST3_TIME_MATCH.md`, `work_T_ST3_TIME_MATCH.md`, `work_T_ST3_PROGRESS.md`

## メモ
- ストレージ: `localStorage`（キー: `todo_tasks`, `todo_mode`）
- モジュール: `app.js` は ESM、`storage.js` を import
- アクセシビリティ: `aria-pressed` ログ、フォーカス順（設計YAML参照）

## 連絡先
- GitHub ID: （記入ください）
- プロジェクト名: TODO MVP（Working Mom）
