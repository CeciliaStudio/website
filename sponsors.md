# 赞助者

爱发电地址：https://afdian.com/a/AnemoFlower<br>

<ul>
    <li v-for="sponsor in sponsors">{{ sponsor }}</li>
</ul>
<span v-if="sponsors.length == 0">这里什么都没有呢……</span>

<script setup>
import { ref, onMounted } from "vue"

const sponsors = ref([])

onMounted(async () => {
    const response = await fetch("https://api.ceciliastudio.top/sponsors")
    sponsors.value = await response.json()
})
</script>