# 100 分強化路線圖

本文件不是功能願望清單，而是依目前缺口排序的正式修正路線。

## P0｜防止錯版與假完成

- [x] Google Drive canonical `course_data.json` counts 修正為 172 Knowledge / 854 Questions。
- [x] 舊同名 `course_data.json` 改名並移入 `99_舊版封存`。
- [x] Deploy workflow 改為只讀 Drive → QA → Build → Deploy，不再自動 commit main。
- [x] 加入 `counts` 與實際陣列長度一致性 QA。
- [x] 加入 Production smoke test。
- [x] Drive 舊「網站正式版」降級為「網站離線快照」。
- [x] 舊 README / 驗收報告移入 `99_舊版封存`。
- [ ] GitHub Settings → Pages → Source 改成 **GitHub Actions**，停用 branch-based Pages build。此項為 Repository 管理設定，無法由 repo 檔案本身關閉。

## P1｜Day1 真正封版

- [x] Day1：78 slides / 55 Knowledge / 正式考點缺 Knowledge = 0。
- [x] 逐頁 Coverage 與 Knowledge 分層。
- [x] Day1 教學導引至少 45 種不同 `howToStudy`。
- [x] 教材預覽工作資產移出「原始教材」區，放回 08 系統工作路徑。
- [ ] 建立 `slide_media_manifest`。
- [ ] 完成 D1_S001–D1_S078 單頁預覽。
- [ ] 網站逐頁畫面優先顯示單張教材原頁，PDF 僅作上下文備援。
- [ ] 實測 S001–S078：圖、頁碼、Knowledge、題目、上一張／下一張全部正確。
- [ ] Day1 使用者驗收：Coverage、Recall、Radar、Back/Forward、PWA regression 全部通過。

## P2｜消除程式技術債

- [ ] 將 `product-fixes.js` 中已穩定功能合併回正式模組，不再靠 render 後 DOM patch。
- [ ] 將 `app.js` 中硬編的 `DAY1_EDIT` 搬回 canonical content data。
- [ ] UI 只負責 render；教學內容由資料驅動。
- [ ] 建立資料 schema / contract，新增欄位時先驗證再部署。
- [ ] 增加路由與核心使用流程自動化 smoke test。

## P3｜Day2–Day5 同標準擴展

- [ ] Day2 逐頁人工內容稽核與教學化。
- [ ] Day3 逐頁人工內容稽核與教學化。
- [ ] Day4 逐頁人工內容稽核與教學化。
- [ ] Day5 逐頁人工內容稽核與教學化。
- [ ] 所有正式考點皆可由 Knowledge 回教材證據。

## P4｜Audio 完整化

- [x] 40 / 40 完整版 TTS 腳本完成。
- [ ] 40 / 40 MP3 產出與 Drive URL 登錄。
- [ ] 單章、Day、全課播放與續播實測。
- [ ] Audio 來源頁碼、章節、腳本與 MP3 一致性 QA。

## P5｜真正產品化能力

- [ ] 跨裝置進度自動同步。
- [ ] 瀏覽器／PWA 完全關閉時仍可靠的 Windows 提醒（Push backend 或 Windows companion）。
- [ ] 教材存取權限由 unlisted 升級為真正 authenticated private media（若未來對外產品化）。

## 100 分定義

100 分不等於按鈕最多，而是：

1. 教材不漏；
2. 來源可追；
3. 學習順序合理；
4. 正式網站永遠只有一個版本；
5. 內容資料只有一個主來源；
6. 部署不會互相覆蓋；
7. QA 與線上實際結果一致；
8. Day1–Day5 都達到同一人工教學品質；
9. 通勤 Audio 與工作微學習都真正可日常使用；
10. 換裝置、關閉瀏覽器等真實使用場景仍不破壞體驗。
