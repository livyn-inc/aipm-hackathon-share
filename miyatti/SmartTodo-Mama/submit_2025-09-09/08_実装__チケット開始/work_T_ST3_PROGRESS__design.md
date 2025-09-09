# 設計バンドル T_ST3_PROGRESS

## 関連ストーリー/スクリーン
- Story: ST3
- Screens: [SC2]

## スクリーン設計（YAML 抜粋）
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

## 追加UI（進捗/バッジ）案
- 進捗: 完了件数/全件数、%表示
- バッジ: 1件/3件/5件などの達成バッジ

## 反映メモ
- 完了イベントで進捗を再計算・描画
- 進捗はlocalStorageから計算（tasks配列）
- Consoleに進捗ログを出す（後述スニペット）
