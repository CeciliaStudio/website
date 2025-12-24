import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Cecilia Studio",
    description: "A VitePress Site",
    head: [
        ["link", { rel: "icon", href: "/img/cecilia-studio.png" }]
    ],
    themeConfig: {
        logo: "/img/cecilia-studio.png",
        nav: [
            { text: "首页", link: "/" },
            { text: "项目", link: "/projects" },
            { text: "文章", link: "/articles" }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/CeciliaStudio" }
        ]
    }
})
