# 5echm_web_templates

DND5e 不全书 WebHelp 模板。模板保留 WinCHM / `wcp2web` 占位符，输出纯静态 HTML5 站点。

传统Chm的模板请查看 chm_templates 分支留档。

## 结构

- `index.htm`：现代 WebHelp Shell；顶部工具栏、响应式侧栏和单个正文 iframe。
- `webhelpcontents.htm`：保留 `($NAVIGATION$)` 的目录树、即时目录过滤和展开状态。
- `webhelpindex.htm`、`webhelpbookmark.htm`：索引与本地书签。
- `webhelpsearch.htm`：未配置搜索仓库时使用的本地 `data.js` 搜索回退。
- `assets/`：Shell、导航、正文注入样式及原生 JavaScript。

`wcp2web` 生产构建会用 `5echmweb_search/webhelpsearch.htm` 覆盖本仓库的本地搜索回退页。WebHelp 模板仅用于网页壳；CHM 正文源与 CHM 输出不依赖这些现代样式。

用 WinCHM 时，将本仓库文件复制到 WinCHM 的 `webhelp` 模板目录。自动构建方式见 `5echm_web_build` 与 `DND5e_chm/.github/workflows/build-web.yml`。

## 正文颜色对比度修复

现代 Shell 会在正文 iframe 中加载 `assets/webhelp-contrast.js`。工具按 WCAG 对比度计算实际渲染后的文字和背景，只对低于阈值的文字临时提高前景色，不修改生成的 topic 文件；半透明背景、渐变背景和不可见节点会跳过。可在正文 iframe 控制台使用 `WebHelpContrast.audit()` 查看报告，使用 `WebHelpContrast.restore()` 恢复原色，或 `WebHelpContrast.setMode("off")` 关闭自动修复。单页可在根元素设置 `data-webhelp-contrast-threshold="3"` 调整阈值；确需保留装饰性低对比度文字时，可给节点加 `data-webhelp-contrast-ignore`。
