// deprecated
import { readFileSync, writeFileSync } from "fs"

const response: Response = await fetch("https://api.ceciliastudio.top/articles")
if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.status}\n${await response.text()}`)
}
const articles: any[] = await response.json()
console.log(`Found ${articles.length} article(s)`)

let articlesLiteral: string = ""
for (const article of articles) {
    articlesLiteral += `
  - title: ${article.title}
    slug: ${article.slug}
    author:
      name: ${article.author.name}
      url: ${article.author.url}
    time: ${article.time}
`.substring(1)
    const response: Response = await fetch(`https://api.ceciliastudio.top/articles/${article.slug}.md`)
    if (!response.ok) {
        throw new Error(`Failed to get article ${article.slug}: ${response.status}\n${await response.text()}`)
    }
    const content: string = `---
layout: article-page
title: ${article.title}
author:
  name: ${article.author.name}
  url: ${article.author.url}
time: ${article.time}
---

${await response.text()}`
    writeFileSync(`articles/${article.slug}.md`, content)
}

const lines: string[] = readFileSync("articles/index.md", "utf-8").split("\n")
lines.splice(2, 0, articlesLiteral)
writeFileSync("articles/index.md", lines.join("\n"), "utf-8")