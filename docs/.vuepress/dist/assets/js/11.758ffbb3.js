(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{508:function(e,t,r){"use strict";r.r(t);var a=r(6),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("hr"),e._v(" "),r("p",[e._v("title: linux begin\ndate: 2021-02-04\ncategories:")]),e._v(" "),r("ul",[r("li",[e._v("devops\ntags:")]),e._v(" "),r("li",[e._v("linux")])]),e._v(" "),r("hr"),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/document/product/213/38237",target:"_blank",rel:"noopener noreferrer"}},[e._v("服务器安装nodejs nvm"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("使用")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("https://npm.taobao.org/mirrors/node/latest-v15.x/node-v15.4.0-linux-x64.tar.xz 下载npm\n")])])]),r("p",[r("a",{attrs:{href:"https://yq.aliyun.com/articles/744961",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx部署"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1667550",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker教程"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("dev.to上有很多")]),e._v(" "),r("p",[e._v("精通linux")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://dev.to/akanksha_9560/docker-for-frontend-developers-1dk5",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker for frontend"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package",target:"_blank",rel:"noopener noreferrer"}},[e._v("装win子系统"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("安装报错\n--allowing\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("删除docker\nrm dockerid\n或者强行删除docker目录\nrm -rf /var/lib/docker\n\n使用这个命令会破坏docker目录\n之后需要在该目录重新生成docker文件，并在里面新建tmp文件夹\nhttps://github.com/moby/moby/issues/19566\n")])])]),r("p",[e._v("vim 编辑")]),e._v(" "),r("p",[e._v("esc推出编辑")]),e._v(" "),r("p",[e._v(":wq 保存并退出")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/sinat_31465609/article/details/104105123",target:"_blank",rel:"noopener noreferrer"}},[e._v("dockerfile下载慢"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[e._v("systemctl restart docker\n重启\n 不行再设置dns\n")])])]),r("p",[e._v("vim i 进入输入模式")]),e._v(" "),r("p",[e._v("esc进入命令模式")]),e._v(" "),r("p",[e._v("cp拷贝文件")]),e._v(" "),r("p",[e._v("docker rm 是删除container的，需要先运行container 再停止container,最后删除")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker run -p 4000:80 --name SOMENAME friendlyhello\n\n# container stop\ndocker container stop SOMENAME\n\n# container removal\ndocker rm -f SOMENAME\n")])])]),r("p",[e._v("docker image rm imageName:tag是删除image的")]),e._v(" "),r("p",[e._v("docker push 需要先新建reposity，再重新设置tag, tag名与dockerhub一致")]),e._v(" "),r("p",[e._v("dockerhub太慢")]),e._v(" "),r("p",[e._v("有http代理解决得办法")]),e._v(" "),r("p",[e._v("https://www.cnblogs.com/36bian/p/12761680.html")]),e._v(" "),r("p",[e._v("我使用ucloud UHub代替")]),e._v(" "),r("p",[e._v("https://docs.ucloud.cn/uhub/guide")]),e._v(" "),r("p",[e._v("注意uhub的tag与dockerhub的tag不一样")]),e._v(" "),r("p",[e._v("dockerhub")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("username/imagename:tag\n")])])]),r("p",[e._v("uhub")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("uhub.service.ucloud.cn/{已创建镜像仓库}/{镜像}:tag\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);