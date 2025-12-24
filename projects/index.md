---
projects:
  - name: PCL.Mac
    slug: PCL.Mac
    icon: /img/PCL.Mac.png
    summary: 一个 PCL 非官方衍生版，使用 SwiftUI 框架重写，专为 macOS 平台打造。
    url: https://github.com/CeciliaStudio/PCL.Mac
---

# 项目列表

<div class="projects-container">
    <Project v-for="project in $frontmatter.projects"
        :name="project.name"
        :slug="project.slug"
        :icon="project.icon"
        :summary="project.summary"
        :url="project.url" />
</div>

<style scoped>
.projects-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
}
</style>