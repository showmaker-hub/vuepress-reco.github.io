(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{718:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("如果要添加 "),a("code",[t._v("front-end")]),t._v(" 和 "),a("code",[t._v("back-end")]),t._v(" 分类，需要进行以下步骤：")])]),t._v(" "),a("h2",{attrs:{id:"添加导航按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加导航按钮"}},[t._v("#")]),t._v(" 添加导航按钮")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// change /docs/.vuepress/config.js")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'categories'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        items"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontEnd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/categories/frontEnd'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backEnd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/categories/backEnd'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),a("h2",{attrs:{id:"添加分类所需的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加分类所需的文件"}},[t._v("#")]),t._v(" 添加分类所需的文件")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("/docs/categories/frontEnd.md")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("--- \ntitle: frontEnd  \nisCategories: true  \nsidebar: false  \nisComment: false\n---\n\n## FrontEnd\n")])])]),a("p",[a("strong",[a("code",[t._v("/docs/categories/backEnd.md")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\ntitle: backEnd\nisCategories: true\nsidebar: false\nisComment: false\n---\n\n## BackEnd\n")])])]),a("p",[t._v("你为什么设置侧边栏为 "),a("code",[t._v("false")]),t._v(" 呢？因为您启用了分类，这与自定义侧边栏功能有点冲突，所以您全局打开自动侧边栏功能，然后在不需要侧标记的地方关闭它。")]),t._v(" "),a("h2",{attrs:{id:"写文章时添加分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写文章时添加分类"}},[t._v("#")]),t._v(" 写文章时添加分类")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\ntitle: 【vue】跨域解决方案之proxyTable  \ndate: 2017-12-28\ncategories: frontEnd\n---\n")])])]),a("p",[t._v("请记住， "),a("code",[t._v("categories")]),t._v(" 文件的相应 "),a("code",[t._v("title")]),t._v(" 值和相应的分类值是一致的。")])])}),[],!1,null,null,null);s.default=e.exports}}]);