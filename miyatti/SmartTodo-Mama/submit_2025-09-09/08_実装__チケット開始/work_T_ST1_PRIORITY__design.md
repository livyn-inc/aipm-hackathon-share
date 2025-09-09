# 設計バンドル T_ST1_PRIORITY（優先度算出）

## 目的
残り時間・重要度を考慮し、現在モード内の未完了タスクから「次にやるべき順」を算出する。

## スコア設計（シンプル版）
- 入力: `t.estimateMin`（推定分）/ `t.importance`（1-3）/ `nowRemainingMin`（画面上の残り時間、当面は固定値=30）
- ルール:
  - フィルタ: `category === mode && !completed`
  - 係数: `score = importance * 10 - clamp(estimateMin, 0, 60)`
  - 同点は作成時刻（id昇順）
- 出力: 降順で並べた配列（先頭が最優先）

## UI反映
- 今やる1つ: 先頭を反映（既実装）
- 追加情報（任意）: タスク行に小さく `★importance / ⏱estimate` を表示

## 受け入れ基準
- スコアに基づく並び替え結果が一貫して得られる
- estimate/importance未設定のタスクは既定値（estimate=15, importance=2）で扱う
