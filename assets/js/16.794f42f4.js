(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{573:function(e,t,v){"use strict";v.r(t);var _=v(5),o=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"vue-组件使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件使用"}},[e._v("#")]),e._v(" Vue 组件使用")]),e._v(" "),v("h3",{attrs:{id:"_1-props-和-emit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-props-和-emit"}},[e._v("#")]),e._v(" 1. props 和 $emit")]),e._v(" "),v("ol",[v("li",[e._v("props: 父组件想子组件传递信息")]),e._v(" "),v("li",[e._v("$emit: 子组件触发父组件传递的事件")])]),e._v(" "),v("h3",{attrs:{id:"_2-组件间通讯-自定义事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-组件间通讯-自定义事件"}},[e._v("#")]),e._v(" 2. 组件间通讯 - 自定义事件")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("父子组件通讯：参考知识点"),v("strong",[e._v("1. props 和 $emit")])])]),e._v(" "),v("li",[v("p",[e._v("兄弟组件通讯：自定义事件")]),e._v(" "),v("blockquote",[v("p",[e._v('event.$emit("doSomething", params)\t// 触发')]),e._v(" "),v("p",[e._v('event.$on("doSomething", this.doSomething)\t//接收')]),e._v(" "),v("p",[e._v("// 解绑。及时销毁，避免造成内存泄漏")]),e._v(" "),v("p",[e._v('event.$off("doSomething", this.doSomething)')])])])]),e._v(" "),v("h3",{attrs:{id:"_3-组件生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-组件生命周期"}},[e._v("#")]),e._v(" 3. 组件生命周期")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("单个组件")]),e._v(" "),v("blockquote",[v("p",[v("em",[v("strong",[e._v("挂载阶段")])])]),e._v(" "),v("ol",[v("li",[e._v("beforeCreate")]),e._v(" "),v("li",[e._v("created    // vs "),v("strong",[e._v("mounted")]),e._v(" vue实例初始化完成，但页面还没有开始渲染")]),e._v(" "),v("li",[e._v("beforeMount")]),e._v(" "),v("li",[e._v("mounted  // vs "),v("strong",[e._v("created")]),e._v(" 页面已经渲染完成，可以操作 dom")])]),e._v(" "),v("p",[v("em",[v("strong",[e._v("更新阶段")])])]),e._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[e._v("beforeUpdate")]),e._v(" "),v("li",[e._v("updated")])]),e._v(" "),v("p",[v("em",[v("strong",[e._v("销毁阶段")])])]),e._v(" "),v("ol",{attrs:{start:"7"}},[v("li",[e._v("beforeDestroy  // 解除绑定，销毁子组件以及事件监听器")]),e._v(" "),v("li",[e._v("destroyed")])])])]),e._v(" "),v("li",[v("p",[e._v("父子组件")]),e._v(" "),v("blockquote",[v("p",[e._v("初始化实例（created）：父 --\x3e 子")]),e._v(" "),v("p",[e._v("页面渲染（mounted）：子 --\x3e 父")]),e._v(" "),v("p",[e._v("父beforeCreate => 父created => 父beforeMount => 子beforeCreate => 子created => 子beforeMount => 子mounted => 父mounted")]),e._v(" "),v("p",[e._v("更新实例（beforeUpdate）：父 --\x3e 子")]),e._v(" "),v("p",[e._v("更新完成（updated）：子 --\x3e 父")]),e._v(" "),v("p",[e._v("父beforeUpdate => 子beforeUpdate => 子updated => 父updated")]),e._v(" "),v("p",[e._v("销毁子组件（beforeDestroy）：父beforeUpdate => 子beforeDestroy => 子destroyed => 父updated")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);