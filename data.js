// ============================================================================
// 页面数据（论文 / 会议 / 助教）
//
// 维护方式：只需在下面三个数组里增删或修改条目，然后在项目根目录运行
//     node build.js
// 即可把内容重新渲染进 index.html（生成的是静态 HTML，对 SEO 友好）。
//
// ── publications 字段 ──
//   year     : 年份（字符串）
//   image    : 缩略图路径
//   imageAlt : 图片 alt 文本
//   title    : 论文标题（纯文本）
//   url      : 论文链接（DOI / 出版社页面）
//   authors  : 作者 HTML（本人用 <span class="self">…</span> 包裹，通讯作者后加 *）
//   venue    : 期刊 / 出版物名称
//
// ── conferences 字段 ──
//   year / title / venue：同义；authors 同上
//   award    : 可选，获奖名称（如 "Best Student Paper"），留空则不显示奖章
//
// ── teaching 字段 ──
//   code / name / url / semester
// ============================================================================

const publicationsData = [
    {
        year: "2026",
        image: "./Papers/2026_ARiQoL integration.png",
        imageAlt: "Applied Research in Quality of Life 2026",
        title: "From social ties to financial stability in later life: Understanding the imperatives of economic integration for the self-rated health of older migrants",
        url: "https://link.springer.com/article/10.1007/s11482-026-10636-0#citeas",
        authors: `<span class="self">Shuhong Wang</span>, Wanyang Hu*`,
        venue: "Applied Research in Quality of Life",
    },
    {
        year: "2026",
        image: "./Papers/2026_RoA HCBS.png",
        imageAlt: "Research on Aging 2026",
        title: "Beyond family care: How home- and community-based services complement family care to reduce unmet care needs and enhance the well-being among older adults with disabilities",
        url: "https://journals.sagepub.com/doi/10.1177/01640275251414989",
        authors: `<span class="self">Shuhong Wang</span>, Wanyang Hu*`,
        venue: "Research on Aging",
    },
    {
        year: "2024",
        image: "./Papers/2024_Journal of Aging and Environment.png",
        imageAlt: "Journal of Aging and Environment 2024",
        title: "Does a good home make older adults better off? An empirical analysis of the associations between age-friendly home and older adults' subjective well-being",
        url: "https://www.tandfonline.com/doi/full/10.1080/26892618.2024.2359376",
        authors: `<span class="self">Shuhong Wang</span>, Wanyang Hu*`,
        venue: "Journal of Aging and Environment",
    },
    {
        year: "2024",
        image: "./Papers/2024_SSM policy.png",
        imageAlt: "Social Science & Medicine 2024",
        title: "Implementing age-friendly policies in China: Assessing the impact on older adults' self-rated health",
        url: "https://doi.org/10.1016/j.socscimed.2024.116637",
        authors: `<span class="self">Shuhong Wang</span>, Wanyang Hu*`,
        venue: "Social Science &amp; Medicine",
    },
    {
        year: "2023",
        image: "./Papers/2023_Cities.png",
        imageAlt: "Cities 2023",
        title: "Human-centric vs. technology-centric approaches in a top-down smart city development regime: Evidence from 341 Chinese cities",
        url: "https://doi.org/10.1016/j.cities.2023.104271",
        authors: `Wanyang Hu*, <span class="self">Shuhong Wang</span>, Wei Zhai`,
        venue: "Cities",
    },
    {
        year: "2022",
        image: "./Papers/2022_SSM grandparenting.png",
        imageAlt: "Social Science & Medicine 2022",
        title: "Grandparenting and subjective well-being in China: The moderating effects of residential location, gender, age, and income",
        url: "https://doi.org/10.1016/j.socscimed.2022.115528",
        authors: `<span class="self">Shuhong Wang</span>, Shengxiao (Alex) Li, Wanyang Hu*`,
        venue: "Social Science &amp; Medicine",
    },
    {
        year: "2021",
        image: "./Papers/2021_Water 3.png",
        imageAlt: "Irrigation Science 2021",
        title: "Water scarcity and adoption of water-saving irrigation technologies in groundwater over-exploited areas in the North China Plain",
        url: "https://link.springer.com/article/10.1007/s00271-021-00726-2",
        authors: `Kunlin Yuan, Zhihai Yang*, <span class="self">Shuhong Wang</span>`,
        venue: "Irrigation Science",
    },
    {
        year: "2021",
        image: "./Papers/2020_Water 1.png",
        imageAlt: "Environment, Development and Sustainability 2021",
        title: "Factors affecting sustained adoption of irrigation water-saving technologies in groundwater over-exploited areas in the North China Plain",
        url: "https://link.springer.com/article/10.1007/s10668-020-01071-8",
        authors: `<span class="self">Shuhong Wang</span>, Ning Yin, Zhihai Yang*`,
        venue: "Environment, Development and Sustainability",
    },
    {
        year: "2020",
        image: "./Papers/2020_Chinese.png",
        imageAlt: "农业现代化研究 2020",
        title: "农业劳动力老龄化对粮食绿色全要素生产率变动的影响研究",
        url: "https://nyxdhyj.isa.ac.cn/cn/article/doi/10.13872/j.1000-0275.2020.0037",
        authors: `<span class="self">王淑红</span>，杨志海*`,
        venue: "农业现代化研究",
    },
];

const conferencesData = [
    {
        year: "2025",
        title: "Does a good home make older adults better off? An empirical analysis of the associations between age-friendly home and older adults' subjective well-being",
        authors: `<span class="self">Shuhong Wang</span>, Wanyang Hu`,
        venue: "The 19th International Association for China Planning Annual Conference, Xiamen, China",
    },
    {
        year: "2023",
        title: "Implementing age-friendly policies in China: Assessing the impact on older adults' self-rated health",
        authors: `<span class="self">Shuhong Wang</span>, Wanyang Hu`,
        venue: "The 17th International Association for China Planning Annual Conference, Tianjin, China",
    },
    {
        year: "2022",
        award: "Best Student Paper",
        title: "Grandparenting and well-being in China: The moderating effect of gender, age, income and residential location",
        authors: `<span class="self">Shuhong Wang</span>, Shengxiao (Alex) Li, Wanyang Hu`,
        venue: "The 16th International Association for China Planning Annual Conference, Wuhan, China",
    },
];

const teachingData = [
    {
        code: "PIA3307",
        name: "Managing Financial Resources in Public and Nonprofit Sectors",
        url: "https://www.cityu.edu.hk/catalogue/ug/current/course/PIA3307.htm",
        semester: "2024/2025 Sem B",
    },
    {
        code: "PIA2530",
        name: "Exploring Public Affairs in Globalised Cities",
        url: "https://www.cityu.edu.hk/catalogue/ug/current/course/PIA2530.htm",
        semester: "2024/2025 Sem A",
    },
    {
        code: "PIA3307",
        name: "Managing Financial Resources in Public and Nonprofit Sectors",
        url: "https://www.cityu.edu.hk/catalogue/ug/current/course/PIA3307.htm",
        semester: "2023/2024 Sem B",
    },
    {
        code: "PIA5401",
        name: "Values and Choices in Public Policy",
        url: "https://www.cityu.edu.hk/catalogue/pg/202526/course/PIA5401.htm",
        semester: "2023/2024 Sem A",
    },
    {
        code: "PIA3307",
        name: "Managing Financial Resources in Public and Nonprofit Sectors",
        url: "https://www.cityu.edu.hk/catalogue/ug/current/course/PIA3307.htm",
        semester: "2022/2023 Sem A",
    },
];

// 同时支持 Node（build.js 构建）与浏览器两种加载方式
if (typeof module !== "undefined" && module.exports) {
    module.exports = { publicationsData, conferencesData, teachingData };
} else {
    window.publicationsData = publicationsData;
    window.conferencesData = conferencesData;
    window.teachingData = teachingData;
}
