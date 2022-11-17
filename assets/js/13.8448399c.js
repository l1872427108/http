(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{427:function(t,a,s){"use strict";s.r(a);var r=s(62),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"http-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-1"}},[t._v("#")]),t._v(" HTTP/1")]),t._v(" "),s("p",[t._v("据 NetCraft 公司统计，全球至少有 16 亿个网站、2亿多个独立域名，而这个庞大网络世界的底层运转机制就是 HTTP。")]),t._v(" "),s("p",[t._v("生活中随处可见，手机上网，短视频，听音乐，玩游戏，都是由 HTTP 在服务。")]),t._v(" "),s("h3",{attrs:{id:"http-0-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-0-9"}},[t._v("#")]),t._v(" HTTP/0.9")]),t._v(" "),s("p",[t._v("20世界90年代，网络上绝大多数的资源都是纯文本。")]),t._v(" "),s("p",[t._v("结构比较简单，为了便于服务器和客户端的处理，采用纯文本格式。最初设想系统里的文本都是只读的，所以只允许用‘GET’从服务器获取HTML文档。响应完成后立即断开。")]),t._v(" "),s("p",[t._v("HTTP/0.9 虽然简单，但是作为一个原型，充分验证了 Web 服务的可行性，“简单”是它的优点，蕴含了进化和扩展的可能性。")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("一个完整的请求过程")])])]),t._v(" "),s("ul",[s("li",[t._v("HTTP基于TCP，所以要根据IP、端口和服务器建立TCP连接(三次握手)。")]),t._v(" "),s("li",[t._v("建立好之后，发送GET请求，GET /index.html")]),t._v(" "),s("li",[t._v("服务器接收到之后，读取对应的 HTML 文件，并将数据以 ASCII 字符返回给客户端")]),t._v(" "),s("li",[t._v("HTML文档传输完成后，断开连接")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("code",[t._v("特点")])])]),t._v(" "),s("ul",[s("li",[t._v("只有请求行，没有HTTP请求头和请求体")]),t._v(" "),s("li",[t._v("服务器没有返回头信息，服务端并不需要告诉客户端太多信息，只需要返回数据就可以了")]),t._v(" "),s("li",[t._v("第三个是返回的文件是以ASCII字符流传输的。")])]),t._v(" "),s("h3",{attrs:{id:"http-1-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0"}},[t._v("#")]),t._v(" HTTP/1.0")]),t._v(" "),s("p",[t._v("浏览器不单单是展示HTML文件了，还包括JavaScript、CSS、图片、音频、视频等不同文件。支持多种类型的文件下载是 HTTP/1.0 的一个诉求。并且文件格式也不仅局限于 ASCII 编码，还包含其他类型编码的文件。")]),t._v(" "),s("p",[t._v("HTTP/1.0 引入了请求头和相应头，以 Key-Value 形式保存。")]),t._v(" "),s("ol",[s("li",[t._v("面对问题")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("浏览器需要知道服务器返回的数据是什么类型，然后浏览器才能根据不同的数据类型做针对性的处理。")])]),t._v(" "),s("li",[s("code",[t._v("为了减轻传输性能，服务器会对数据进行压缩再传输，所以浏览器需要知道服务器压缩的方法。")])]),t._v(" "),s("li",[s("code",[t._v("为了支持国际化，服务器需要对不同的地区提供不同的语言版本，需要浏览器告诉服务器它想要什么样的语言版本的页面。")])]),t._v(" "),s("li",[s("code",[t._v("各种不同类型文件，浏览器为了能够准确的读取文件, 浏览器需要知道文件的编码类型")])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("解体问题\n针对这些问题，HTTP/1.0 通过请求头和相应头来进行协商。在发起请求时会通过 HTTP 请求头告诉服务器它期待服务器返回什么"),s("code",[t._v("类型的文件")]),t._v("、"),s("code",[t._v("采取什么形式的压缩")]),t._v("、"),s("code",[t._v("提供什么语言以及文件的编码。")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" accept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html 期待返回html类型的文件\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" accept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gizp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deflate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" br  期待服务器采用gzip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("defate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("br压缩中一种\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" accept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ISO")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8859")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" 期待返回文件编码是 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTF")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" accept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zh 期待页面的优先语言是中文\n")])])]),s("p",[t._v("服务器收到之后，根据请求头的信息来准备响应数据。浏览器根据实际情况返回相应头")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" br  服务器采用的压缩方法\ncontent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTF")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("  服务器返回html文件；编码格式"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTF")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])])]),s("p",[t._v("浏览器使用 br 来解压文件，再按照 UTF-8 的编码格式来处理文件，最后解析HTML文件。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("其他新增")])]),t._v(" "),s("ul",[s("li",[t._v("服务器可能无法处理，或者出错，需要告诉浏览器情况，引入了状态码。通过响应行来通知浏览器的。")]),t._v(" "),s("li",[t._v("为了减轻服务器的压力，在 HTTP/1.0 中提供了 Cache 机制, 用来缓存已经下载过的数据。")]),t._v(" "),s("li",[t._v("服务器需要统计客户端的基础信息，比如 Windows 和 macOS 的用户数量分别是多少，所以 HTTP/1.0 的请求头中还加入了用户代理的字段")]),t._v(" "),s("li",[t._v("增加了 HEAD、POST 等新方法；")])])])}),[],!1,null,null,null);a.default=e.exports}}]);