# 設計バンドル T_COMMON_STORAGE

## 関連ストーリー/スクリーン
- Story: 共通（全SCに影響）
- Screens: [SC1, SC2]

## スクリーン設計（YAML 抜粋）
### SC1
```yaml
screen: SC1
title: メイン
layout:
  header: {x: 24, y: 16, w: 512, h: 28, text: "今日の一番"}
  input:  {x: 24, y: 56, w: 360, h: 36, placeholder: "タスクを入力"}
  addBtn: {x: 392, y: 56, w: 96,  h: 36, text: "追加"}
  list:   {x: 24, y: 104, w: 464, h: 320}
```

### SC2
```yaml
screen: SC2
title: 詳細/完了
layout:
  title:   {x: 24, y: 16, w: 512, h: 24, text: "タスク詳細"}
  detail:  {x: 24, y: 56, w: 464, h: 200}
  doneBtn: {x: 24, y: 264, w: 120, h: 36, text: "完了"}
  backBtn: {x: 160, y: 264, w: 120, h: 36, text: "戻る"}
```

## 保存対象の想定
- タスク配列（id, label, completed）
- モード状態（work/home）

## 反映メモ
- localStorageキー名の一貫性
- JSONシリアライズ/パースのエラーハンドリング
- 将来の永続化変更（IndexedDB等）に備え抽象化
