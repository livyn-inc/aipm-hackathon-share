# 推奨実行順（依存考慮）

1) Common: T_COMMON_ENV → T_COMMON_STORAGE
2) Stories: ST2系（T_ST2_MODE → T_ST2_FILTER）
3) Stories: ST1系（T_ST1_VIEW → T_ST1_PRIORITY）
4) Stories: ST3系（T_ST3_TIME_MATCH → T_ST3_PROGRESS）
5) Non-Functional: T_NFR_ACCESSIBILITY → T_NFR_PERF

まずCommonを完了させてからStoriesへ進んでください。
