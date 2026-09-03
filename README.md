# 人才發展學習作業系統

這是人才發展管理師 Day1–Day5 的正式 GitHub Pages / PWA 主站。

## 目前正式基準

- 40 章
- 388 張教材頁
- 172 個 Knowledge
- 854 題
- Day1：78 張教材頁 / 55 Knowledge

## 學習流程

1. **逐頁完整複習**：每張教材都要被確認；有考點就連到 Knowledge，沒有獨立考點也保留 Coverage。逐頁主畫面必須直接顯示該張教材單頁，不得用整份 PDF 代替。
2. **考點深度學習**：Knowledge 負責概念整合、理解、必背、易混、記憶法、可能考法。
3. **工作快複習**：30–90 秒主動回想，弱點／到期優先。
4. **題庫與模考**：題目綁 Knowledge ID 與教材來源頁碼。
5. **有聲課程**：完整版分章，支援單章／Day／全課播放。
6. **學習分析**：Coverage、已測覆蓋、Recall、到期複習、五大能力雷達、逐章弱點。

## 正式資料分工

### GitHub
網站程式、PWA、學習邏輯、QA、部署與版本管理。

### Google Drive
原始教材、唯一正式 `course_data.json`、教材單頁預覽、完整版 TTS 腳本、MP3、大型備份。

### Browser / PWA
目前個人學習進度存在 LocalStorage，可匯出／匯入 JSON。

## Single Source of Truth

正式學習內容以 Google Drive 的 canonical `course_data.json` 為唯一主資料。

GitHub `data/course_data.js` 是建置／部署用產物，不應人工雙邊維護。

教材單頁媒體對應由 `data/slide_media.js` 管理；完整 PDF 只能當上下文備援入口。

## GitHub Pages

Repository Pages Source 應設定為 **GitHub Actions**。

正式部署管線：

`Drive canonical data → Data QA → Product QA → Build → GitHub Pages → Production smoke test`

不要同時使用 `Deploy from a branch`，避免兩條 Pages deployment 互相覆蓋。

## PWA / 桌面通知

- `manifest.webmanifest` 與 `sw.js` 已包含。
- HTTPS 下可使用 Web Notification。
- 純靜態網站在瀏覽器／PWA 完全關閉時，無法保證背景定時通知；真正 100 分版本需 Push backend 或 Windows companion。

## 版本與分支原則

- **正式維護只動 `main`。**
- **任何既有或未來支線 branch 都保留，不自動刪除、不因 merge 自動清除。**
- 不再建立 v8 / v9 / final-final 日常版本資料夾。
- Google Drive 的網站 ZIP 只視為 Snapshot / Offline Package，不是 Production source of truth。
- 舊內容資料一律移入 `99_舊版封存` 並清楚加上日期或 ARCHIVE 標記。

## 完成的定義

不是「程式碼有」或「Action 綠燈」就算完成。

真正完成必須是：

**資料正確 → QA 通過 → 正式部署成功 → Production smoke test 通過 → 固定正式網址實際可用。**

## 目前下一階段

先完成 Day1 的 78 張單頁教材預覽與逐頁學習接入，Day1 封版後再以同一標準擴展 Day2–Day5。
