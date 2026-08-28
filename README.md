# 5echm_web_templates

DND5e 不全书 WebHelp 模板。模板保留 WinCHM / `wcp2web` 占位符，输出纯静态 HTML5 站点。

## 结构

- `index.htm`：现代 WebHelp Shell；顶部工具栏、响应式侧栏和单个正文 iframe。
- `webhelpcontents.htm`：保留 `($NAVIGATION$)` 的目录树、即时目录过滤和展开状态。
- `webhelpindex.htm`、`webhelpbookmark.htm`：索引与本地书签。
- `webhelpsearch.htm`：未配置搜索仓库时使用的本地 `data.js` 搜索回退。
- `assets/`：Shell、导航、正文注入样式及原生 JavaScript。

`wcp2web` 生产构建会用 `5echmweb_search/webhelpsearch.htm` 覆盖本仓库的本地搜索回退页。WebHelp 模板仅用于网页壳；CHM 正文源与 CHM 输出不依赖这些现代样式。

用 WinCHM 时，将本仓库文件复制到 WinCHM 的 `webhelp` 模板目录。自动构建方式见 `5echm_web_build` 与 `DND5e_chm/.github/workflows/build-web.yml`。
