(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{221:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("blockquote",[t("p",[a._v("如果喜欢大而全就 "),t("a",{attrs:{href:"https://www.anaconda.com/download/#macos",target:"_blank",rel:"noopener noreferrer"}},[a._v("anaconda"),t("OutboundLink")],1),a._v(" ,精简就 "),t("a",{attrs:{href:"https://docs.conda.io/en/latest/miniconda.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("miniconda"),t("OutboundLink")],1)])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("我此处安装的是 "),t("code",[a._v("miniconda")])])]),a._v(" "),t("li",[t("p",[a._v("推荐下载"),t("code",[a._v(".pkg")]),a._v("的比较省事儿，不要下载 "),t("code",[a._v(".sh")]),a._v("，个人建议")])])]),a._v(" "),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),t("ol",[t("li",[a._v("验证安装成功")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda -V\n")])])]),t("p",[a._v("终端上将会以 "),t("code",[a._v("conda")]),a._v(" 版本号 的形式显示当前安装conda的版本号。如： "),t("code",[a._v("conda 4.7.12")])]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("更新conda至最新版本")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda update conda\n")])])]),t("p",[a._v("当较新的版本可以用于升级时，终端会显示 "),t("code",[a._v("Proceed ([y]/n)?")]),a._v(" ，此时输入 y 即可进行升级。")]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("卸载")])]),a._v(" "),t("p",[a._v("① Linux 或 macOS")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/anaconda2\n")])])]),t("p",[a._v("或")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/anaconda3\n")])])]),t("p",[a._v("或")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/miniconda3\n")])])]),t("p",[a._v("② Windows")]),a._v(" "),t("blockquote",[t("p",[a._v("控制面板卸载")])]),a._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[a._v("环境")]),a._v(" "),t("ol",[t("li",[a._v("创建")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda create -n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("env-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("python"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pkg-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ul",[t("li",[t("p",[t("code",[a._v("env-name")]),a._v(" 即创建的环境名。建议以英文命名，且不加空格，名称两边不加尖括号")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("pkg-names")]),a._v(" 即安装在环境中的包名。名称两边不加尖括号")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("[python=3.7]")]),a._v(" 可以指定环境的python版本(可选)")])])]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("使用")])]),a._v(" "),t("p",[a._v("① Linux 或 macOS")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" activate env-name\n")])])]),t("p",[a._v("② Windows")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("activate env-name\n")])])]),t("ul",[t("li",[t("p",[a._v("如果创建环境后安装Python时没有指定Python的版本，那么将会安装与Anaconda版本相同的Python版本，即如果安装Anaconda第2版，则会自动安装Python 2.x；如果安装Anaconda第3版，则会自动安装Python 3.x。")])]),a._v(" "),t("li",[t("p",[a._v("当成功切换环境之后，在该行行首将以“(env_name)”或“[env_name]”开头。其中，“env_name”为切换到的环境名。如：在macOS系统中执行 source active python2 ，即切换至名为“python2”的环境，则行首将会以(python2)开头。")])])]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("退出")])]),a._v(" "),t("p",[a._v("① Linux 或 macOS")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" deactivate\n")])])]),t("p",[a._v("② Windows")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("deactivate\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("查看所有环境")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" list\n")])])]),t("blockquote",[t("p",[a._v("just like this")])]),a._v(" "),t("pre",[t("code",[a._v(" - base                  *  //miniconda3\n - conda-learn              //miniconda3/envs/conda-learn\n")])]),a._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[a._v("复制环境")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda create -n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("new-env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --clone "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("old-env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("blockquote",[t("p",[t("code",[a._v("conda create --name py2 --clone python2")])])]),a._v(" "),t("pre",[t("code",[a._v(" 即为克隆名为“python2”的环境，克隆后的新环境名为“py2”。此时，环境中将同时存在“python2”和“py2”环境，且两个环境的配置相同。\n")])]),a._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[a._v("删除环境")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda remove -n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("env-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --all\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[a._v("包管理")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("查找")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda search "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pkg-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("查看")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda list\n")])])]),t("blockquote",[t("p",[a._v("执行上述命令后将在终端显示当前环境已安装包的包名及其版本号。")])])]),a._v(" "),t("li",[t("p",[a._v("安装包")]),a._v(" "),t("p",[a._v("① 在指定环境中安装包")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("env-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pkg-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("② 在当前环境中安装包")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pkg-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ul",[t("li",[t("p",[a._v("pip")]),a._v(" "),t("blockquote",[t("p",[a._v("你也可以使用pip来安装包")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("tips")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("pip只是包管理器，无法对环境进行管理。因此如果想在指定环境中使用pip进行安装包，则需要先切换到指定环境中，再使用pip命令安装包。")])]),a._v(" "),t("li",[t("p",[a._v("pip无法更新python，因为pip并不将python视为包。")])]),a._v(" "),t("li",[t("p",[a._v("pip可以安装一些conda无法安装的包；conda也可以安装一些pip无法安装的包。因此当使用一种命令无法安装包时，可以尝试用另一种命令。")])])])])])])])]),a._v(" "),t("li",[t("p",[a._v("卸载包")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda remove -n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("env-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pkg-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载指定环境中的包")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\nconda remove "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pkg-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载当前环境中的包")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("更新包")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda update --all "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新所有包")]),a._v("\nconda update "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pkg-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新指定包")]),a._v("\n")])])])])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);