(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{512:function(e,t,r){"use strict";r.r(t);var n=r(6),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667550",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker1"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667553",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker2"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667555",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker3"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667560",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker4"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667562",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker5"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667563",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker6"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667564",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker7"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667565",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker8"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667566",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker9"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667568",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker11"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667569",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker12"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667571",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker13"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("docker run --name nginx "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-p "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v(":80 -p "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v(":443 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--mount "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("bind,src"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/nginx/conf.d/default.conf,dst"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/nginx/conf.d/default.conf "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--mount "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("bind,src"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/nginx/conf/nginx.conf,dst"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/nginx/nginx.conf "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--mount "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("bind,src"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/nginx/cert,dst"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/nginx/cert "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--mount "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("bind,src"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/pre/home,dst"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/pre/home "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--mount "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("bind,src"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/pre/blog,dst"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/pre/blog "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--mount "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("bind,src"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/pre/note,dst"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/pre/note "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--mount "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("bind,src"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/pre/box,dst"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/pre/box "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--mount "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("bind,src"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/nginx/log,dst"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/var/log "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-d nginx\n\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br")])])])}),[],!1,null,null,null);t.default=s.exports}}]);