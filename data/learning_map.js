window.LEARNING_MAP_DATA={
  version:'2026-09-04-v1',
  title:'人才發展學習地圖',
  subtitle:'把課程概念、制度流程、表單與學習證據串成同一條可回溯路徑',
  sourceBoundary:'依 TD-E07 Learning Map V1.1、TD-E01 Day1–Day5 對照表與現行 TD-F01～F07 模擬試行文件整理。公司真實資料、專案設計、制度情境模擬與待正式確認必須分開，不以完成課程直接推論能力提升或 Readiness 升級。',
  sourceDocuments:[
    'TD-E01｜Day1-Day5教材／公司現況／制度設計對照表 V1.0',
    'TD-E07｜教育中心主管Learning Map模擬試行 V1.1',
    'TD-F01｜教育中心主管 模擬試行 V0.2',
    'TD-F02｜教育中心主管人才標準 模擬試行 V0.2',
    'TD-F03_A｜虛擬候選人A 模擬試行 V0.2',
    'TD-F04｜四人Talent Review與九宮格 模擬試行 V0.2',
    'TD-F05_A｜虛擬候選人A教育中心主管 模擬試行 V0.2',
    'TD-F06｜教育中心主管People Risk暨接班覆蓋 模擬試行 V0.2',
    'TD-F07_A｜虛擬候選人A教育中心主管 模擬試行 V0.3'
  ],
  systemFlow:[
    {id:'strategy',code:'方向',title:'使命／願景／價值觀 → 企業策略 → 人才需求',short:'Strategy → Talent',purpose:'先定義組織方向與人才需求，避免從課程清單開始做人才發展。',input:'使命／願景／價值觀、年度策略與營運需求。',output:'可追溯的人才需求與關鍵職位判斷依據。',next:'F01',source:'TD-E01／TD-E04',courseDays:[1],status:'公司資料＋專案轉譯'},
    {id:'f01',code:'TD-F01',title:'關鍵職位辨識',short:'Critical Position',purpose:'確認哪一個職位值得優先投入人才與接班資源。',input:'策略、營運風險、職位影響與替代難度。',output:'教育中心主管等關鍵職位之判定與理由。',next:'F02',source:'TD-F01 模擬試行 V0.2',courseDays:[1,2],status:'制度情境模擬'},
    {id:'f02',code:'TD-F02',title:'關鍵職位人才標準',short:'Target Competency',purpose:'把目標職位需要的成功要求轉成可觀察、可評鑑的 Competency 與目標等級。',input:'JD、工作任務、策略要求、職務專家 Validation。',output:'目標職位 Competency、定義、行為與等級。',next:'F03',source:'TD-F02 模擬試行 V0.2',courseDays:[1,4],status:'制度情境模擬'},
    {id:'f03',code:'TD-F03',title:'Potential／證據蒐集',short:'Evidence',purpose:'用可追溯證據支持人才判斷，不把 Performance 直接等同 Potential。',input:'績效、行為、經驗、事件與多來源觀察證據。',output:'候選人證據包與可供 Talent Review 使用的判斷材料。',next:'F04',source:'TD-F03_A～D 模擬試行 V0.2',courseDays:[2],status:'制度情境模擬'},
    {id:'f04',code:'TD-F04',title:'Talent Review／九宮格',short:'Talent Review',purpose:'整合人才證據進行校準與人才盤點，而不是把單一分數直接當結論。',input:'Performance／Potential 及候選人證據。',output:'Talent Review 結果與後續人才決策輸入。',next:'F05',source:'TD-F04 模擬試行 V0.2',courseDays:[2],status:'制度情境模擬'},
    {id:'f05',code:'TD-F05',title:'接班準備度暨 Competency Gap',short:'Readiness + Gap',purpose:'比較目標職位標準與候選人現況證據，形成 Readiness 與能力落差。',input:'TD-F02 目標標準＋候選人現況證據。',output:'Readiness、Gap、證據充分度與優先發展差距。',next:'E07 Learning Map／F06',source:'TD-F05_A 模擬試行 V0.2',courseDays:[2,4],status:'制度情境模擬'},
    {id:'f06',code:'TD-F06',title:'People Risk／接班覆蓋',short:'People Risk',purpose:'把關鍵職務風險與接班覆蓋放進管理決策，並隨 Readiness 新證據更新。',input:'關鍵職務、候選人 Readiness、覆蓋與風險資訊。',output:'People Risk 與接班覆蓋管理結果。',next:'持續更新',source:'TD-F06 模擬試行 V0.2',courseDays:[2,3],status:'制度情境模擬'},
    {id:'e07',code:'TD-E07',title:'Learning Map｜Gap → 發展任務＋成功證據',short:'Learning Map',purpose:'把 F05 的優先 Gap 轉成真實工作發展任務、學習方法與成功證據；它是 F05 與 F07 之間的設計橋梁，不是新增正式表單。',input:'TD-F02 目標標準＋TD-F05 Readiness／Gap＋工作情境。',output:'2～3 項優先 Learning Map、方法組合與成功證據。',next:'F07',source:'TD-E07 V1.1',courseDays:[4,5],status:'專案設計＋制度情境模擬'},
    {id:'f07',code:'TD-F07',title:'個人發展計畫暨追蹤',short:'IDP',purpose:'把 Learning Map 轉成可執行、可追蹤、可留證的發展計畫。',input:'優先 Gap、Learning Map 任務、成功證據、Owner／Participants。',output:'IDP 執行與 Review 紀錄。',next:'新證據',source:'TD-F07_A 模擬試行 V0.3',courseDays:[5],status:'制度情境模擬'},
    {id:'evidence',code:'Evidence',title:'新證據',short:'New Evidence',purpose:'完成任務或課程不等於能力提升；只有新證據才能支持重新判斷。',input:'工作成果、主管觀察、成果品質、反證與 Review 紀錄。',output:'可支持或不支持能力改變的證據。',next:'F05 重評',source:'TD-E07 V1.1',courseDays:[5],status:'閉環判斷規則'},
    {id:'reassess',code:'Reassess',title:'F05 重新評估 → F06 更新',short:'Close the Loop',purpose:'以新證據重新評估 Gap／Readiness，再更新 People Risk 與接班覆蓋；證據不足就維持原判，不硬升級。',input:'TD-F07 Review 新證據。',output:'新版 F05 Gap／Readiness 與 F06 People Risk／接班覆蓋。',next:'下一輪發展',source:'TD-E07 V1.1',courseDays:[2,5],status:'閉環判斷規則'}
  ],
  learningMapSteps:[
    {step:1,title:'Duty／Task',purpose:'從目標職位真正工作責任出發。',input:'JD＋TD-F02主要成果',gapFix:'訪談現任／前任／上級，補高頻／高風險 Task。',output:'關鍵工作清單',next:'K/S'},
    {step:2,title:'K／S',purpose:'拆出完成 Task 所需 Knowledge／Skill。',input:'Task＋SOP／教材／規則',gapFix:'文件盤點＋實作觀察＋事件訪談。',output:'K/S 矩陣',next:'Competency'},
    {step:3,title:'Competency',purpose:'把 K/S 提升為跨情境、可觀察能力。',input:'TD-F02 定義／行為指標',gapFix:'行為不清就回 TD-F02 Validation。',output:'能力需求',next:'F05 Gap'},
    {step:4,title:'Gap',purpose:'比較 TD-F02 目標與候選人現況證據。',input:'F05 現況／目標／證據充分度',gapFix:'證據不足先補證，不直接計 Gap。',output:'2～3 項優先 Gap',next:'Learning Need'},
    {step:5,title:'Learning Need／成果',purpose:'定義最後要能做到什麼，而不是先選課。',input:'Gap＋工作情境',gapFix:'找真實任務與反例。',output:'可觀察發展成果',next:'方法'},
    {step:6,title:'Learning Map 方法',purpose:'選最貼近工作責任的方法組合。',input:'發展成果',gapFix:'實戰不足先 OJT／代理／專案；知識方法缺口才考慮 Off-JT。',output:'OJT／SD／代理／專案／Mentoring／Off-JT 組合',next:'Evidence'},
    {step:7,title:'Evidence',purpose:'先定義什麼證據能支持能力改變。',input:'TD-F02 行為＋任務成果',gapFix:'加入主管觀察、成果與反證。',output:'證據計畫',next:'TD-F07'},
    {step:8,title:'Review 閉環',purpose:'讓發展證據回到人才決策。',input:'TD-F07 Review 證據',gapFix:'證據不足就維持原判，不硬升級。',output:'新版 F05 Gap／Readiness',next:'TD-F06'}
  ],
  transitionGaps:[
    {title:'訓練策略與需求整合',level:'L2 → L4',task:'依 Strategy／營運需求整理半年訓練重點；訪談需求端；完成 Need → Target Work → Current Capability → Gap → Intervention 與 Do／Don\'t／Why。',method:'Project＋OJT＋Mentoring／Coaching＋SD',evidence:'訪談／需求紀錄、Priority Matrix、半年訓練重點、主管 Challenge、修正版。',flow:'TD-F07 項目1 → 新證據 → 回 TD-F05'},
    {title:'訓練方案設計與 PDDRO 管理',level:'L2 → L4',task:'完整主責一個訓練週期：需求、目標、方案、執行、回饋、成效與改版。',method:'OJT＋Project＋Mentoring＋SD',evidence:'PDDRO 全套、課程／專案計畫、主管／學員／現場證據、改版紀錄、AAR。',flow:'TD-F07 項目2 → 新證據 → 回 TD-F05'},
    {title:'內部講師與主管培育',level:'L2 → L4',task:'共同規劃店經理／副理培育；內部講師觀課／回饋；建立主管發展追蹤。',method:'OJT＋共同帶案＋Mentoring／Coaching',evidence:'主管培育規劃、講師觀課紀錄、回饋／修正、工作應用證據。',flow:'TD-F07 項目3 → 新證據 → 回 TD-F05'}
  ]
};
