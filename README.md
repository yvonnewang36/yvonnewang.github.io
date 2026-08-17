# Homepage of Shuhong Wang

王淑红的学术个人主页，部署在 GitHub Pages：<https://yvonnewang36.github.io/>

## 目录结构

- `index.html` —— 页面（论文/会议/助教区块由脚本生成，请勿手动编辑标记之间的内容）
- `data.js` —— **所有论文 / 会议报告 / 助教课程的数据**（唯一需要维护的内容文件）
- `build.js` —— 构建脚本，把 `data.js` 预渲染成静态 HTML 写回 `index.html`
- `script.js` —— 少量运行时功能（页脚年份、邮箱防爬）
- `static/css/style.css` —— 样式
- `Papers/`、`Self_Info/` —— 论文缩略图、头像、CV 等资源

## 如何更新论文 / 会议 / 助教

1. 编辑 `data.js`，在对应数组里增删或修改条目（字段说明见文件顶部注释）。
2. 在项目根目录运行：

   ```bash
   node build.js
   ```

   它会把最新数据渲染进 `index.html`（生成的是静态 HTML，对搜索引擎和社交预览友好）。
3. 提交并推送：

   ```bash
   git add -A && git commit -m "Update publications" && git push
   ```

> 说明：内容采用「构建时预渲染」而非浏览器端 JS 渲染，这样爬虫无需执行 JS 即可读到全部论文，有利于 SEO 收录。
