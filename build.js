#!/usr/bin/env node
// ============================================================================
// build.js —— 把 data.js 中的数据预渲染成静态 HTML，写回 index.html。
//
// 用法（项目根目录）：
//     node build.js
//
// 它只替换 index.html 中下列标记之间的内容，其余部分原样保留：
//     <!-- AUTO-GEN:publications START -->  ...  <!-- AUTO-GEN:publications END -->
//     <!-- AUTO-GEN:conferences  START -->  ...  <!-- AUTO-GEN:conferences  END -->
//     <!-- AUTO-GEN:teaching     START -->  ...  <!-- AUTO-GEN:teaching     END -->
//
// 因为生成的是静态 HTML，搜索引擎和社交预览无需执行 JS 即可读到全部内容。
// ============================================================================

const fs = require("fs");
const path = require("path");
const { publicationsData, conferencesData, teachingData } = require("./data.js");

const INDEX = path.join(__dirname, "index.html");

const trophySvg =
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`;

function renderPublications(items) {
    return items
        .map(
            (p) => `                <div class="pub-item">
                    <div class="pub-thumb">
                        <img loading="lazy" decoding="async" width="100" height="142" src="${p.image}" alt="${p.imageAlt}"/>
                    </div>
                    <div class="pub-content">
                        <span class="pub-year">${p.year}</span>
                        <div class="pub-title">
                            <a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>
                        </div>
                        <div class="pub-authors">${p.authors}</div>
                        <div class="pub-venue">
                            <span class="venue-name">${p.venue}</span>
                        </div>
                    </div>
                </div>`
        )
        .join("\n\n");
}

function renderConferences(items) {
    return items
        .map((c) => {
            const award = c.award
                ? `\n                    <span class="conf-award">${trophySvg} ${c.award}</span>`
                : "";
            return `                <div class="conf-item">
                    <span class="conf-year">${c.year}</span>${award}
                    <div class="conf-title">${c.title}</div>
                    <div class="conf-authors">${c.authors}</div>
                    <div class="conf-venue">${c.venue}</div>
                </div>`;
        })
        .join("\n\n");
}

function renderTeaching(items) {
    return items
        .map(
            (t) => `                <div class="t-card">
                    <span class="t-code">${t.code}</span>
                    <span class="t-name"><a href="${t.url}" target="_blank" rel="noopener">${t.name}</a></span>
                    <span class="t-sem">${t.semester}</span>
                </div>`
        )
        .join("\n\n");
}

function replaceBlock(html, name, inner) {
    const start = `<!-- AUTO-GEN:${name} START -->`;
    const end = `<!-- AUTO-GEN:${name} END -->`;
    const re = new RegExp(
        start.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
            "[\\s\\S]*?" +
            end.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    if (!re.test(html)) {
        throw new Error(`index.html 中找不到 ${name} 的 AUTO-GEN 标记，构建中止。`);
    }
    return html.replace(re, `${start}\n${inner}\n                ${end}`);
}

let html = fs.readFileSync(INDEX, "utf8");
html = replaceBlock(html, "publications", renderPublications(publicationsData));
html = replaceBlock(html, "conferences", renderConferences(conferencesData));
html = replaceBlock(html, "teaching", renderTeaching(teachingData));
fs.writeFileSync(INDEX, html, "utf8");

console.log(
    `✔ 已生成：${publicationsData.length} 篇论文 / ${conferencesData.length} 个会议报告 / ${teachingData.length} 门助教课程 → index.html`
);
