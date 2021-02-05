module.exports = {
    title: 'Note Clark Cui',
    description: 'This is a notebook of Clark Cui',
    theme: 'reco',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
      ],
    themeConfig: {
       type: 'blog',
        // 博客配置
       blogConfig: {
         category: {
           location: 2,     // 在导航栏菜单中所占的位置，默认2
           text: 'Category' // 默认文案 “分类”
         },
         tag: {
           location: 3,     // 在导航栏菜单中所占的位置，默认3
           text: 'Tag'      // 默认文案 “标签”
         },
         socialLinks: [     // 信息栏展示社交信息
           { icon: 'reco-github', link: 'https://github.com/clark-cui' },
         ],
       },
       nav: [
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
       ],
       valineConfig: {
            appId: 'pKTN5dFa0ohKRGA7nchDNbVs-gzGzoHsz',// your appId
            appKey: 'Y7mnxxmdpkHYRlr5kihUjRkJ', // your appKey
       },
        // 备案
       record: '滇ICP备20001977号',
       recordLink: 'http://beian.miit.gov.cn/',
       cyberSecurityRecord: '公安部备案文案',
       cyberSecurityLink: '公安部备案指向链接',
       // 项目开始时间，只填写年份
       startYear: '2018',
       //作者
        author: 'clark-cui',
        //头像
         authorAvatar: '/avatar.jpg',
         //代码主题
          codeTheme: 'tomorrow',
          //开启子侧边栏
          subSidebar: 'auto'

     }
  }