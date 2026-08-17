// 页面内容（论文 / 会议 / 助教）是由 build.js 在本地预渲染成静态 HTML 的，
// 因此这里只保留少量运行时的小功能。

// 页脚年份自动更新
(function () {
    var el = document.getElementById("copy-year");
    if (el) el.textContent = new Date().getFullYear();
})();

// 邮箱防爬：地址分段存放，运行时才拼接成 mailto 链接
(function () {
    document.querySelectorAll("a[data-u][data-d]").forEach(function (el) {
        var addr = el.getAttribute("data-u") + "\u0040" + el.getAttribute("data-d");
        el.href = "mailto:" + addr;
        el.title = addr; // 悬停时显示完整地址
        el.removeAttribute("data-u");
        el.removeAttribute("data-d");
    });
})();
