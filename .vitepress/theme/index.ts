import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import type { App } from "vue"

import "./custom.css"

import Article from "./layouts/Article.vue"

import Project from "./components/Project.vue"

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        app.component("article-page", Article)

        app.component("Project", Project)
    }
} satisfies Theme