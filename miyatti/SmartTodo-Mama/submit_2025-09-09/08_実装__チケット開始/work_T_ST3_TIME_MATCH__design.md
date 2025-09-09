# 設計バンドル T_ST3_TIME_MATCH

## 関連ストーリー/スクリーン
- Story: ST3
- Screens: [SC2]

## スクリーン設計（YAML 抜粋）
### SC1
```yaml
screen: SC1
title: メイン
tokens:
  color_primary: "#3b82f6"
  color_bg: "#f8fafc"
  spacing: 8
  radius: 12
  font_size_title: 20
layout:
  header: {x: 24, y: 16, w: 512, h: 28, text: "今日の一番"}
  input:  {x: 24, y: 56, w: 360, h: 36, placeholder: "タスクを入力"}
  addBtn: {x: 392, y: 56, w: 96,  h: 36, text: "追加"}
  list:   {x: 24, y: 104, w: 464, h: 320}
  modeBtn:{x: 24, y: 440, w: 160, h: 36, text: "仕事モード"}
links_stories: [ST1, ST2]
accessibility:
  focus_order: [input, addBtn, list, modeBtn]
  aria:
    - element: modeBtn
      role: button
      aria-pressed: true|false
```

### SC2
```yaml
screen: SC2
title: 詳細/完了
tokens:
  color_primary: "#3b82f6"
  color_bg: "#ffffff"
  spacing: 8
  radius: 12
  font_size_title: 18
layout:
  title:   {x: 24, y: 16, w: 512, h: 24, text: "タスク詳細"}
  detail:  {x: 24, y: 56, w: 464, h: 200}
  doneBtn: {x: 24, y: 264, w: 120, h: 36, text: "完了"}
  backBtn: {x: 160, y: 264, w: 120, h: 36, text: "戻る"}
links_stories: [ST3]
accessibility:
  focus_order: [doneBtn, backBtn]
  aria: []
```

## AAワイヤー
### SC1
```
+--------------------------------------------------+
| 今日の一番                                       |
+------------------------+-----------+------------+
| [ タスクを入力........ ] | [追加]    | (仕事モード) |
+------------------------+-----------+------------+
| • 候補タスク1                                      |
| • 候補タスク2                                      |
| • 候補タスク3                                      |
+--------------------------------------------------+
```

### SC2
```
+----------------------------------------------+
| タスク詳細                                   |
+----------------------------------------------+
| [内容.....................................]  |
|                                              |
| [ 完了 ]    [ 戻る ]                         |
+----------------------------------------------+
```

## Draw.io
- 図面: `drawio/SC1.drawio`, `drawio/SC2.drawio`（存在）
- 出力先（任意）: `drawio/exports/SC1.png`, `drawio/exports/SC2.png`

## 反映メモ
- コンポーネントIDとDOMの紐付け
- アクセシビリティ（focus順/ARIA）の確認
- スクリーンフロー整合性（`screen_flow.yaml`）
