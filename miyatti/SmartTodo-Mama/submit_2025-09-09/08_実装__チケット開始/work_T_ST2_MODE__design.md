# 設計バンドル T_ST2_MODE

## 関連ストーリー/スクリーン
- Story: ST2（コンテキスト切替）
- Screens: [SC1]

## スクリーン設計（YAML 抜粋）
```yaml
screen: SC1
layout:
  modeBtn:{x: 24, y: 440, w: 160, h: 36, text: "仕事モード"}
accessibility:
  aria:
    - element: modeBtn
      role: button
      aria-pressed: true|false
```

## 受け入れ基準
- ワンタップで仕事/家事モードを1秒以内に切替
- 視覚表示（ボタン文言/スタイル）が切替に追随
- aria-pressed が true/false を正しく反映

## 実装メモ
- `mode === 'home'` で家事モード表示
- ボタンに状態クラス（`.is-home`）を付与しスタイル変更
