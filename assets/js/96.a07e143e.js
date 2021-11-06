(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{747:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("这里我们只介绍 GitLab 和 GitHub 的 pages 功能的部署。")])]),t._v(" "),a("h2",{attrs:{id:"github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" GitHub")]),t._v(" "),a("p",[t._v("打开项目设置的 "),a("code",[t._v("GitHub Pages")]),t._v(" 模块，将 "),a("code",[t._v("Source")]),t._v(" 设置为 "),a("code",[t._v("gh-pages")]),t._v("，这样我们就可以将博客项目放在 "),a("code",[t._v("master")]),t._v(" 分支，而部署到 "),a("code",[t._v("gh-pages")]),t._v(" 分支。")]),t._v(" "),a("h3",{attrs:{id:"手动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动部署"}},[t._v("#")]),t._v(" 手动部署")]),t._v(" "),a("p",[t._v("在根目录建一个 "),a("code",[t._v("deploy.sh")]),t._v(" 文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("如果你用的 MAC，在项目根目录借助 "),a("code",[t._v("终端")]),t._v(" 执行 "),a("code",[t._v("bash deploy.sh")]),t._v(" 即可；如果你使用的是 WINDOWS，在项目根目录借助 "),a("code",[t._v("Git Bash")]),t._v(" 执行 "),a("code",[t._v("bash deploy.sh")]),t._v(" 即可。")])]),a("h3",{attrs:{id:"自动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动部署"}},[t._v("#")]),t._v(" 自动部署")]),t._v(" "),a("p",[a("code",[t._v("GitHub")]),t._v(" 的自动部署需要借助 "),a("code",[t._v("travis-ci")]),t._v(" 。")]),t._v(" "),a("ol",[a("li",[t._v("打开 "),a("a",{attrs:{href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("travis-ci"),a("OutboundLink")],1),t._v("，使用 "),a("code",[t._v("GitHub")]),t._v(" 登录；")]),t._v(" "),a("li",[t._v("进入设置页面，点击 "),a("code",[t._v("Manage repositories on GitHub")]),t._v(" 按钮，将需要自动部署的项目导入进来；")]),t._v(" "),a("li",[t._v("项目列表中，项目后面有一个 "),a("code",[t._v("settings")]),t._v(" 按钮，点击进去将进行配置：\n"),a("ol",[a("li",[t._v("获取 "),a("code",[t._v("token")]),t._v("：进入github的设置页面，点击 "),a("code",[t._v("Developer settings")]),t._v(" 按钮，点击 "),a("code",[t._v("Personal access tokens")]),t._v(" 按钮，在当前页面生成 "),a("code",[t._v("token")]),t._v("，名字随便写，只是起到区分作用；")]),t._v(" "),a("li",[t._v("配置 "),a("code",[t._v("token")]),t._v("：将上面生成的 "),a("code",[t._v("token")]),t._v(" 添加在项目的设置页面的 "),a("code",[t._v("Environment Variables")]),t._v("，切记，名字不可随便写，在这里你写成 "),a("code",[t._v("GITHUB_TOKEN")]),t._v("；")]),t._v(" "),a("li",[t._v("配置 "),a("code",[t._v("Cron Jobs")]),t._v("：（如果你的项目就在 "),a("code",[t._v("master")]),t._v(" 分支，可以不用配置这里）"),a("code",[t._v("Branch")]),t._v(" 选择 你存放项目源码的分支，"),a("code",[t._v("Interval")]),t._v(" 选择 "),a("code",[t._v("monthly")]),t._v("，"),a("code",[t._v("Options")]),t._v(" 选择 "),a("code",[t._v("Always run")]),t._v("，添加成功后便会生效。")])])]),t._v(" "),a("li",[t._v("在根目录下创建 "),a("code",[t._v(".travis.yml")]),t._v("（"),a("a",{attrs:{href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置规范"),a("OutboundLink")],1),t._v("）："),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run build\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip-cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目打包后生成的文件的目录")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github-token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里这个变量就是刚才配置 token 时填写的那个变量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目源码所在的分支")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("现在去提交一下代码试试吧，在你提交成功后 "),a("code",[t._v("travis-ci")]),t._v(" 的控制台就能看到你的项目在部署了。")])]),t._v(" "),a("h2",{attrs:{id:"gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[t._v("#")]),t._v(" GitLab")]),t._v(" "),a("h3",{attrs:{id:"手动部署-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动部署-2"}},[t._v("#")]),t._v(" 手动部署")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("设置输出目录为 "),a("code",[t._v("public")]),t._v("：")]),t._v(" "),a("p",[t._v("由于 "),a("code",[t._v("GitLab")]),t._v(" 的 "),a("code",[t._v("pages")]),t._v(" 功能的指定文件夹是 "),a("code",[t._v("public")]),t._v("，所以我们要将项目的输出目录改为 "),a("code",[t._v("public")]),t._v("，也就是将 "),a("code",[t._v("config.js")]),t._v(" 的 "),a("code",[t._v("dest")]),t._v(" 设置为 "),a("code",[t._v("public")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("本地编译，然后将项目提交到 "),a("code",[t._v("GitLab")]),t._v(" 即可。")])])]),t._v(" "),a("h3",{attrs:{id:"自动部署-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动部署-2"}},[t._v("#")]),t._v(" 自动部署")]),t._v(" "),a("ol",[a("li",[t._v("设置输出目录为 "),a("code",[t._v("public")]),t._v("；")]),t._v(" "),a("li",[t._v("由于 "),a("code",[t._v("GitLab")]),t._v(" 自带 CI，所以就省去了很多的配置步骤，只需要在项目根目录创建 "),a("code",[t._v(".gitlab-ci.yml")]),t._v("（"),a("a",{attrs:{href:"https://docs.gitlab.com/ee/ci/yaml/README.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置规范"),a("OutboundLink")],1),t._v("）："),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("9.11.1\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存 node_modules，加速编译")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("artifacts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" public\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])])])]),t._v(" "),a("li",[t._v("将项目提交到 "),a("code",[t._v("GitLab")]),t._v(" 即可。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);