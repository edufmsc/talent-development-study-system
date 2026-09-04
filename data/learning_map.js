window.LEARNING_MAP_DATA={
  version:'2026-09-04-visual-cycle-v3',
  title:'Day1～Day5 人才發展系統循環圖',
  subtitle:'用一張互動式循環圖看懂五天課程如何串在一起；點 Day、步驟、產出、規則或教材文字都可往下展開。',
  integrationNote:'這是依 Day1～Day5 教材內容整理出的「課程整合關係圖」，用來幫助學習與建立心智模型；不是宣稱老師原始講義中存在一張完全相同的總圖。',
  principle:'地圖負責看「關係與順序」，不是把逐頁教材再排一次。每個節點只顯示必要資訊；細節透過點擊展開，並保留回到原始教材與 Knowledge 的路徑。',
  dayMeta:{
    1:{title:'策略性人才資本管理系統建立',short:'策略 → 人才標準',focus:'從企業策略、使命／願景／價值觀與工作要求，建立人才與 Competency 的共同語言。'},
    2:{title:'策略性人才資本管理系統管理',short:'人才管理 → 決策',focus:'把人才標準帶進 Performance／Potential、Talent Review、接班與人才風險等管理判斷。'},
    3:{title:'人才辨識與評鑑',short:'證據 → 辨識',focus:'確認用途與成功標準，再運用 360、評鑑中心、行為觀察與其他方法取得可觀察證據。'},
    4:{title:'專業能力盤點與學習地圖規劃',short:'工作 → Gap → Learning Map',focus:'從 Duty／Task、K/S、Competency 到能力盤點與 Gap，再規劃 Learning Map。'},
    5:{title:'OJT與SD之推行與運用',short:'發展 → 新證據 → 回評',focus:'依 Gap 選擇 OJT、SD、Off-JT 等發展方式，把學習落到工作任務與成功證據，再回到評估。'}
  },
  cycleSteps:[
    {
      day:1,step:1,verb:'定方向與人才標準',question:'組織要往哪裡走？成功需要什麼人才能力？',
      input:['企業策略','使命／願景／價值觀','工作／職務要求'],
      process:['理解企業與HR策略關係','確認使命／願景／價值觀與人才要求','把工作成功要求轉成 K/S、Competency、Behavior／Level 等能力語言'],
      outputs:[
        {id:'d1-standard',title:'人才／職能標準',icon:'◎',flow:['企業方向','工作／角色要求','K/S 知識技能','Competency 職能','Behavior／Level 行為與等級']},
        {id:'d1-strategy',title:'策略與人才需求連結',icon:'↗',flow:['企業策略','HR策略定位','人才需求','後續人才管理基準']}
      ],
      rules:['不是先想要開什麼課，再倒推能力','人才標準必須能成為後續辨識、盤點與發展的共同基準']
    },
    {
      day:2,step:2,verb:'把人才資料轉成管理決策',question:'誰值得關注？誰可能接？風險在哪裡？',
      input:['Day1 人才／職能標準','Performance','Potential 與人才資料'],
      process:['區分 Performance 與 Potential','進行 Talent Review／校準','形成 Readiness、Succession Coverage、People Risk 等人才決策視角'],
      outputs:[
        {id:'d2-review',title:'Talent Review／人才盤點',icon:'▦',flow:['人才資料','Performance／Potential','校準討論','人才分流／後續決策']},
        {id:'d2-risk',title:'Readiness／Coverage／People Risk',icon:'◇',flow:['候選人才','職位適配／準備度','接班覆蓋','人才／接班風險','管理優先順序']}
      ],
      rules:['高 Performance 不等於高 Potential','有候選人名單不等於有人 Ready','資料不足時應先補證，不應把「證據不足」直接解讀成「能力差」']
    },
    {
      day:3,step:3,verb:'取得可信的人才證據',question:'我們憑什麼判斷這個人？證據夠不夠？',
      input:['評鑑用途','成功標準／Competency','待辨識或待評估的人才'],
      process:['先確認評鑑用途與成功標準','依需要選擇 360、評鑑中心、面談、行為觀察等方法','讓行為發生並記錄可觀察證據','對照 Dimensions／職能標準後整合判斷'],
      outputs:[
        {id:'d3-evidence',title:'行為／評鑑證據',icon:'◉',flow:['確認用途','定成功標準','選評鑑工具','觀察／蒐集行為','記錄證據','對照職能／Dimensions','整合判斷']},
        {id:'d3-ac',title:'評鑑中心判斷鏈',icon:'⬡',flow:['目標職位','角色／組成要件','工作情境／模擬','行為發生','評審記錄','對照 Dimensions','整合判斷']}
      ],
      rules:['先問要回答什麼人才問題，再選工具','評鑑要盡量依可觀察證據，不只靠印象','不同工具取得的證據應回到同一個成功標準比較']
    },
    {
      day:4,step:4,verb:'找出能力落差並規劃學習',question:'工作需要什麼？現在差多少？真正該發展什麼？',
      input:['工作／Duty／Task','K/S 與 Competency 標準','現況能力或評鑑證據'],
      process:['工作／Duty／Task 拆解','轉成 K/S 與 Competency','進行能力盤點與 Gap 比較','依 Gap 規劃 Learning Map 與學習路徑'],
      outputs:[
        {id:'d4-gap',title:'Competency Gap',icon:'△',flow:['工作要求','Target Competency','現況能力證據','比較','Gap／優先發展項目']},
        {id:'d4-map',title:'Learning Map',icon:'⌘',flow:['Duty／Task','K/S','Competency','Gap','學習主題／路徑','後續發展方法']}
      ],
      rules:['有 Gap 不代表一定要上課','先確認 Gap 原因，再決定要不要用訓練或其他發展方法','Learning Map 要回到工作任務與能力要求，而不是只列課程名稱']
    },
    {
      day:5,step:5,verb:'把發展放回工作並產生新證據',question:'怎麼讓能力真的在工作中長出來？完成後怎麼證明？',
      input:['Day4 Gap／Learning Map','工作任務','可使用的發展資源'],
      process:['依需要組合 Off-JT、OJT、SD 等方式','把學習轉成工作任務／練習／自我發展','在工作中觀察、回饋與修正','形成新的工作／行為證據','把新證據帶回前面的評估與人才決策'],
      outputs:[
        {id:'d5-development',title:'發展方案／工作任務',icon:'▶',flow:['Gap／學習目標','選 Off-JT／OJT／SD','工作任務與練習','回饋／修正','完成發展循環']},
        {id:'d5-evidence',title:'新工作／行為證據',icon:'↻',flow:['實際工作表現','觀察／紀錄','回饋與修正','新證據','回到評鑑／Gap／Readiness／People Risk']}
      ],
      rules:['完成活動不等於能力提升','是否進步要看新的工作／行為證據','新證據要回到 Gap、Readiness 或其他人才判斷重新評估']
    }
  ],
  crossLinks:[
    {from:1,to:3,label:'Competency 標準 → 評鑑標準'},
    {from:1,to:4,label:'工作／能力標準 → Gap 比較'},
    {from:3,to:2,label:'評鑑證據 → Talent Review／人才決策'},
    {from:4,to:5,label:'Gap／Learning Map → 發展方式'},
    {from:5,to:3,label:'新證據 → 再評鑑'},
    {from:5,to:2,label:'新證據 → Readiness／Risk 更新'},
    {from:5,to:1,label:'策略／工作改變時重新定義人才標準'}
  ],
  learningTypes:[
    {id:'definition',label:'定義',match:['定義']},
    {id:'structure',label:'架構',match:['架構','模型','圖像']},
    {id:'process',label:'流程步驟',match:['流程','步驟']},
    {id:'method',label:'方法',match:['方法','工具']},
    {id:'items',label:'條項',match:['條項','數字','原則']}
  ],
  extraTypes:{label:'其他考點'},
  sourceRule:'點任何教材文字都要能回到 Knowledge 與原始教材來源；整合圖只整理關係，不取代原始講義。'
};
