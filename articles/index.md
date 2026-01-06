---
articles:
  - title: PCL.Mac.Refactor v0.0.1 已发布
    slug: pcl-mac-refactor-v0.0.1-released
    author:
      name: 风花AnemoFlower
      url: https://github.com/AnemoFlower
    time: 2025-12-25T13:38:02+08:00
  - title: PCL.Mac.Refactor v0.1.0 已发布
    slug: pcl-mac-refactor-v0.1.0-released
    author:
      name: 风花AnemoFlower
      url: https://github.com/AnemoFlower
    time: 2025-12-31T18:36:15+08:00
---

<script setup>
function formatDate(iso8601String) {
    return new Date(iso8601String).toLocaleDateString()
}

const origin = window.location.origin
</script>

<div class="article-list vp-doc">
    <h1>文章</h1>
    <div class="articles-container">
        <div class="article-container" v-for="article in $frontmatter.articles">
            <a :href="'/articles/' + article.slug" class="article-title">{{ article.title }}</a>
            <div class="bottom-tags">
                <a :href="article.author.url" class="author">{{ article.author.name }}</a>
                <span>{{ formatDate(article.time) }}</span>
                <span class="ellipsis">{{ origin + "/articles/" + article.slug }}</span>
            </div>
        </div>
    </div>
</div>

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

.article-container:hover {
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