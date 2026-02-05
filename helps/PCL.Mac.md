---
outline: [2, 3]
---
# PCL.Mac 帮助文档 与 FAQ

> [!NOTE]
> 本篇中的 PCL.Mac 指的是 [PCL.Mac.Refactor](/projects/PCL.Mac.Refactor) 而非之前的 [PCL.Mac](/projects/PCL.Mac)。

## 下载
PCL.Mac 目前没有镜像下载源，请前往 GitHub 仓库的 [Releases](https://github.com/CeciliaStudio/PCL.Mac.Refactor/releases) 或 [Cecilia Studio QQ群聊](https://qm.qq.com/q/GP6GegtjeW) 进行下载。

### 安装
下载 `PCL.Mac-vX.X.X.zip` 后，请将其解压，并将“PCL.Mac”拖至“应用程序”文件夹中。
<details>
<summary>
图片示例
</summary>
<img src="/img/53261bbcc60d4af92a3175cf8fb0e86f60c436be.png">
</details>

如果在打开 App 时出现[报毒弹窗](#qgatekeeper)，请打开 “系统设置”，在左侧找到 “隐私与安全性” 并点击，然后滚动到该页面的底部，点击 “已阻止 ‘PCL.Mac’ 以保护 Mac” 右边的 “仍然打开”。

> [!NOTE]
> PCL.Mac 并不会危害你的电脑，出现这个弹窗只是因为没付费给 App 签名而已，以后会补上的（

## 联机
PCL.Mac 的联机功能使用 EasyTier 工具实现，支持与不同局域网下的玩家联机。<br>
但，这个功能有一些限制：

- 只支持在**中国大陆**地区内使用
- 需要使用**正版账号**加入游戏（若房主添加了 LAN Server Properties 等模组则无此限制）

你可以通过该功能，与使用**支持 Scaffolding 协议**的启动器（HMCL、FCL、PCL CE、PCL.Mac 等）的玩家联机！<br>

> [!NOTE]
> 如果你和其他玩家在同一局域网内，无需使用该功能即可联机。<br>
> [教程：本地局域网联机（Minecraft Wiki）](https://zh.minecraft.wiki/w/Tutorial:本地局域网联机#Java版)

### 房主
1. 启动游戏并进入世界。
2. 按下 ESC，点击 “对局域网开放”，调整配置并点击“创建局域网世界”。
3. 记住聊天栏中的端口号（部分版本点击端口号可复制）。
4. 打开 PCL.Mac，进入联机页面并点击“创建房间”。
5. 点击“确定”，并输入端口号。
6. 等待房间完成创建。
7. 将房间码（创建房间后自动复制，也可以手动点击“复制房间码”）分享给你的好友。

### 房客
1. 打开 PCL.Mac，进入联机页面并点击“加入房间”。
2. 输入房间码。
3. 启动游戏，进入“多人游戏”页面并点击“直接连接”。
4. 输入地址（加入房间后自动复制，也可手动点击“复制地址”）并加入游戏。

## FAQ

#### Q：出现 “Apple 无法验证 ‘PCL.Mac’ 是否包含可能危害 Mac 安全或泄露隐私的恶意软件” 弹窗怎么办？ {#qgatekeeper}
A：请打开 “系统设置”，在左侧找到 “隐私与安全性” 并点击，然后滚动到该页面的底部，点击 “已阻止 ‘PCL.Mac’ 以保护 Mac” 右边的 “仍然打开”。

#### Q：出现 “应用程序 ‘PCL.Mac’ 无法打开” “-47” 怎么办？ {#qquarantine}
A：请：
1. 打开终端
2. 在终端中输入 `sudo xattr -r -d com.apple.quarantine `（末尾要带空格！）
3. 将 App 图标拖入终端窗口
4. 按下回车键并输入密码
5. 再次打开 App