import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Cecilia Studio",
    description: "Cecilia Studio 官方网站",
    head: [
        ["link", { rel: "icon", href: "/img/cecilia-studio.png" }]
    ],
    themeConfig: {
        outline: {
            level: 10,
            label: "导航"
        },
        logo: "/img/cecilia-studio.png",
        nav: [
            { text: "首页", link: "/" },
            { text: "项目", link: "/projects" },
            { text: "文章", link: "/articles" },
            { text: "赞助者", link: "/sponsors"}
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/CeciliaStudio" },
            { icon: "bilibili", link: "https://space.bilibili.com/3690981213866829" }
        ]
    }
})