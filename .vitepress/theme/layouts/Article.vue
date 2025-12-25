<template>
    <div class="article-layout vp-doc">
        <header>
            <h1 class="article-title">{{ frontmatter.title || $page.title }}</h1>
            <div class="article-info">
                <a :href="frontmatter.author.url">{{ frontmatter.author.name }}</a>
                <span>，{{ formatDate(frontmatter.time) }}</span>
            </div>
        </header>
        <main>
            <Content />
        </main>
    </div>
</template>

<script setup>
import { useData } from "vitepress"
const { frontmatter } = useData()
function formatDate(iso8601String) {
    return new Date(iso8601String).toLocaleDateString()
}
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

.article-info {
    margin-top: 5px;
    font-size: 14px;
}

.article-info * {
    color: var(--vp-c-text-3);
}
</style>