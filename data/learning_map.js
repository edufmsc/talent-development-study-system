window.LEARNING_MAP_DATA={
  version:'2026-09-04-talent-lifecycle-v4',
  title:'人才發展完整系統地圖',
  subtitle:'不是依 Day 排課，而是從組織方向一路走到人才標準、辨識、發展、證據與回評的完整循環。Day1～Day5只作為教材來源。',
  sourceBoundary:'主幹依認證班官方課程架構與 Day1～Day5 教材整合；「新證據回評」與 Readiness／People Risk 更新為課程與專案成果整合出的閉環學習模型。',
  officialBackbone:['願景／使命','公司策略／事業策略','策略性人才資本管理系統建立','策略性人才資本管理系統管理','人才辨識與評鑑','專業能力盤點與學習地圖規劃','OJT／SD','Off-JT'],
  stages:[
    {
      id:'direction',step:1,title:'組織方向',short:'Why｜往哪裡走？',sourceDays:[1],
      question:'公司要去哪裡？人才發展要支援什麼？',
      inputs:['願景／使命','公司策略／事業策略','組織與工作變化'],
      process:['釐清願景、使命與企業策略','把策略轉成關鍵工作與人才需求','確認人才發展優先順序'],
      outputs:[
        {id:'talent-needs',title:'策略人才需求',flow:['願景／使命','企業／事業策略','關鍵成功要求','關鍵工作／角色','人才需求／優先順序']}
      ],
      rules:['人才發展不是從「要開什麼課」開始，而是先回答組織要達成什麼。','策略或工作改變時，後面的職能標準與發展內容也要重新檢視。'],
      keywords:['使命','願景','價值觀','企業策略','HR策略','策略性人力資源']
    },
    {
      id:'system',step:2,title:'人才策略與系統',short:'System｜怎麼管理人才？',sourceDays:[1,2],
      question:'要用什麼制度把策略、人才與發展串起來？',
      inputs:['策略人才需求','現有人資制度／人才資料','人才供給與風險'],
      process:['HR策略與企業營運策略連結','建立／管理策略性人才資本管理系統','配置高潛力人才、關鍵人才、接班、人才績效指標、人才風險與個人發展等管理機制'],
      outputs:[
        {id:'talent-architecture',title:'人才管理架構',flow:['企業策略','HR／人才策略','人才制度與管理機制','人才資料與決策節點','發展與回饋機制']}
      ],
      rules:['制度要能支援後續決策，不是只有表單存在。','人才資料各自存在，不等於已形成共同的人才決策流程。'],
      keywords:['人才資本管理','高潛力','關鍵能力人才','接班','人才風險','個人發展計畫','人才管理績效指標']
    },
    {
      id:'standard',step:3,title:'職務／Competency標準',short:'Standard｜成功長什麼樣？',sourceDays:[1,4],
      question:'這個職務做成功，到底需要什麼工作、知識技能、行為與職能？',
      inputs:['策略人才需求','Job／職位說明','Duty／Task／工作事件'],
      process:['Job → Duty → Task 拆解','Task → Behavior／K/S','K/S＋成功行為 → Competency','定義 Behavior／Level 並做 Validation'],
      outputs:[
        {id:'competency-model',title:'Competency／職位人才標準',flow:['Job','Duty','Task','Behavior／K/S','Competency','Behavior Criteria／Level','Validation']},
        {id:'success-profile',title:'成功人才輪廓',flow:['關鍵工作','成功行為','必要知識技能','職能要求','目標等級／可觀察標準']}
      ],
      rules:['JD 不等於 Competency；JD 說工作責任，Competency 要描述做成功需要的能力與行為。','沒有目標標準，就無法客觀比較人才現況、Gap 或 Readiness。'],
      keywords:['Job','Duty','Task','K/S','Competency','職能模型','行為準則','職能發展流程','Validation']
    },
    {
      id:'assessment',step:4,title:'人才辨識與評鑑',short:'Evidence｜憑什麼判斷？',sourceDays:[1,3],
      question:'如何取得可信、可觀察的人才證據？',
      inputs:['人才／職能標準','評鑑目的','待評估人才'],
      process:['先確認評鑑目的','定義成功標準／Dimensions','依目的選工具：360、評鑑中心、面談、STAR、多來源觀察等','實施、觀察、記錄行為與結果','整合證據形成判斷'],
      outputs:[
        {id:'evidence-profile',title:'人才證據檔案',flow:['評鑑目的','成功標準','選工具','實施／觀察','記錄行為','整合多來源證據','形成證據檔案']},
        {id:'assessment-center',title:'評鑑中心證據鏈',flow:['目標職位／Dimensions','選模擬情境','讓行為發生','評審觀察／記錄','分類／評等','整合評鑑結果']}
      ],
      rules:['先決定要回答什麼人才問題，再選評鑑工具。','Performance 不等於 Potential。','證據不足不等於能力低；先補證。','工具結果要回到共同的成功標準比較。'],
      keywords:['人才辨識','評鑑','360','評鑑中心','STAR','Potential','Performance','行為證據','多來源']
    },
    {
      id:'talent-decision',step:5,title:'Talent Review／接班與人才風險',short:'Decision｜誰要管？風險在哪？',sourceDays:[2,3],
      question:'有了人才證據後，如何形成人才分流、接班與風險決策？',
      inputs:['Performance','Potential與證據','目標職位標準／候選人才'],
      process:['Talent Review／校準','Performance × Potential 做人才分流','對目標職位做 Readiness 比較','計算／判斷 Succession Coverage','辨識 People Risk 與管理優先順序'],
      outputs:[
        {id:'talent-review',title:'Talent Review／人才分流',flow:['Performance','Potential＋證據','校準討論','九宮格／人才分流','候選池／後續行動']},
        {id:'succession-risk',title:'Readiness／Coverage／People Risk',flow:['目標職位標準','候選人證據','職位適配／Readiness','有效Coverage','People Risk','管理優先順序']}
      ],
      rules:['九宮格是人才分流工具，不等於特定職位 Readiness。','有候選人名單不等於有人 Ready。','高績效×高潛力仍需回到目標職位標準比較。'],
      keywords:['Talent Review','九宮格','人才盤點','校準','Readiness','Succession Coverage','People Risk','接班','高潛力']
    },
    {
      id:'gap-map',step:6,title:'能力 Gap／Learning Map',short:'Gap｜差什麼？要學什麼？',sourceDays:[4],
      question:'目標要求與目前能力之間差多少？差距應怎麼轉成學習路徑？',
      inputs:['目標 Competency／Level','現況能力證據','Duty／Task 與工作情境'],
      process:['Target vs Current 比較','確認 Gap 與證據充分度','分析 Gap 原因','定義 Learning Need／可觀察成果','建立 Learning Map／學習路徑'],
      outputs:[
        {id:'gap-analysis',title:'Competency Gap',flow:['Target Competency','現況證據','比較','Gap／待補證','優先差距']},
        {id:'learning-map',title:'Learning Map',flow:['Duty／Task','K/S','Competency','Gap','Learning Need／成果','學習主題／路徑','發展方法']}
      ],
      rules:['有 Gap 不代表一定要訓練。','證據不足時，先補證，不硬算 Gap。','Learning Map 應從工作與能力差距出發，不只是課程清單。'],
      keywords:['能力盤點','Gap','Learning Map','Duty','Task','K/S','Learning Need','專業能力盤點']
    },
    {
      id:'development-design',step:7,title:'IDP／發展設計',short:'Plan｜怎麼補？',sourceDays:[2,4,5],
      question:'哪些差距最重要？要用什麼發展任務與方法組合？',
      inputs:['優先 Gap／Learning Map','工作情境','可用資源與時間'],
      process:['選 2～3 個優先發展項目','定義可觀察的發展成果','選擇適合的方法組合','設計工作任務、責任、支持與 Review 節點','先定義成功證據'],
      outputs:[
        {id:'idp',title:'IDP／個人發展計畫',flow:['優先Gap','發展成果','方法組合','具體工作任務','Owner／支持資源','成功證據','Review節點']}
      ],
      rules:['發展成果要描述「能做到什麼／產出什麼」，不是只列活動。','不要所有 Gap 都塞進同一期 IDP。','方法要對應 Gap 原因，而不是看到 Gap 就排課。'],
      keywords:['IDP','個人發展計畫','SMARTA','發展計畫','Learning Map','發展需求']
    },
    {
      id:'development',step:8,title:'發展執行｜OJT／SD／Off-JT',short:'Develop｜真的去做',sourceDays:[4,5],
      question:'如何把發展真正放進工作與學習活動中？',
      inputs:['IDP／發展成果','工作任務','主管／Mentor／學習資源'],
      process:['依需要組合 Off-JT、OJT、SD','把知識學習轉成工作任務與練習','主管／Mentor觀察與回饋','循環修正與再實作'],
      outputs:[
        {id:'development-cycle',title:'發展執行循環',flow:['Gap／發展成果','Off-JT取得知識方法','OJT在工作中練習','SD自主補強','回饋／修正','再次實作']},
        {id:'ojt-cycle',title:'系統化 OJT',flow:['Plan','Do','Check','Act','再Plan／持續改善']}
      ],
      rules:['Off-JT、OJT、SD 是不同發展方式，可依需求組合。','OJT 不是「丟到現場自己做」；需要目標、任務、觀察、回饋與修正。'],
      keywords:['OJT','SD','Off-JT','工作中訓練','自我發展','PDCA','訓練規劃','Mentoring']
    },
    {
      id:'review',step:9,title:'新證據／成效／回評',short:'Review｜真的變強了嗎？',sourceDays:[1,2,3,5],
      question:'完成發展後，如何證明能力有改變，並更新人才決策？',
      inputs:['工作成果','行為觀察','發展／學習紀錄','主管與多來源證據'],
      process:['蒐集新的工作／行為證據','比較原目標 Competency／成功標準','判斷 Gap 是否縮小','重新評估 Readiness／人才判斷','更新 Coverage／People Risk／下一輪 IDP','若策略或工作改變，回頭更新人才標準'],
      outputs:[
        {id:'evidence-loop',title:'新證據回評閉環',flow:['發展活動／工作實作','新工作／行為證據','對照成功標準','Gap／Readiness重評','Talent Review／People Risk更新','下一輪發展／標準修正']},
        {id:'learning-effectiveness',title:'學習／發展成效',flow:['學習活動','行為改變','工作應用／成果','證據','成效判斷','改善下一輪']}
      ],
      rules:['完成課程、OJT 或 IDP 活動 ≠ 能力提升。','只有新證據才能支持重評。','證據不足就維持原判，不為了「有進步」而硬升級。'],
      keywords:['行為改變','訓練成效','學習成效','Review','回評','新證據','績效發展','Behaviour Change']
    }
  ],
  returnLinks:[
    {from:'review',to:'assessment',label:'新證據 → 再辨識／再評鑑'},
    {from:'review',to:'talent-decision',label:'新證據 → Readiness／Risk更新'},
    {from:'review',to:'gap-map',label:'新證據 → Gap重評'},
    {from:'review',to:'direction',label:'策略／工作改變 → 重啟循環'},
    {from:'standard',to:'assessment',label:'人才標準 → 評鑑標準'},
    {from:'standard',to:'gap-map',label:'目標標準 → Gap比較'}
  ],
  universalRules:[
    'Strategy／工作要求先於課程與發展方法。',
    'Performance ≠ Potential；九宮格 ≠ Readiness。',
    '證據不足 ≠ 能力低；先補證。',
    'Gap ≠ Training Need；先判斷原因。',
    '活動完成 ≠ 能力提升；要用新工作／行為證據回評。'
  ]
};
