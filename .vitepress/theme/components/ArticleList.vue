<script setup>
import { ref, onMounted } from "vue"

function formatDate(iso8601String) {
    return new Date(iso8601String).toLocaleDateString()
}

const origin = window.location.origin
const articles = ref([])

onMounted(async () => {
    const response = await fetch("/articles.json")
    articles.value = await response.json()
})
</script>

<template>
    <div class="article-list vp-doc">
        <h1>文章</h1>
        <div class="articles-container" v-if="articles.length">
            <div class="article-container" v-for="article in articles">
                <a :href="'/articles/' + article.slug" class="article-title">{{ article.title }}</a>
                <div class="bottom-tags">
                    <a :href="article.author.url" class="author">{{ article.author.name }}</a>
                    <span>{{ formatDate(article.time) }}</span>
                    <span>{{ origin + "/articles/" + article.slug }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.article-list {
    max-width: 100%;
}

.articles-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
}

.article-container {
    border-radius: 5px;
    padding: 10px;
    background-color: hsla(158, 100%, 20%, 10%);
    transition: background-color 0.2s;
}

.article:hover {
    background-color: hsla(158, 100%, 20%, 50%);
}

.article-title {
    font-weight: bold;
    color: var(--vp-c-text-1);
}

.bottom-tags {
    display: grid;
    grid-template-columns: 120px 80px auto;
    font-size: 13px;
    font-weight: 500;
    color: var(--vp-c-text-3);
}

a {
    text-decoration: none;
}
</style>