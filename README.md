<p align="center">
  <img src="sjx.png" alt="sjx's avatar" width=150 >
</p>

<h1 align="center">「世说鑫语」</h1>

<p align="center">
    <a href="https://github.com/Sh-Zh-7/BBKing-sjx" style="text-decoration:none" >
        <img src="https://img.shields.io/github/stars/Sh-Zh-7/BBKing-sjx?color=orange" alt="star"/>
    </a>
    <a href="https://github.com/Sh-Zh-7/BBKing-sjx" style="text-decoration:none" >
        <img src="https://img.shields.io/github/repo-size/Sh-Zh-7/BBKing-sjx" alt="Size"/>
    </a>
  <a href="https://github.com/Sh-Zh-7/BBKing-sjx/blob/main/LICENSE" style="text-decoration:none">
        <img src="https://img.shields.io/github/issues/Sh-Zh-7/BBKing-sjx" alt="license"/>
    </a>
</p>

# 这是什么？

这是一个专门收录SJX语录或者鬼畜作品的网站。这些语录或者鬼畜作品源自SJX所在的各种QQ群/讨论组，这些群一旦解散，这些人类圣经就很难找回了。为了拯救人类，「世说鑫语」这个网站便应运而生。



# 仓库组成？

本仓库由两个独立的分支组成，这两个分支用于存放这个项目的不同部分。

- main分支存放的是SJX语录的文本文件和一些脚本。
- web分支是Nuxt.js前端和Serverless node后端共同组成的monorepo。

你可以通过以下指令切换到对应的项目：

```shell
git checkout web   # 切换到web项目
git checkout main  # 切换到文档项目
```

项目的原理非常简单：

1. 编写`bible.txt`文件，触发Github Action的CI脚本。
2. 脚本里调用deno程序（url import，既摆脱了臃肿的node_modules，也不需要pip这种包管理器），构建sqlite数据库（主要是利用B+树的高性能读）。
3. 切换到web分支，把web项目部署到vercel上。前端SSR，后端serverless，实惠又方便～。



# 如何贡献？

这个项目主要以收录SJX的各种语录和鬼畜为主。

如果你有关于SJX的新的语录或者鬼畜创作，请参考下列共享方式。

- 关于语录的收录：
  - 如果你不会Github，那么可以直接联系作者，让作者添加。（**不推荐**，作者很少理陌生人）
  - 如果你会Github，只要开一个pull request，然后往`bible.txt`里添加语录即可。（**推荐**）
- 关于鬼畜/二创的收录：受限于技术原因，这个只能联系作者。

另外，如果你想要贡献代码，或者是提出改进的意见，作者也表示非常欢迎:)



# 其他

由于本项目仅仅是作者兴趣使然的作品，不代表作者真实水平（
同时，在技术方面也有很多待改进的地方，比如：

- [x] 移除typescript依赖。
- [x] 适配移动端布局。
- [ ] 移除tailwindcss依赖。

另外，Nuxt作为SSR框架很好，下次别用了XD。



# 鸣谢

特别感谢「毒鸡汤」项目提供的灵感：https://github.com/able8/nows-nodejs-serverless

另外，在我找不到相关「vercel-builder」相关文档的时候，是它的源码帮助了我，感恩😄

https://github.com/nuxt/vercel-builder



# 许可

[Apache-2.0 License](LICENSE)

Copyright ©️ 2021 sh-zh-7
