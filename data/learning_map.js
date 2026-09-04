window.LEARNING_MAP_DATA={
  version:'2026-09-04-semantic-zoom-v5',
  title:'人才發展完整系統地圖',
  subtitle:'先看10環完整閉環；一次只展開一環、一次只學一個子概念。',
  sourceBoundary:'10環主架構依 Day1～Day5 教材邏輯與專案整合架構整理；Day1～Day5只作教材來源，不是流程步驟。',
  stages:[
    {id:'strategy',step:1,title:'Strategy／MVV',question:'企業要去哪裡？需要什麼人才？',sourceDays:[1],output:'策略人才需求',rules:['先有策略與工作需求，才談人才與課程。'],children:[
      {id:'mvv',title:'使命／願景／價值觀',preview:'先確定組織存在的目的、方向與共同準則。',result:'組織方向',keywords:['使命','願景','價值觀']},
      {id:'business-strategy',title:'企業／事業策略',preview:'辨識組織真正要達成的營運與競爭重點。',result:'關鍵策略要求',keywords:['企業策略','事業策略','策略']},
      {id:'talent-need',title:'人才需求轉譯',preview:'把策略要求翻成人才、角色與能力需求。',result:'策略人才需求',keywords:['人才需求','策略性人力資源','HR策略']}
    ]},
    {id:'job',step:2,title:'工作／職位要求',question:'這個職位做成功，到底要做什麼？',sourceDays:[1,4],output:'目標工作輪廓',rules:['JD是輸入，不等於Competency。'],children:[
      {id:'job-role',title:'Job／Role',preview:'先界定職位存在目的與責任範圍。',result:'職位目的／責任',keywords:['Job','職位','職務']},
      {id:'duty',title:'Duty',preview:'把職位拆成主要職責／工作領域。',result:'Duty清單',keywords:['Duty']},
      {id:'task',title:'Task',preview:'再拆成可觀察、可執行的工作任務。',result:'Task清單',keywords:['Task']},
      {id:'work-output',title:'Output／工作事件',preview:'確認工作做到好的成果與關鍵事件。',result:'成功工作證據',keywords:['Output','工作事件','Critical Incident']}
    ]},
    {id:'competency',step:3,title:'Competency職能標準',question:'做成功需要什麼能力與行為？',sourceDays:[1,4],output:'Target Competency',rules:['職能必須可定義、可觀察、可評鑑。'],children:[
      {id:'ks',title:'K／S',preview:'從Task找出需要的Knowledge與Skill。',result:'K/S需求',keywords:['Knowledge','Skill','K/S','知識','技能']},
      {id:'competency-model',title:'Competency',preview:'把K/S與成功行為整合成可跨情境使用的職能。',result:'Competency項目',keywords:['Competency','職能']},
      {id:'behavior',title:'Behavior Criteria',preview:'把抽象職能轉成可觀察的工作行為。',result:'行為準則',keywords:['Behavior','行為準則','行為指標']},
      {id:'level',title:'Level／Validation',preview:'定目標等級，再由主管／SME驗證是否符合工作。',result:'Target Level',keywords:['Level','Validation','職能等級']}
    ]},
    {id:'assessment',step:4,title:'人才辨識與評鑑',question:'我們憑什麼判斷這個人？',sourceDays:[1,3],output:'人才證據檔案',rules:['Performance ≠ Potential；證據不足 ≠ 能力低。'],children:[
      {id:'performance',title:'Performance',preview:'看目前職位已發生的工作結果與表現。',result:'績效證據',keywords:['Performance','績效']},
      {id:'potential',title:'Potential',preview:'看未來承擔更高／更複雜責任的可能性。',result:'潛力判斷',keywords:['Potential','潛力']},
      {id:'tools',title:'評鑑工具',preview:'依目的選360、評鑑中心、面談、心理測驗等工具。',result:'多來源評鑑資料',keywords:['360','評鑑中心','心理測驗','結構式職能面談']},
      {id:'behavior-evidence',title:'STAR／行為證據',preview:'把觀察轉成可追溯的情境、行動與結果證據。',result:'可觀察證據',keywords:['STAR','行為證據','行為觀察']}
    ]},
    {id:'talent-review',step:5,title:'Talent Review',question:'人才要怎麼校準、分流與進入接班評估？',sourceDays:[2,3],output:'人才分流／候選池',rules:['九宮格是人才分流，不等於特定職位Readiness。'],children:[
      {id:'calibration',title:'Panel校準',preview:'讓不同主管用共同證據與標準討論人才。',result:'一致判斷',keywords:['校準','Panel','Talent Review']},
      {id:'nine-box',title:'Performance × Potential',preview:'用兩個不同維度做人才分流，不混成單一分數。',result:'九宮格／人才分流',keywords:['九宮格','Performance','Potential']},
      {id:'candidate-pool',title:'候選池／後續行動',preview:'決定誰進一步做接班、發展或補證。',result:'候選人與後續行動',keywords:['候選池','人才盤點','高潛力']}
    ]},
    {id:'readiness-gap',step:6,title:'Readiness／Gap',question:'距離目標職位還有多遠？差在哪裡？',sourceDays:[2,4],output:'Readiness＋優先Gap',rules:['證據不足先補證；不要硬算Gap。'],children:[
      {id:'conditions',title:'必要條件',preview:'先看資格、經驗與重要歷練是否具備。',result:'條件符合度',keywords:['必要條件','資格','經驗']},
      {id:'target-current',title:'Target vs Current',preview:'用同一個Competency／Level比較目標與現況。',result:'能力比較',keywords:['Target','Current','目標等級','現況能力']},
      {id:'gap',title:'Competency Gap',preview:'找出真正差距與需要補證的地方。',result:'優先Gap',keywords:['Competency Gap','Gap','能力落差']},
      {id:'readiness',title:'Readiness',preview:'綜合條件、Gap、實戰與證據判斷何時能接。',result:'Ready Now／1–2 Years／2+ Years',keywords:['Readiness','Ready Now']}
    ]},
    {id:'learning-map',step:7,title:'Learning Map／IDP',question:'差距確定後，要怎麼補？',sourceDays:[2,4,5],output:'Learning Map／IDP',rules:['Gap ≠ Training Need；不要看到Gap就排課。'],children:[
      {id:'priority-gap',title:'優先Gap',preview:'不是全部都做，先選最影響目標角色的2～3項。',result:'發展優先順序',keywords:['優先Gap','Gap']},
      {id:'learning-need',title:'Learning Need／成果',preview:'先定義最後要能做到什麼，不先選課。',result:'可觀察發展成果',keywords:['Learning Need','學習需求','發展成果']},
      {id:'map-method',title:'Learning Map',preview:'把工作、能力差距與學習／發展路徑串起來。',result:'學習地圖',keywords:['Learning Map','學習地圖']},
      {id:'idp',title:'IDP',preview:'把優先Gap轉成具體任務、方法、證據與Review。',result:'個人發展計畫',keywords:['IDP','個人發展計畫']}
    ]},
    {id:'development',step:8,title:'OJT／SD／Off-JT',question:'用什麼方式讓能力真的在工作中長出來？',sourceDays:[4,5],output:'發展任務／實作經驗',rules:['OJT不是丟去做；要有目標、觀察、回饋與修正。'],children:[
      {id:'method-choice',title:'方法選擇',preview:'依Gap原因選OJT、SD、Off-JT、Project、Mentoring等。',result:'方法組合',keywords:['OJT','SD','Off-JT','Mentoring','Project']},
      {id:'ojt',title:'OJT',preview:'在真實工作中練習、觀察、回饋與修正。',result:'工作中能力發展',keywords:['OJT','工作中訓練','PDCA']},
      {id:'sd',title:'SD',preview:'由學習者主動規劃與補強自己的能力。',result:'自主發展行動',keywords:['SD','自我發展']},
      {id:'offjt',title:'Off-JT／其他',preview:'需要知識、方法或跨情境輸入時搭配課程、專案或Mentoring。',result:'補充學習／發展經驗',keywords:['Off-JT','課程','Mentoring','Project']}
    ]},
    {id:'review',step:9,title:'新證據／回評',question:'完成發展後，真的變強了嗎？',sourceDays:[1,2,3,5],output:'更新後的Gap／Readiness',rules:['活動完成 ≠ 能力提升；只有新證據能支持重評。'],children:[
      {id:'new-evidence',title:'新工作／行為證據',preview:'重新看工作成果、行為與主管／多來源觀察。',result:'新證據包',keywords:['新證據','行為改變','工作證據']},
      {id:'gap-review',title:'Gap重評',preview:'拿新證據重新和Target Competency比較。',result:'Gap變化',keywords:['Gap','重新評估','回評']},
      {id:'readiness-review',title:'Readiness重評',preview:'確認是否真的更接近目標職位。',result:'更新Readiness',keywords:['Readiness','重評']},
      {id:'effectiveness',title:'成效判斷',preview:'看是否有工作應用與成果，不只看完課或滿意度。',result:'學習／發展成效',keywords:['訓練成效','學習成效','行為改變']}
    ]},
    {id:'decision',step:10,title:'人才／接班決策',question:'現在可以做什麼人才與接班決策？',sourceDays:[2,5],output:'人才決策＋下一輪',rules:['人才決策要能被新證據更新，不是一評定終身。'],children:[
      {id:'coverage',title:'Succession Coverage',preview:'確認關鍵職位是否真的有可用的接班覆蓋。',result:'有效Coverage',keywords:['Succession Coverage','接班覆蓋']},
      {id:'risk',title:'People Risk',preview:'把職位影響、Coverage與最佳Readiness轉成風險視角。',result:'People Risk',keywords:['People Risk','人才風險']},
      {id:'succession-decision',title:'人才／接班行動',preview:'決定立即接任、持續發展、補證或其他人才行動。',result:'人才決策',keywords:['接班','人才決策','後續行動']},
      {id:'restart',title:'下一輪',preview:'策略、工作或人才狀態改變，就重新啟動標準與發展循環。',result:'下一輪人才發展',keywords:['Review','下一輪','更新']}
    ]}
  ],
  loops:[
    {from:9,to:6,label:'新證據 → Gap／Readiness重評'},
    {from:9,to:10,label:'新證據 → 人才／接班決策'},
    {from:10,to:1,label:'策略／人才需求改變 → 重啟循環'}
  ]
};
