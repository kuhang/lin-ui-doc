(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{410:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"胶囊栏-capsulebar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏-capsulebar"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v(" 胶囊栏 CapsuleBar")],1),t._v(" "),s("blockquote",[s("p",[t._v("使用场景：需要胶囊按钮返回首页、导航栏自定义背景图片等场景")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("使用该组件必须在页面 json 文件中设置"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("navigationStyle")]),s("OutboundLink")],1),t._v("为"),s("strong",[t._v("custom")])])]),t._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[s("code",[t._v("CapsuleBar")]),t._v("称为胶囊栏，其本质是由一个自定义导航栏和胶囊构成。CapsuleBar 的胶囊样式和微信原生样式高度一致并且位置对称，默认提供返回上一页和返回首页的功能。")]),t._v(" "),s("h2",{attrs:{id:"核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),s("p",[t._v("因 "),s("strong",[t._v("CapsuleBar")]),t._v(" 元素较多，为了便于你理解文档，我会简单介绍一下胶囊栏各个部分的名称")]),t._v(" "),s("p",[t._v("首先，我们把胶囊栏分为 3 个部分："),s("code",[t._v("StatusBar")]),t._v("、"),s("code",[t._v("TitleBar")]),t._v("、"),s("code",[t._v("CapsuleButton")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("StatusBar")]),t._v("—— 状态栏，手机顶部显示信号、电量等信息的区域")]),t._v(" "),s("li",[s("code",[t._v("TitleBar")]),t._v("—— 标题栏，显示标题文字、胶囊按钮的区域")]),t._v(" "),s("li",[s("code",[t._v("Capsule")]),t._v("—— 胶囊，标题栏左侧胶囊")])]),t._v(" "),s("p",[t._v("以上三个名词分别对应的部分如下图所示：")]),t._v(" "),s("div",{staticClass:"l-img"},[s("p",[s("img",{attrs:{src:"/screenshots/navigation-bar/1.png",alt:"height=100"}})])]),s("h2",{attrs:{id:"基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),s("p",[t._v("使用 "),s("strong",[t._v("CapsuleBar")]),t._v(" 仅需传入"),s("code",[t._v("home-page（主页路径）")]),t._v("和"),s("code",[t._v("title（页面标题）")]),t._v("两个属性，并将页面其他标签放置于"),s("code",[t._v("l-capsule-bar")]),t._v("标签内部即可。")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- CapsuleBar 基础用法 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-capsule-bar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("home-page")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/pages/navigator/index/index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("林间有风"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("页面内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-capsule-bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"胶囊栏高度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏高度"}},[t._v("#")]),t._v(" 胶囊栏高度")]),t._v(" "),s("p",[t._v("实现自定义导航栏的一大难点在于微信小程序的导航栏高度是随机型不同而动态变化的，但却没有 api 可以获取导航栏的高度，所以 Lin UI 提供了一个工具类，用于获取导航栏的高度。你可以使用该工具类去获取导航栏的高度，以实现更多不同种类的玩法。")]),t._v(" "),s("p",[s("code",[t._v("CapsuleBar")]),t._v(" 的高度便是通过该工具类获取到的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" deviceUtil "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/miniprogram_npm/lin-ui/utils/device-util"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 获取 CapsuleBar 高度\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNavigationBarHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" capsuleBarHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deviceUtil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNavigationBarHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("CapsuleBar 的高度为")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("capsuleBarHeight"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("rpx")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"高级用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[t._v("#")]),t._v(" 高级用法")]),t._v(" "),s("p",[t._v("CapsuleBar 的亮点除了构造了一个胶囊外，更加强大的是"),s("strong",[t._v("支持图片背景")]),t._v("，这是微信小程序原生导航栏所无法实现的。")]),t._v(" "),s("p",[t._v("要支持图片背景，只需将"),s("code",[t._v("navigation-bar-color")]),t._v("设置为"),s("code",[t._v("transparent")]),t._v("即可，然后你便可以在"),s("code",[t._v("l-capsule-bar")]),t._v("标签内随意布局你的图片了")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- CapsuleBar 图片背景 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-capsule-bar")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("navigation-bar-color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("transparent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("capsule-button-color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title-color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("home-page")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/pages/navigator/index/index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("林间有风"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- CapsuleBar 背景图片 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("height:")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CapsuleBarHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigation-bar-image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://img.juzibiji.top/20200523214628.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 以下部分放置页面内容 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这里是你的页面内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-capsule-bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-wxss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".navigation-bar-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("fixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" deviceUtil "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/miniprogram_npm/lin-ui/utils/device-util"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    capsuleBarHeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" deviceUtil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNavigationBarHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"胶囊颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#胶囊颜色"}},[t._v("#")]),t._v(" 胶囊颜色")]),t._v(" "),s("p",[s("strong",[t._v("CapsuleBar")]),t._v(" 提供的胶囊与原生胶囊样式相似度达到 99%，可通过"),s("code",[t._v("capsule-color")]),t._v("属性控制胶囊颜色。")]),t._v(" "),s("p",[s("strong",[t._v("胶囊栏右侧的原生胶囊颜色和"),s("code",[t._v("StatusBar")]),t._v("文字颜色需在页面 json 文件中通过设置"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("navigationBarTextStyle")]),s("OutboundLink")],1),t._v("来修改。")])]),t._v(" "),s("h2",{attrs:{id:"胶囊栏属性-capsulebar-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏属性-capsulebar-attributes"}},[t._v("#")]),t._v(" 胶囊栏属性（CapsuleBar Attributes）")]),t._v(" "),s("blockquote",[s("p",[t._v("下列属性以"),s("code",[t._v("color")]),t._v("结尾的，除可选值有特殊标注外，均可使用 "),s("strong",[t._v("HEX/RGBA/CSS 颜色名")]),t._v(" 作为值传入，表中不再单独说明。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("版本号")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("bg-color")]),t._v(" "),s("td",[s("code",[t._v("CapsuleBar")]),t._v("背景色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("white")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("status-bar-color")]),t._v(" "),s("td",[s("code",[t._v("StatusBar")]),t._v("背景色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("white")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("title-bar-color")]),t._v(" "),s("td",[s("code",[t._v("TitleBar")]),t._v("背景色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("white")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("title-color")]),t._v(" "),s("td",[t._v("标题颜色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("black")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("capsule-color")]),t._v(" "),s("td",[t._v("左侧胶囊按钮颜色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("white/black")]),t._v(" "),s("td",[t._v("white")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("disable-back")]),t._v(" "),s("td",[t._v("禁用左侧按钮返回上一级页面")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("disable-home")]),t._v(" "),s("td",[t._v("禁用右侧按钮返回主页")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("hidden-capsule")]),t._v(" "),s("td",[t._v("隐藏胶囊按钮")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("home-page")]),t._v(" "),s("td",[t._v("主页面 url，点击右侧按钮时跳转")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("胶囊栏标题")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("has-padding")]),t._v(" "),s("td",[t._v("是否设置页面顶部内边距为 CapsuleBar 的高度")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("0.8.3")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("关于 has-padding 属性的说明：")])]),t._v(" "),s("ul",[s("li",[t._v("为 true 时：页面内容布局从胶囊栏下边缘开始，适用于胶囊栏有背景色时使用")]),t._v(" "),s("li",[t._v("为 false 时，页面内容布局从屏幕顶部下边缘开始，适用于胶囊栏背景透明时使用")])]),t._v(" "),s("h2",{attrs:{id:"胶囊栏外部样式类-capsulebar-externalclasses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏外部样式类-capsulebar-externalclasses"}},[t._v("#")]),t._v(" 胶囊栏外部样式类（CapsuleBar ExternalClasses）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("外部样式类名")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("备注")]),t._v(" "),s("th",[t._v("版本号")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("l-title-class")]),t._v(" "),s("td",[t._v("覆盖标题文字样式")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("0.8.3")])])])]),t._v(" "),s("h2",{attrs:{id:"胶囊栏事件-capsulebar-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏事件-capsulebar-events"}},[t._v("#")]),t._v(" 胶囊栏事件（CapsuleBar Events）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件名称")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("返回值")]),t._v(" "),s("th",[t._v("备注")]),t._v(" "),s("th",[t._v("版本号")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("bind:linlefttap")]),t._v(" "),s("td",[t._v("点击胶囊左侧按钮回调事件（在返回上一页之前触发）")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("bind:linleftlongpress")]),t._v(" "),s("td",[t._v("长按胶囊左侧按钮回调事件")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("bind:linrighttap")]),t._v(" "),s("td",[t._v("点击胶囊右侧按钮回调事件（在返回主页之前触发）")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("0.8.3")])]),t._v(" "),s("tr",[s("td",[t._v("bind:linrightlongpress")]),t._v(" "),s("td",[t._v("长按胶囊右侧按钮回调事件")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("0.8.3")])])])]),t._v(" "),s("h2",{attrs:{id:"胶囊栏插槽-capsulebar-slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#胶囊栏插槽-capsulebar-slot"}},[t._v("#")]),t._v(" 胶囊栏插槽（CapsuleBar Slot）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Slot 名称")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("备注")]),t._v(" "),s("th",[t._v("版本号")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("默认 slot")]),t._v(" "),s("td",[t._v("页面内容区域")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("0.8.3")])])])]),t._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);a.default=e.exports}}]);