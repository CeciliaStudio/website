# 赞助者

爱发电地址：https://afdian.com/a/AnemoFlower<br>

<ul v-if="sponsors.length">
    <li v-for="sponsor in sponsors">{{ sponsor.nickname }}</li>
    <div class="afdian-hint">以上内容来自爱发电</div>
</ul>
<span v-if="sponsors.length == 0">这里什么都没有呢……</span>

<script setup>
import { ref, onMounted } from "vue"

const sponsors = ref([])

onMounted(async () => {
    const response = await fetch("https://api.ceciliastudio.top/sponsors")
    sponsors.value = (await response.json()).data
})
</script>

<style scoped>
.afdian-hint {
    color: var(--vp-c-text-2);
    font-size: 14px;
    margin-top: 5px;
}
</style>