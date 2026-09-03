# 人才發展學習作業系統｜正式架構

> 本文件只描述現在應保留的架構與驗收規則；歷史補丁與過渡部署不視為正式設計。

## 1. 產品主鏈

本系統不是 PPT Viewer，也不是單純題庫。正式鏈路是：

**教材治理：Slide Coverage → Content Classification**

**正式學習：CORE / CONTEXT → Page Study → Knowledge → Quick / Questions → Review / Analytics**

**輔助路徑：OPTIONAL / AUDIT_ONLY → 需要時查看，不進預設學習流**

**有聲路徑：完整章節 Audio → 理解整體架構與重複複習**

Coverage 100% 的意思是「教材每頁都有被治理與追溯」，不是「每天必須把每一頁都當考點重學」。

## 2. Content State 與 Personal State 必須分離

### Content State：由 canonical data 決定

`studyDisposition` 只有四種正式值：

- `CORE`：正式必學，保留在首次學習與後續複習。
- `CONTEXT`：首次脈絡頁；完成首次學習後，後續預設可跳過。
- `OPTIONAL`：補充／活動／延伸，不進預設學習流。
- `AUDIT_ONLY`：只保留教材稽核證據，不進正式學習流。

`UNCLASSIFIED` 只代表尚未完成人工分類，系統不得自動猜成 CORE。

教材分類不能被 LocalStorage、個人熟悉度或任何「按一下」改變。

### Personal State：只記使用者自己的學習狀況

逐頁 Personal State 只保留：

- 未複習
- 已完成本頁
- 需重看

舊的 `已確認－無獨立考點` 不再是 Personal State。是否有獨立考點屬 Content State / Knowledge mapping，不應由使用者按鈕決定。

## 3. Day1 目前事實基準

目前 canonical data 為：

- 40 chapters
- 388 slides
- 172 knowledge
- 854 questions
- Day1：78 slides / 55 knowledge
- S001、S002、S078：`AUDIT_ONLY`

目前 Day1 分類統計可顯示於 QA log，但**不把某一版的 CORE / CONTEXT / OPTIONAL / AUDIT_ONLY 數量寫死成永久部署規則**。部署驗證的是分類合法、邊界正確與 Coverage 完整，而不是禁止未來經人工複核後調整分類。

Day2–Day5 尚未逐頁完成正式分類時，維持 `UNCLASSIFIED`，不自動套用 Day1 結果。

## 4. 模組責任

### `assets/app.js`

負責原有主學習功能：

- Home
- Quick Review
- Course / Knowledge
- Questions
- Audio
- Analytics 基礎頁面
- Reminder / Review engine

### `assets/coverage.js`

唯一負責逐頁學習領域：

- `#/slides`
- `#/slides/:chapter/:mode`
- `#/slide/:day/:slide/:mode`
- Content State 顯示
- 正式學習序列
- Coverage / Study 分流
- 上一張／下一張／直接跳頁
- 個人逐頁完成／重看狀態

不得再另外疊一個 `study-policy.js` 修改它的結果。

### `assets/slide-preview.js`

純元件。只接受指定 slide 與 evidence container，顯示該張 Google Drive 單頁教材；不註冊 Router、不修改學習分類、不自己重畫頁面。

### `assets/insights.js`

純學習分析／首頁摘要元件：

- Day1 Coverage / formal learning summary
- Radar
- Day × 類型熱圖
- 逐章掌握度

不得處理 slide routing 或教材預覽。

### `assets/runtime.js`

只負責模組整合與 route lifecycle，沒有教材規則、沒有學習演算法、沒有 UI patch。

## 5. 已淘汰的補丁層

正式架構不再使用：

- `assets/product-fixes.js`
- `assets/product-fixes.css`
- `assets/study-policy.js`
- Personal State：`已確認－無獨立考點`

上述功能若仍有價值，已分別收回 `coverage.js`、`slide-preview.js`、`insights.js`。

## 6. 教材單頁預覽

Public GitHub 不保存老師原始投影片 JPG。

- 單頁預覽圖放 Google Drive。
- `data/slide_media.js` 只保存 Sxxx → Drive File ID。
- 點 Sxxx 應直接看到該張教材單頁。
- 完整 PDF 只是「查看上下文」的次要入口。
- 單頁資產不存在時必須明確顯示「尚未建立」，不得用整份 PDF 冒充逐頁預覽。

## 7. Source of Truth

### Google Drive = Canonical Content / Private-ish Media

- 唯一正式 `course_data.json`
- 原始教材
- `studyDisposition`
- 人工教材稽核結果
- 單頁教材媒體
- TTS scripts / MP3 assets

### GitHub main = Application / Build

- UI / modules
- PWA / Service Worker
- QA / Deploy workflow
- `data/course_data.js` 僅為部署／離線建置產物，不是內容主資料。

### Browser / PWA = Personal State

- Knowledge mastery / Review
- 答題紀錄
- 逐頁完成／重看
- 提醒設定

## 8. 部署只允許一條正式管線

正式目標只有：

`Drive canonical JSON → GitHub Actions → Data QA → Product QA → Pages Deploy → Production Smoke Test`

GitHub Pages Repository Setting 必須使用 **Source: GitHub Actions**。

不得再同時使用 branch-based `pages build and deployment`。也不保留「把 canonical data 自動 commit 回 main」的同步 workaround；那只是為雙部署問題遮掩症狀。

## 9. QA 原則

部署至少檢查：

- chapters / slides / knowledge / questions 結構與 IDs 完整。
- chapter slide range 無缺頁、無重複。
- Day1 每張都有合法 `studyDisposition`。
- 正式考點頁必須是 CORE 且有 Knowledge。
- CONTEXT 不應擁有獨立 Knowledge。
- S001 / S002 / S078 為 AUDIT_ONLY。
- 舊 `已確認－無獨立考點` 字串不得存在正式 assets。
- `product-fixes` / `study-policy.js` 不得重新出現在 Production index。
- PWA cache 必須跟正式模組一致。

## 10. 完成的定義

以下任何一項單獨都不算完成：程式存在、QA PASS、Action 綠燈、Drive 有檔案。

真正完成需要：

1. canonical data 正確；
2. automated QA 通過；
3. Pages 只有單一正式部署來源；
4. production smoke test 通過；
5. 固定正式網址實際操作符合預期。

Day1 正式封版後，才把同一套逐頁人工分類與教學化標準複製到 Day2–Day5。
