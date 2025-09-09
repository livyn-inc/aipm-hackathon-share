flowchart LR
  subgraph MVP
    SC1[SC1 メイン] -->|今やる| SC2[SC2 詳細/完了]
    SC2 -->|完了| SC1
  end
  
  subgraph Release1
    SC1 -->|時間選択| SC2
  end 