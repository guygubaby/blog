module.exports = {
  title: 'Hi there',  // 设置网站标题
  description : 'guygubaby blog',
  base : '/blog/',
  themeConfig : {
    // sidebar: 'auto',
    // displayAllHeaders: true,
    lastUpdated: '上次更新',
    repo: 'guygubaby/blog',
    repoLabel: '源码',
    docsRepo: 'guygubaby/blog',
    docsDir: 'blog',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我改善此页面！',

    nav : [
      // {
      //   text: 'docker',
      //   ariaLabel: 'docker label',
      //   items: [
      //     // { text: 'mongodb', link: '/docker/mongo.md' },
      //     // { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // },
      { text: 'github', link: 'https://github.com/guygubaby' },
    ],
    sidebar: [
      {
        title: 'welcome',   // 必要的
        path: '/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: 'docker',   // 必要的
        // path: '/docker/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        children:[
          { 
            title:'mongodb',
            path: '/docker/mongo'
          }
        ]
      },
    ]
  }
}
