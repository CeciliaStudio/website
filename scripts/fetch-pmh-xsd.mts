import { mkdir, writeFile } from "fs/promises";

const response = await fetch("https://github.com/CeciliaStudio/PCL.Mac.Homepage/raw/refs/heads/main/homepage.xsd")
if (!response.ok) {
    throw new Error(`Failed to fetch XSD: ${response.status} ${response.statusText}`);
}
const content: string = await response.text()
await mkdir("./public/pmh");
await writeFile("./public/pmh/homepage.xsd", content)