<template>
    <div class="article-layout vp-doc">
        <header>
            <h1 class="article-title">{{ frontmatter.title || $page.title }}</h1>
        </header>
        <main>
            <Content />
        </main>
    </div>
</template>

<script setup>
import { useData } from "vitepress"
const { frontmatter } = useData()
</script>

<style scoped>
.article-layout {
    padding: 2em;
    max-width: 80%;
    margin: auto;
}

.article-title {
    font-size: 40px;
    font-weight: bold;
}
</style>