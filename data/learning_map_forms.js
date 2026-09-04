window.LEARNING_MAP_FORMS={
  version:'2026-09-04-god-view-v1',
  storageKey:'td-learning-map-workbook-v1',
  nodes:{
    strategy:{
      kind:'project',label:'專案互動工作區｜非公司正式表單',
      rules:['先從使命／願景／價值觀與策略辨識人才需求，不從課程清單開始。','資料缺口要標示來源、Owner與補證方式。'],
      sections:[
        {id:'direction',title:'方向與策略輸入',fields:[
          {key:'mission',label:'使命',type:'textarea'},{key:'vision',label:'願景',type:'textarea'},{key:'values',label:'價值觀／待確認價值觀',type:'textarea'},
          {key:'strategy',label:'年度／部門策略',type:'textarea'},{key:'businessNeed',label:'營運／人才需求',type:'textarea'},{key:'sourceVersion',label:'來源／版本／期間',type:'text'}
        ]},
        {id:'translation',title:'Strategy → Talent 轉譯',fields:[
          {key:'criticalWork',label:'策略要求的關鍵工作／成果',type:'textarea'},{key:'talentImplication',label:'人才需求含意',type:'textarea'},{key:'candidateRoles',label:'可能關鍵職位',type:'textarea'},{key:'missingData',label:'缺少資料／Owner／補證方式',type:'textarea'}
        ]}
      ]
    },
    f01:{
      kind:'official',label:'TD-F01｜關鍵職務辨識與風險評估表｜版次0.2',
      rules:['以策略關聯、營運連續性、影響範圍、替代難度、知識集中、未來需求形成判斷。','核定是否列入關鍵職務後，決定是否建置／更新 TD-F02。'],
      sections:[
        {id:'basic',title:'一、職務基本資料',fields:[
          {key:'role',label:'職務名稱',type:'text'},{key:'unit',label:'所屬單位',type:'text'},{key:'manager',label:'直接主管',type:'text'},{key:'headcount',label:'現有人數',type:'text'},{key:'date',label:'評估日期',type:'date'},{key:'evaluator',label:'評估主管',type:'text'},{key:'strategyInput',label:'策略／人才需求輸入與來源版本',type:'textarea'}
        ]},
        {id:'risk',title:'二、關鍵性與風險評估',repeat:{rows:6,rowLabels:['策略關聯性','營運連續性','管理／影響範圍','替代難度','知識集中','未來需求'],fields:[
          {key:'level',label:'判定',type:'select',options:['','高','中','低']},{key:'reason',label:'事實／判斷說明',type:'textarea'},{key:'evidence',label:'主要證據／資料來源',type:'text'}
        ]}},
        {id:'initial',title:'三、初評結果｜職務重要性 × 替代脆弱度',fields:[
          {key:'importance',label:'職務重要性',type:'select',options:['','高','中','低']},{key:'vulnerability',label:'替代脆弱度',type:'select',options:['','高','中','低']},{key:'matrix',label:'矩陣結果',type:'select',options:['','A','B','C']},{key:'critical',label:'是否列入關鍵職務',type:'select',options:['','是','否','觀察']},{key:'riskNote',label:'風險判定說明',type:'textarea'}
        ]},
        {id:'approval',title:'四、核定結果',fields:[
          {key:'grade',label:'核定級別',type:'select',options:['','A','B','C']},{key:'result',label:'核定結果',type:'select',options:['','關鍵職務','觀察','一般職務']},{key:'note',label:'核定說明',type:'textarea'},{key:'updateF02',label:'建置／更新TD-F02',type:'select',options:['','是','否']},{key:'f02Date',label:'預定日',type:'date'},{key:'nextDate',label:'下次檢視日',type:'date'}
        ]}
      ]
    },
    f02:{
      kind:'official',label:'TD-F02｜關鍵職位人才標準建置／核定表｜版次0.2',
      rules:['Competency 必須具名稱、類型、定義、主要行為指標、目標等級與證據方式。','建置依據要保留策略／人才需求、JD、訪談／工作事件等版本與期間。'],
      sections:[
        {id:'basic',title:'一、職位基本資料',fields:[
          {key:'role',label:'職位名稱',type:'text'},{key:'unit',label:'所屬單位',type:'text'},{key:'roleId',label:'職位編號',type:'text'},{key:'manager',label:'直屬主管',type:'text'},{key:'buildDate',label:'建置日期',type:'date'},{key:'version',label:'版次／生效日',type:'text'},{key:'basis',label:'建置依據／資料版本／期間',type:'textarea'}
        ]},
        {id:'purpose',title:'二、職位目的',fields:[{key:'purpose',label:'本職位存在的核心目的與主要價值',type:'textarea'}]},
        {id:'outcomes',title:'三、主要成果',repeat:{rows:4,fields:[{key:'outcome',label:'主要成果／責任',type:'textarea'},{key:'measure',label:'主要衡量／佐證方式',type:'textarea'}]}},
        {id:'requirements',title:'四、必要資格／經驗／專業知識',fields:[{key:'qualification',label:'必要資格',type:'textarea'},{key:'experience',label:'必要經驗',type:'textarea'},{key:'knowledge',label:'專業知識',type:'textarea'}]},
        {id:'competency',title:'五、Competency 人才標準',repeat:{rows:8,fields:[
          {key:'name',label:'Competency名稱',type:'text'},{key:'type',label:'類型',type:'select',options:['','共同／核心','管理','功能']},{key:'definition',label:'定義',type:'textarea'},{key:'behavior',label:'主要行為指標',type:'textarea'},{key:'target',label:'目標等級',type:'select',options:['','L1','L2','L3','L4']},{key:'evidence',label:'證據方式',type:'textarea'},{key:'note',label:'備註',type:'text'}
        ]}},
        {id:'approval',title:'六、建置／核定資訊',fields:[{key:'builder',label:'建置主管',type:'text'},{key:'expert',label:'職務專家／現任者',type:'text'},{key:'hr',label:'教育中心／人資',type:'text'},{key:'upper',label:'上一級主管',type:'text'},{key:'approver',label:'核決主管',type:'text'},{key:'date',label:'核定日期',type:'date'},{key:'note',label:'核定說明',type:'textarea'}]}
      ]
    },
    f03:{
      kind:'official',label:'TD-F03｜人才辨識暨Potential評鑑紀錄表｜版次0.1',
      rules:['Potential 先依重要工作／行為與 STAR 證據完成 P1～P4 初評。','Performance 不得直接作為 Potential 高／中／低評分依據，也不得回溯修改缺乏行為證據的 Potential 判斷。'],
      sections:[
        {id:'basic',title:'一、候選人基本資料',fields:[{key:'candidate',label:'候選人',type:'text'},{key:'currentRole',label:'現職／單位',type:'text'},{key:'targetRole',label:'目標職位',type:'text'},{key:'period',label:'評量期間',type:'text'},{key:'evaluator',label:'評量者',type:'text'},{key:'date',label:'評量日期',type:'date'}]},
        {id:'evidence',title:'二、重要工作／行為證據',repeat:{rows:4,fields:[{key:'period',label:'日期／期間',type:'text'},{key:'event',label:'工作事件／任務',type:'textarea'},{key:'actionResult',label:'本人具體行動與結果',type:'textarea'},{key:'source',label:'證據來源',type:'text'}]}},
        {id:'star',title:'三、STAR紀錄',repeat:{rows:4,rowLabels:['P1','P2','P3','P4'],fields:[{key:'s',label:'S 情境',type:'textarea'},{key:'t',label:'T 任務',type:'textarea'},{key:'a',label:'A 行動',type:'textarea'},{key:'r',label:'R 結果',type:'textarea'},{key:'probe',label:'追問／佐證',type:'textarea'},{key:'sufficiency',label:'充分度',type:'select',options:['','足','部分','不足']}]}},
        {id:'pRating',title:'四、P1～P4評量',repeat:{rows:4,rowLabels:['P1 複雜度承擔與責任擴張','P2 學習敏捷與變革適應','P3 分析整合與判斷','P4 影響協作與帶動他人'],fields:[{key:'score',label:'分數1～5／不足',type:'select',options:['','1','2','3','4','5','不足']},{key:'support',label:'主要支持證據',type:'textarea'},{key:'counter',label:'反證／限制',type:'textarea'},{key:'sufficiency',label:'證據充分度',type:'select',options:['','足','部分','不足']}]}},
        {id:'potential',title:'五、Potential初評',fields:[{key:'rating',label:'Potential初評',type:'select',options:['','高','中','低','暫不判定']},{key:'sufficiency',label:'整體證據充分度',type:'select',options:['','充分','部分','不足']},{key:'support',label:'主要支持證據',type:'textarea'},{key:'counter',label:'主要反證／限制',type:'textarea'},{key:'missing',label:'需補證據',type:'textarea'},{key:'plan',label:'補證方式／期限',type:'textarea'},{key:'note',label:'初評結論說明',type:'textarea'}]},
        {id:'performance',title:'六、正式Performance資料',fields:[{key:'result',label:'正式績效結果',type:'text'},{key:'periodVersion',label:'績效期間／制度版本',type:'text'},{key:'evidence',label:'主要績效證據',type:'textarea'}]}
      ]
    },
    f04:{
      kind:'official',label:'TD-F04｜Talent Review人才盤點暨校準管理表',
      rules:['Performance 與 Potential 採核定／評鑑結果；資料不足者先補證，不為填九宮格自行創造分數。','接班評估狀態、決策說明與後續行動分欄記錄。'],
      sections:[
        {id:'batch',title:'Talent Review批次',fields:[{key:'date',label:'本次Talent Review日期',type:'date'},{key:'batch',label:'批次',type:'text'}]},
        {id:'candidates',title:'候選人盤點｜一人一列',repeat:{rows:4,fields:[{key:'candidate',label:'候選人',type:'text'},{key:'currentRole',label:'現職',type:'text'},{key:'targetRole',label:'目標職位',type:'text'},{key:'performance',label:'Performance',type:'select',options:['','較低績效','符合績效','較高績效']},{key:'potential',label:'Potential',type:'select',options:['','低','中','高']},{key:'sufficiency',label:'證據充分度',type:'select',options:['','充分','部分','不足']},{key:'nineBox',label:'九宮格位置',type:'text',readonly:true},{key:'succession',label:'接班評估狀態',type:'select',options:['','建議進入','待確認','暫不進入']},{key:'decision',label:'決策說明',type:'textarea'},{key:'action',label:'後續行動',type:'textarea'},{key:'owner',label:'責任人',type:'text'},{key:'nextDate',label:'下次檢視日',type:'date'}]}},
        {id:'calibration',title:'個別校準紀錄',repeat:{rows:2,fields:[{key:'candidate',label:'候選人',type:'text'},{key:'original',label:'主管原評',type:'text'},{key:'panel',label:'Panel校準',type:'text'},{key:'support',label:'支持證據',type:'textarea'},{key:'counter',label:'反證',type:'textarea'},{key:'reason',label:'差異原因',type:'textarea'},{key:'final',label:'最終結論',type:'textarea'}]}},
        {id:'evidenceIssues',title:'補證／爭議追蹤',repeat:{rows:2,fields:[{key:'person',label:'人員',type:'text'},{key:'issue',label:'爭議事項',type:'textarea'},{key:'missing',label:'缺少證據',type:'textarea'},{key:'method',label:'補證方式',type:'textarea'},{key:'owner',label:'責任人',type:'text'},{key:'due',label:'完成期限',type:'date'},{key:'result',label:'結果',type:'textarea'},{key:'reopen',label:'是否重新Review',type:'select',options:['','是','否']} ]}}
      ]
    },
    f05:{
      kind:'official',label:'TD-F05｜接班準備度暨Competency Gap評估表｜版次0.1',
      rules:['必要條件與 Competency 分開判斷；資格／經驗／知識不得為計分而強制轉成 L1～L4。','證據不足：現況能力＝暫不判定；Gap＝暫不計算；處置＝補證。','Ready Now 必須同時檢視必要條件、關鍵Competency、實戰／責任承擔、證據充分度及重大反證／限制。'],
      sections:[
        {id:'basic',title:'一、評估基本資料',fields:[{key:'candidate',label:'候選人',type:'text'},{key:'currentRole',label:'現職／單位',type:'text'},{key:'targetRole',label:'目標職位',type:'text'},{key:'f04Status',label:'F04接班評估狀態',type:'select',options:['','建議進入','待確認','暫不進入']},{key:'date',label:'評估日期',type:'date'},{key:'evaluator',label:'評量者',type:'text'},{key:'f02Version',label:'TD-F02版次',type:'text'},{key:'f03f04Period',label:'TD-F03／F04資料期間',type:'text'},{key:'nextDate',label:'下次檢視日',type:'date'}]},
        {id:'conditions',title:'二、必要條件檢核',repeat:{rows:5,rowLabels:['資格','工作經歷','管理歷練','專業知識','其他必要條件'],fields:[{key:'target',label:'TD-F02目標要求',type:'textarea'},{key:'current',label:'候選人現況／證據',type:'textarea'},{key:'judgment',label:'判定',type:'select',options:['','符合','部分符合','不符合','待確認']},{key:'action',label:'處置／待補',type:'textarea'},{key:'note',label:'備註',type:'text'}]}},
        {id:'gap',title:'三、Competency Gap評估',repeat:{rows:8,fields:[{key:'competency',label:'Competency',type:'text'},{key:'target',label:'目標等級',type:'select',options:['','L1','L2','L3','L4']},{key:'current',label:'現況能力',type:'select',options:['','L1','L2','L3','L4','暫不判定']},{key:'sufficiency',label:'證據充分度',type:'select',options:['','充分','部分','不足']},{key:'evidence',label:'主要證據',type:'textarea'},{key:'counter',label:'重大反證／限制',type:'textarea'},{key:'gap',label:'Gap',type:'text',readonly:true},{key:'critical',label:'是否關鍵差距',type:'select',options:['','是','否']},{key:'action',label:'處置',type:'select',options:['','維持','發展','補證']}]}},
        {id:'experience',title:'四、實戰／責任承擔與重大限制',repeat:{rows:5,rowLabels:['目標職位相關實戰／代理','人員／團隊責任','跨部門／跨範圍責任','預算／資源取捨','其他重大情境'],fields:[{key:'scope',label:'實際經驗／責任範圍',type:'textarea'},{key:'evidence',label:'主要證據',type:'textarea'},{key:'sufficiency',label:'充分度',type:'select',options:['','充分','部分','不足']},{key:'impact',label:'對承接之影響',type:'textarea'}]}},
        {id:'readiness',title:'五、Readiness結論',fields:[{key:'conditionOverall',label:'必要條件整體',type:'select',options:['','符合','部分符合','不符合','待確認']},{key:'competencyEvidence',label:'關鍵Competency證據',type:'select',options:['','充分','部分','不足']},{key:'readiness',label:'Readiness',type:'select',options:['','Ready Now','Ready 1–2 Years','Ready 2+ Years','暫不判定']},{key:'basis',label:'判斷依據',type:'textarea'},{key:'gaps',label:'主要Competency Gap／待驗證差距',type:'textarea'},{key:'prerequisite',label:'重新評估前提／需補證據',type:'textarea'},{key:'calibration',label:'校準／核定意見',type:'textarea'}]}
      ]
    },
    f06:{
      kind:'official',label:'TD-F06｜關鍵職務People Risk暨接班覆蓋管理表｜版次0.1',
      rules:['People Risk 僅使用 Business Impact＋Succession Coverage＋Readiness；F01 A/B/C 只作背景。','有效接班候選人＝F04建議進入，且 F05 為 Ready Now 或 Ready 1–2 Years。'],
      sections:[
        {id:'position',title:'關鍵職務People Risk',fields:[{key:'role',label:'關鍵職務',type:'text'},{key:'unit',label:'所屬單位',type:'text'},{key:'f01',label:'F01 A/B/C背景',type:'select',options:['','A','B','C']},{key:'impact',label:'Business Impact',type:'select',options:['','高','中','低']},{key:'pool',label:'接班評估池人數',type:'number'},{key:'readyNow',label:'Ready Now',type:'number'},{key:'ready12',label:'Ready 1–2 Years',type:'number'},{key:'ready2plus',label:'Ready 2+ Years',type:'number'},{key:'unknown',label:'暫不判定',type:'number'},{key:'coverage',label:'有效接班候選人數',type:'number',readonly:true},{key:'best',label:'最佳Readiness',type:'text',readonly:true},{key:'risk',label:'People Risk',type:'text',readonly:true},{key:'reason',label:'風險原因／主要缺口',type:'textarea'},{key:'owner',label:'責任人',type:'text'},{key:'nextDate',label:'下次檢視日',type:'date'}]},
        {id:'candidates',title:'接班候選明細｜由TD-F04／TD-F05更新',repeat:{rows:4,fields:[{key:'candidate',label:'候選人',type:'text'},{key:'target',label:'目標職務',type:'text'},{key:'current',label:'現職／單位',type:'text'},{key:'f04',label:'F04接班評估狀態',type:'select',options:['','建議進入','待確認','暫不進入']},{key:'f05',label:'F05 Readiness',type:'select',options:['','Ready Now','Ready 1–2 Years','Ready 2+ Years','暫不判定']},{key:'coverage',label:'有效Coverage',type:'select',options:['','是','否']},{key:'sufficiency',label:'證據充分度',type:'select',options:['','充分','部分','不足']},{key:'gap',label:'主要Competency Gap／待驗證差距',type:'textarea'},{key:'condition',label:'必要條件限制',type:'textarea'},{key:'date',label:'F05評估日',type:'date'}]}}
      ]
    },
    e07:{
      kind:'design',label:'TD-E07｜Learning Map設計工作區｜不是新增正式操作表單',
      rules:['F05可以有多項Gap，但F07原則只選2～3項最影響Readiness者。','證據不足先補證，不計Gap、不直接送訓。','完成課程／任務不得直接等於Gap縮小或Readiness升級。'],
      sections:[
        {id:'steps',title:'Learning Map 8步工作區',repeat:{rows:8,rowLabels:['1 Duty／Task','2 K／S','3 Competency','4 Gap','5 Learning Need／成果','6 Learning Map方法','7 Evidence','8 Review閉環'],fields:[{key:'input',label:'Input／目前資料',type:'textarea'},{key:'work',label:'我的分析／設計',type:'textarea'},{key:'missing',label:'資料不足怎麼補',type:'textarea'},{key:'output',label:'Output／完成結果',type:'textarea'},{key:'evidence',label:'佐證／驗證點',type:'textarea'}]}},
        {id:'priority',title:'2～3項優先Transition Gap',repeat:{rows:3,fields:[{key:'gap',label:'優先Gap',type:'text'},{key:'targetCurrent',label:'目標／現況',type:'text'},{key:'task',label:'發展任務／工作責任',type:'textarea'},{key:'method',label:'方法組合',type:'textarea'},{key:'evidence',label:'成功證據',type:'textarea'},{key:'handoff',label:'回接TD-F07／F05方式',type:'textarea'}]}}
      ]
    },
    f07:{
      kind:'official',label:'TD-F07｜個人發展計畫暨追蹤表｜版次0.1',
      rules:['選項來源可為正式Competency Gap／必要條件或歷練差距／補證事項；證據不足項不得直接當能力Gap。','發展成果必須描述能做到什麼／產出什麼，活動完成本身不是成果。','F07只產生發展／補證證據，不直接修改Readiness；新證據須回F05重評，再更新F06。'],
      sections:[
        {id:'basic',title:'一、基本資料與F05來源',fields:[{key:'candidate',label:'候選人',type:'text'},{key:'current',label:'現職／單位',type:'text'},{key:'target',label:'目標職位',type:'text'},{key:'f04',label:'F04接班評估狀態',type:'text'},{key:'f05',label:'F05目前Readiness',type:'text'},{key:'f05Date',label:'F05評估日期',type:'date'},{key:'period',label:'IDP期間',type:'text'},{key:'manager',label:'直屬主管',type:'text'},{key:'mentor',label:'目標職位主管／Mentor',type:'text'},{key:'midReview',label:'中途Review日',type:'date'},{key:'finalReview',label:'期末Review日',type:'date'},{key:'hr',label:'教育中心／HR',type:'text'}]},
        {id:'priorities',title:'二、2～3項發展優先項目',repeat:{rows:3,fields:[{key:'sourceType',label:'來源類型',type:'select',options:['','Competency Gap','必要歷練','補證']},{key:'f05Item',label:'F05對應項目',type:'textarea'},{key:'targetCurrent',label:'目標／現況',type:'text'},{key:'evidenceState',label:'證據狀態',type:'select',options:['','充分','部分','不足']},{key:'impact',label:'對Readiness影響',type:'textarea'},{key:'actionType',label:'處置類型',type:'select',options:['','發展','補證']}]}},
        {id:'plans',title:'三、發展計畫｜每一優先項目一個區塊',repeat:{rows:3,fields:[{key:'f05Gap',label:'F05對應Gap／待驗證事項',type:'textarea'},{key:'priorityReason',label:'優先原因／Readiness影響',type:'textarea'},{key:'outcome',label:'發展成果（可觀察／可驗證）',type:'textarea'},{key:'method',label:'發展方法',type:'checkboxes',options:['OJT','SD','專案','代理','Mentoring／Coaching','輪調','Off-JT／課程','其他']},{key:'task',label:'具體任務／責任範圍',type:'textarea'},{key:'evidence',label:'成功證據／驗證方式',type:'textarea'},{key:'owners',label:'責任分工',type:'textarea'},{key:'start',label:'開始',type:'date'},{key:'finish',label:'完成',type:'date'},{key:'review',label:'Review',type:'date'},{key:'support',label:'支持資源／風險／前提',type:'textarea'}]}},
        {id:'reviews',title:'四、Review紀錄',repeat:{rows:4,fields:[{key:'date',label:'Review日期',type:'date'},{key:'item',label:'項目',type:'text'},{key:'result',label:'已完成任務／實際成果',type:'textarea'},{key:'evidence',label:'主要證據／反證',type:'textarea'},{key:'gapChange',label:'Gap變化',type:'select',options:['','已縮小','部分縮小','未縮小','待驗證']},{key:'next',label:'下一步',type:'textarea'},{key:'reviewer',label:'Review人',type:'text'}]}},
        {id:'close',title:'五、期末Review與回接F05／F06',fields:[{key:'overall',label:'本期優先Gap整體結果',type:'textarea'},{key:'evidenceResult',label:'補證事項結果',type:'textarea'},{key:'reassess',label:'是否回TD-F05重新評估',type:'select',options:['','是','否']},{key:'reason',label:'原因',type:'textarea'},{key:'newReadiness',label:'F05重新評估後Readiness',type:'select',options:['','Ready Now','Ready 1–2 Years','Ready 2+ Years','暫不判定','尚未重評']},{key:'f06Update',label:'F06更新',type:'select',options:['','已更新','待F05完成後更新','不適用']},{key:'conclusion',label:'主管／HR結論',type:'textarea'}]}
      ]
    },
    evidence:{
      kind:'project',label:'新證據工作區｜專案學習用，非正式公司表單',
      rules:['完成任務／課程不是證據本身；要記錄工作成果、主管觀察、成果品質與反證。'],
      sections:[{id:'ledger',title:'新證據紀錄',repeat:{rows:6,fields:[{key:'date',label:'日期／期間',type:'text'},{key:'gap',label:'對應Gap／能力',type:'text'},{key:'task',label:'工作任務／情境',type:'textarea'},{key:'result',label:'實際結果／成果',type:'textarea'},{key:'evidence',label:'證據來源',type:'textarea'},{key:'counter',label:'反證／限制',type:'textarea'},{key:'reviewer',label:'觀察／Review人',type:'text'}]}}]
    },
    reassess:{
      kind:'project',label:'閉環重評工作區｜回TD-F05並更新TD-F06',
      rules:['只有新證據能支持重評；證據不足就維持原判，不硬升級。'],
      sections:[{id:'closeLoop',title:'F05重評 → F06更新',fields:[{key:'candidate',label:'候選人',type:'text'},{key:'previous',label:'原Readiness',type:'select',options:['','Ready Now','Ready 1–2 Years','Ready 2+ Years','暫不判定']},{key:'newEvidence',label:'本輪新證據摘要',type:'textarea'},{key:'gapResult',label:'Gap變化／仍待驗證項目',type:'textarea'},{key:'newReadiness',label:'重評Readiness',type:'select',options:['','Ready Now','Ready 1–2 Years','Ready 2+ Years','暫不判定','維持原判']},{key:'basis',label:'重評依據',type:'textarea'},{key:'f06',label:'F06 People Risk／Coverage更新',type:'textarea'},{key:'nextCycle',label:'下一輪發展／補證',type:'textarea'}]}]
    }
  }
};
