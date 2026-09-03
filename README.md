# 人才發展學習作業系統

這是人才發展管理師 Day1–Day5 的正式 GitHub Pages / PWA 主站。

## 目前正式基準

- 40 章
- 388 張教材頁
- 172 個 Knowledge
- 854 題
- Day1：78 張教材頁 / 55 Knowledge
- Day1 正式學習分類：CORE 45 / CONTEXT 29 / OPTIONAL 1 / AUDIT_ONLY 3

## 學習流程

1. **教材 Coverage**：388 張教材全部都要有稽核紀錄，確保沒有漏頁。
2. **正式逐頁學習**：不是把 388 張全部硬塞進日常複習，而是依正式教材分類決定出現方式。
3. **考點深度學習**：Knowledge 負責概念整合、理解、必背、易混、記憶法與可能考法。
4. **工作快複習**：30–90 秒主動回想，弱點／到期優先。
5. **題庫與練習**：題目綁 Knowledge ID 與教材來源頁碼；開放題為規則式輔助評估，不宣稱 AI 閱卷。
6. **有聲課程**：完整版分章，目標支援單章／Day／全課播放。
7. **學習分析**：Coverage、已測覆蓋、Recall、到期複習與考試型態弱點分開呈現。

## Day1 正式教材分類政策

教材價值是內容層屬性，寫在 Google Drive canonical `course_data.json`，**不由 LocalStorage 或使用者當下操作決定**。

- `CORE`：必學；首次學習與後續複習都保留。
- `CONTEXT`：首次學習保留；完成首次確認後，後續複習預設跳過。
- `OPTIONAL`：活動、補充或延伸內容；不進預設學習流，需要時開啟。
- `AUDIT_ONLY`：封面、純大綱、純收尾等；只保留 Coverage / 稽核證據，不進正式學習流。
- `UNCLASSIFIED`：尚未依 Day1 標準完成人工分類。目前 Day2–Day5 先保留此狀態，禁止自動猜測為正式分類。

**個人狀態**（未學、已讀、需重看、已掌握）才屬於 Browser / PWA；不得再用個人狀態改寫教材正式分類。

## 正式資料分工

### GitHub
網站程式、PWA、學習邏輯、QA、部署與版本管理。

### Google Drive
原始教材、唯一正式 `course_data.json`、教材單頁預覽、完整版 TTS 腳本、MP3、大型備份。

### Browser / PWA
個人學習進度、答題紀錄、Coverage 紀錄與提醒設定。這些屬於 Personal State，不是教材內容主資料。

## Single Source of Truth

正式學習內容以 Google Drive 的 canonical `course_data.json` 為唯一主資料。

GitHub `data/course_data.js` 是建置／部署用產物，不應人工雙邊維護。

教材單頁媒體對應由 `data/slide_media.js` 管理；逐頁主畫面應直接顯示指定教材單頁，完整 PDF 只能當上下文備援入口。

## GitHub Pages

Repository Pages Source 應設定為 **GitHub Actions**。

正式部署管線：

`Drive canonical data → Data QA → Study Policy QA → Product QA → Build → GitHub Pages → Production smoke test`

不要同時使用 `Deploy from a branch`，避免兩條 Pages deployment 互相覆蓋。

## PWA / 桌面通知

- `manifest.webmanifest` 與 `sw.js` 已包含。
- HTTPS 下可使用 Web Notification。
- 純靜態網站在瀏覽器／PWA 完全關閉時，無法保證背景定時通知；真正 100 分版本需 Push backend 或 Windows companion。
- Google Drive 教材圖片目前不是完整離線媒體；App Shell 可快取，不代表全部教材圖片都可離線。

## 版本與分支原則

- **正式維護只動 `main`。**
- **任何既有或未來支線 branch 都保留，不自動刪除、不因 merge 自動清除。**
- 不再建立 v8 / v9 / final-final 日常版本資料夾。
- Google Drive 的網站 ZIP 只視為 Snapshot / Offline Package，不是 Production source of truth。
- 舊內容資料一律移入 `99_舊版封存` 並清楚加上日期或 ARCHIVE 標記。

## 完成的定義

不是「程式碼有」、Drive 有檔案或 Action 綠燈就算完成。

真正完成必須是：

**資料正確 → QA 通過 → 正式部署成功 → Production smoke test 通過 → 固定正式網址實際可用。**

## 目前下一階段

1. 驗證 Day1 四類正式學習流在 Production 的實際行為。
2. 根據分類只製作真正需要的教材單頁資產，不再機械式要求 78 張都做成正式學習圖。
3. 清理 `product-fixes.js` / `slide-preview.js` 等已穩定補丁，逐步合回正式 renderer。
4. 統一 Personal State 的匯出／匯入 schema。
5. 修正提醒循環、分析命名與硬編舊統計。
6. Day1 封版後，再依同一人工標準分類 Day2–Day5。
