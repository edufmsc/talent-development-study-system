# 人才發展學習作業系統｜現行架構

> 本文件是目前正式架構摘要。需求演進與決策歷史以「行動學習」191頁紀錄為依據；本文件只保留現在仍有效的規則。

## 1. 產品目標

這不是 PPT Viewer，也不是單純題庫。正式鏈路分成兩層：

**教材治理層：Coverage 100% 稽核 → 正式教材分類**

**學習層：正式逐頁學習 → Knowledge → Quick / Questions → Review / Analytics**

另有一條無畫面路徑：

**完整版章節 Audio → 理解整體架構與重複複習**

Coverage 的目的不是逼使用者每天看完所有頁，而是證明所有教材頁都被審過；真正進入日常學習的頁面，由正式 `studyDisposition` 決定。

## 2. 正式教材分類政策

教材分類是 **Content State**，存放在 canonical `course_data.json`；不得由 LocalStorage、個人熟練度或單次操作決定。

- `CORE`：必學；首次學習與後續複習都保留。
- `CONTEXT`：首次學習保留；完成首次確認後，後續複習預設跳過。
- `OPTIONAL`：活動、補充、延伸；不進預設學習流，需要時開啟。
- `AUDIT_ONLY`：封面、純大綱、純收尾等；只保留 Coverage / 稽核證據，不進正式學習流。
- `UNCLASSIFIED`：尚未依 Day1 標準完成人工分類；不得自動猜測為其他類別。

Day1 目前正式分類：
- CORE 45
- CONTEXT 29
- OPTIONAL 1
- AUDIT_ONLY 3

S001、S002、S078 已正式列為 AUDIT_ONLY。

## 3. 個人學習狀態

Personal State 與教材分類必須完全分離。

Personal State 可包含：
- 未學
- 已讀／已確認
- 需重看
- 已掌握
- 答題紀錄
- Review stability / due
- 提醒設定

使用者可以變熟、變不熟，但不能因此把一張 CORE 教材頁改成 AUDIT_ONLY，也不能讓封面因換電腦又重新變成正式學習頁。

## 4. 正式使用情境

1. **逐頁學習**：先依正式分類決定哪些頁要進學習流；點 Sxxx 必須直接看到該張教材單頁，不得用整份 PDF iframe 冒充。
2. **考點深度學習**：Knowledge 負責概念整合、理解、必背、易混、記憶法與可能考法。
3. **工作快複習**：30–90 秒主動回想；弱點、到期與未學優先。
4. **題庫與練習**：題目綁 Knowledge ID 與教材來源；開放題採規則式輔助評估，不宣稱 AI 教師閱卷。
5. **有聲課程**：完整版分章、單章／Day／全課播放；腳本與 MP3 和教材頁碼可追溯。
6. **學習分析**：回答學了多少、測了多少、記得多穩、哪些內容到期、哪類考試能力較弱。

## 5. 正式責任分工

### GitHub main = App / Code
- 網站 UI 與 Router
- PWA / Service Worker
- 快卡、題庫、評分與學習分析邏輯
- GitHub Actions Build / QA / Deploy
- 文件與版本管理

### Google Drive = Canonical Content / Private Media
- Day1–Day5 原始教材
- **唯一正式 `course_data.json`**
- `studyDisposition` 與教材稽核結果
- 教材單頁預覽圖與媒體來源資產
- 完整版 TTS 腳本
- MP3
- 大型快照與封存

### Browser / PWA = Personal State
- 個人學習進度
- 答題紀錄
- Coverage 個人確認紀錄
- Review / due
- 提醒設定

## 6. 單一資料來源規則

正式學習內容的唯一 canonical source 是 Google Drive：

`08_學習複習系統/04_教材索引與稽核/course_data.json`

目前正式內容基準：
- 40 chapters
- 388 slides
- 172 knowledge
- 854 questions
- Day1：78 slides / 55 knowledge
- Day1：CORE 45 / CONTEXT 29 / OPTIONAL 1 / AUDIT_ONLY 3

GitHub `data/course_data.js` 是可部署／離線用的建置產物，不是內容主資料庫。

Day2–Day5 目前仍大量是 `UNCLASSIFIED`；在人工逐頁審查前，不以 Day1 的規則自動推定分類。

## 7. 教材來源與 Coverage 規則

每個正式 Knowledge、Question、Slide 至少要綁：
- Day
- Chapter
- 原始 PDF 頁碼
- 可用時附教材投影片編號

核心規則：

> **Coverage 100% 留痕，不等於 Study Flow 100% 顯示。**

- 正式可考內容 → CORE，且必須連到 Knowledge。
- 案例／例示若有助首次理解 → CONTEXT。
- 活動／延伸 → OPTIONAL。
- 封面／純大綱／純收尾 → AUDIT_ONLY。
- Knowledge 不可取代 Slide Coverage。

## 8. 教材單頁預覽

Public GitHub 不保存老師原始投影片 JPG。

正式設計：
- 單頁預覽圖放 Google Drive 的 08 系統媒體資產區。
- GitHub `data/slide_media.js` 只保存 Sxxx → Drive File ID 對應，不保存教材圖片本體。
- 點 Sxxx 應直接看到該張教材圖。
- 完整 PDF 僅為「查看上下文」的次要入口。
- 若某張單頁圖尚未建立，畫面必須明確標示未完成，不得用整份 PDF iframe 假裝完成。
- 不再機械式要求所有 AUDIT_ONLY 頁都製作正式學習圖；是否需要媒體資產要依實際學習價值決定。
- 「Anyone with link」只視為 unlisted，不宣稱真正 private。

## 9. 部署規則

目標正式管線只有一條：

`Drive canonical course_data.json → GitHub Actions → Data QA → Study Policy QA → Product QA → Build → GitHub Pages → Production smoke test`

部署不得回寫或自動 commit `main`。

GitHub Pages Repository Setting 必須使用 **Source: GitHub Actions**；不得再同時啟用 branch-based Pages build。

## 10. 驗收定義

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

## 11. 版本與分支原則

- **正式維護只更新 `main`。**
- **所有既有或未來支線 branch 一律保留，不自動刪除、不因 merge 刪除。**
- 不建立 v8 / v9 / final-final 日常版本資料夾。
- Git commit 管程式歷史；Drive `99_舊版封存` 管內容／大型資產快照。
- `01_網站離線快照` 中的 ZIP 僅視為 Snapshot / Offline Package，不是 Production source of truth。

## 12. 目前優先順序

1. 驗證 Day1 四類正式學習流在 Production 的實際行為。
2. 依正式分類決定需要製作的單頁教材資產，不盲做 78 張。
3. 將已穩定的 `product-fixes.js` / `slide-preview.js` 邏輯逐步收回正式 renderer，停止補丁繼續增加。
4. 統一 Personal State 的匯出／匯入 schema，避免只備份 Knowledge 卻遺失 Coverage / Review 等狀態。
5. 修正提醒循環為「完成一次學習後才重新起算下一輪」，並加入稍後提醒。
6. 修正分析命名、Ready Score 與硬編舊統計。
7. Day1 封版後，再逐頁人工分類 Day2–Day5。
8. MP3 生產與真正跨裝置同步屬後續產品化階段。
