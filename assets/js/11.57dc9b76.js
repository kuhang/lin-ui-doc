(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{379:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"lin-ui-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lin-ui-cli"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v(" Lin UI CLI")],1),t._v(" "),s("p",[t._v("Lin UI CLI 是一款针对于 "),s("strong",[t._v("微信小程序")]),t._v(" 以及 "),s("strong",[t._v("Lin UI")]),t._v(" 的脚手架，通过 Lin UI CLI 可以快速搭建一套带有 "),s("strong",[t._v("按需加载")]),t._v(" 功能和 "),s("strong",[t._v("Lin UI")]),t._v(" 组件库的项目模板。")]),t._v(" "),s("h2",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("ul",[s("li",[t._v("提供 "),s("code",[t._v("create")]),t._v(" 命令，您可以通过此命令快速搭建一套项目模板")]),t._v(" "),s("li",[t._v("提供 "),s("code",[t._v("build")]),t._v(" 命令，此命令可以实现 Lin UI  "),s("strong",[t._v("按需加载")]),t._v(" 功能")])]),t._v(" "),s("h2",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),s("h3",{attrs:{id:"新项目引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新项目引入"}},[t._v("#")]),t._v(" 新项目引入")]),t._v(" "),s("p",[t._v("执行以下命令可以快速创建一个基于 Lin UI CLI 的项目：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推荐")]),t._v("\nnpx lin-ui-cli create lin-ui-demo\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lin-ui-cli -g\nlin-ui-cli create lin-ui-demo\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("npx")]),t._v(" 命令会在本地创建一个临时目录，等使用完之后就会删除，不会占用空间"),s("br"),t._v(" "),s("code",[t._v("npm install -g")]),t._v(" 全局安装会在本地保存一份安装的文件")])]),t._v(" "),s("p",[t._v("当项目创建完成后，会返回如下提示语句：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Successfully created project lin-ui-demo, directory name is lin-ui-demo\nNext: Please run cd lin-ui-demo && npm install or yarn\n")])])]),s("h3",{attrs:{id:"旧项目升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旧项目升级"}},[t._v("#")]),t._v(" 旧项目升级")]),t._v(" "),s("p",[t._v("首先，您在进行此操作前需要创建一个微信小程序项目，并在 "),s("strong",[t._v("本地设置")]),t._v(" 中勾选 "),s("code",[t._v("使用npm模块")]),t._v(" 选项。")]),t._v(" "),s("p",[t._v("打开小程序的项目根目录，执行下面的命令（如果使用了云开发，需要进入miniprogram文件夹下执行下面的命令）。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -y\n")])])]),s("p",[t._v("接着，继续执行下面的命令。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lin-ui-cli --save\n")])])]),s("br"),t._v(" "),s("p",[t._v("在微信开发者工具配置文件 "),s("strong",[t._v("project.config.json")]),t._v(" 文件里写入以下代码：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"beforeUpload"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npx lin-ui-cli build"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("创建 "),s("strong",[t._v("lin-ui.config.json")]),t._v(" "),s("a",{attrs:{href:"#linui-config-json-attributes%EF%BC%89"}},[t._v("配置文件")]),t._v("（可选），在文件里写入：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lib"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"miniprogram_npm/lin-ui"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("到此 Lin UI CLI 脚手架已经安装完成。")]),t._v(" "),s("h2",{attrs:{id:"lin-ui-config-json-attributes）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lin-ui-config-json-attributes）"}},[t._v("#")]),t._v(" lin-ui.config.json (Attributes）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("lib")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("配置 Lin UI 组件所在文件夹名称")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("miniprogram_npm/lin-ui")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);