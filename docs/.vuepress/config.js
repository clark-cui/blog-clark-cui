module.exports = {
  host: "0.0.0.0", // 生成网页地址（本地调试使用）
  port: "22333", // 生成网页端口（本地调试使用）
  title: 'Blog Clark Cui',
  description: '吹水的地方', // meta 中的描述文字，用于SEO
  theme: 'reco',
  head: [
    ["link", {
      rel: "icon",
      href: "/blog.svg"
    }], //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }]
  ],
  themeConfig: {
    type: 'blog',
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      },
      socialLinks: [ // 信息栏展示社交信息
        {
          icon: 'reco-github',
          link: 'https://github.com/clark-cui'
        },
        {
          icon: "reco-mail",
          link: "mailto:rongchuancui@gmail.com"
        },
        {
          icon: "reco-twitter",
          link: "https://twitter.com/qingshuihe1"
        },
      ],
    },
    nav: [
      //导航栏设置
      {
        text: "主页",
        link: "/",
        icon: "reco-home"
      }, {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: "订阅",
        link: "http://blog.clark.top/rss.xml",
        icon: "reco-rss"
      },
    ],
    valineConfig: {
      appId: 'pKTN5dFa0ohKRGA7nchDNbVs-gzGzoHsz', // your appId
      appKey: 'Y7mnxxmdpkHYRlr5kihUjRkJ', // your appKey
    },
    // 备案
    record: '滇ICP备20001977号',
    recordLink: 'http://beian.miit.gov.cn/',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2018',
    //作者
    author: 'clark-cui',
    //头像
    authorAvatar: '/avatar.jpg',
    //代码主题
    codeTheme: 'okaidia',
    //开启子侧边栏
    subSidebar: 'auto',
    lastUpdated: "最后更新时间", // string | boolean
    smooth: "true", //平滑滚动
  },
  //代码显示行号
  markdown: {
    lineNumbers: true,
  },
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 插件
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-rss", //RSS插件
      {
        site_url: "http://blog.clark-cui.top", //网站地址
        copyright: "clark-cui", //版权署名
      },
    ],
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ["vuepress-plugin-code-copy"], //一键复制代码插件
   
  ],
}