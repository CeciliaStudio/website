<template>
    <div class="project-container">
        <img class="project-icon" :src="props.icon || '/img/default-project-icon.svg'">
        <div class="project-text-container">
            <a :href="'/projects/' + props.slug" class="project-name">{{ props.name }}</a>
            <div class="ellipsis project-summary">{{ props.summary }}</div>
            <a class="ellipsis" :href="props.url">{{ props.url }}</a>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name: String | null,
    slug: String,
    icon: String,
    summary: String,
    url: String
})
</script>

<style scoped>
.project-container {
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    background-color: hsla(158, 100%, 20%, 10%);
    transition: background-color 0.2s;
    max-width: 100%;
    max-height: 96px;
}

.project-container:hover {
    background-color: hsla(158, 100%, 20%, 50%);
}

.project-icon {
    width: 80px;
    height: 80px;
    align-self: center;
    margin-left: 8px;
}

.project-text-container {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.project-name {
    font-weight: bold;
    text-decoration: none;
    color: var(--vp-c-text-1);
}

.project-summary {
    color: var(--vp-c-text-3);
    font-size: 15px;
    line-height: 120%;
    max-height: 30px;
}
</style>