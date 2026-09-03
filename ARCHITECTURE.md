# 人才發展學習作業系統｜現行架構

> 本文件是目前正式架構摘要。需求演進與決策歷史以「行動學習」191頁紀錄為依據；本文件只保留現在仍有效的規則。

## 1. 產品目標

這不是 PPT Viewer，也不是單純題庫。正式學習鏈是：

**逐頁完整複習（Coverage） → 考點整合（Knowledge） → 主動回想（Quick / Questions） → 保留與弱點回補（Review / Analytics）**

另有一條無畫面路徑：

**完整版章節 Audio → 理解整體架構與重複複習**

## 2. 五個正式使用情境

1. **逐頁完整複習**：每張教材都必須被確認，不可因 Knowledge 整併而漏頁。教材原頁是證據與視覺記憶來源。
2. **考點深度學習**：以 Knowledge 為概念整合層，負責「怎麼理解、必懂、必背、易混、記憶法、可能考法」。
3. **工作快複習**：30–90 秒主動回想；弱點、到期與未學優先。
4. **題庫／模考**：題目必須綁 Knowledge ID 與教材來源；開放題採規則比對，不假裝 AI 教師評分。
5. **有聲課程**：完整版分章、單章／Day／全課播放；腳本與 MP3 和教材頁碼可追溯。

分析層橫跨以上流程，回答「學了多少、測了多少、哪類能力弱、哪些內容到期」。

## 3. 正式責任分工

### GitHub main = App / Code
- 網站 UI 與 Router
- PWA / Service Worker
- 快卡、題庫、評分與學習分析邏輯
- GitHub Actions Build / QA / Deploy
- 文件與版本管理

### Google Drive = Canonical Content / Private Media
- Day1–Day5 原始教材
- **唯一正式 `course_data.json`**
- 教材單頁預覽圖與媒體 manifest
- 完整版 TTS 腳本
- MP3
- 大型快照與封存

### Browser / PWA = Personal State
- 學習進度
- 答題紀錄
- Coverage 紀錄
- 提醒設定
- 目前先使用 LocalStorage + JSON 匯出／匯入

## 4. 單一資料來源規則

正式學習內容的唯一 canonical source 是 Google Drive：

`08_學習複習系統/04_教材索引與稽核/course_data.json`

目前正式內容基準：
- 40 chapters
- 388 slides
- 172 knowledge
- 854 questions
- Day1：78 slides / 55 knowledge

GitHub 的 `data/course_data.js` 是可部署／離線用的建置產物，不是內容主資料庫。

不得再同時維護兩份同名 `course_data.json`。舊資料必須改名並移至 `99_舊版封存`。

## 5. 教材來源與 Coverage 規則

每個正式 Knowledge、Question、Slide 至少要綁：
- Day
- Chapter
- 原始 PDF 頁碼
- 可用時再附教材投影片編號

逐頁 Coverage 的核心規則：

> **每頁必審，不等於每頁硬做一個考點。**

- 有正式可考內容 → 必須連到 Knowledge。
- 案例／導入／活動／Q&A → 可無獨立 Knowledge，但必須留下 Coverage 與頁面角色。
- Knowledge 不可取代 Slide Coverage。

## 6. 教材單頁預覽

Public GitHub 不保存老師原始投影片 JPG。

正式設計：
- 單頁預覽圖放 Google Drive 的 08 系統媒體資產區。
- 網站透過 media manifest 取得對應 Drive File ID / URL。
- 點 Sxxx 應直接看到該張教材證據；完整 PDF 僅為查看上下文的次要入口。
- 「Anyone with link」只視為 unlisted，不宣稱為真正 private。

## 7. 部署規則

目標正式管線只有一條：

`Drive canonical course_data.json → GitHub Actions → Data QA → Product QA → Build → GitHub Pages → Production smoke test`

部署不得回寫或自動 commit `main`。

GitHub Pages Repository Setting 必須使用 **Source: GitHub Actions**；不得再同時啟用 branch-based Pages build，否則可能發生兩條部署互相覆蓋。

## 8. 驗收定義

以下都不能單獨算完成：
- 程式碼存在
- Drive 有檔案
- GitHub Action 綠燈
- QA PASS

真正完成必須同時滿足：
1. canonical data 正確；
2. automated QA 通過；
3. 正式 Pages 部署成功；
4. Production smoke test 通過；
5. 使用者在固定正式網址實際看得到且操作正確。

## 9. 版本原則

- 只維護 `main`，符合目前使用者固定測同一網址的需求。
- 不建立 v8 / v9 / final-final 日常版本資料夾。
- Git commit 管程式歷史；Drive `99_舊版封存` 管內容／大型資產快照。
- `01_網站正式版` 中的 ZIP 僅能視為 Snapshot / Offline Package，**不能再被視為 Production source of truth**。

## 10. 目前優先順序

1. 收斂部署與資料治理。
2. 建立 Slide Preview media manifest。
3. 完成 Day1 S001–S078 單頁預覽與網站接入。
4. Day1 完整人工內容／產品驗收並封版成標準樣板。
5. 再依同一標準擴展 Day2–Day5。
6. MP3 生產與跨裝置／可靠背景提醒屬後續產品化階段，不先壓過教材正確性。
