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
        title: 'welcome',
        path: '/',
        collapsable: true,
        sidebarDepth: 1,
      },
      {
        title: 'docker',
        path: '/docker/', 
        collapsable: true, 
        children:[
          { 
            title:'mongodb 数据迁移',
            path: '/docker/mongo'
          },
          {
            title:'docker-compose 例子',
            path: '/docker/compose'
          }
        ]
      },
      {
        title:'js',
        path:'/js/',
        collapsable: true,
        children:[
          {
            title: 'dataset兼容问题',
            path:'/js/dataset'
          },
          {
            title: '浏览器下载兼容',
            path: '/js/download'
          }
        ]
      },
      {
        title:'python',
        path:'/python/',
        collapsable: true,
        children:[
          {
            title: 'anaconda tutorial',
            path:'/python/anaconda'
          },
          {
            title: 'pandas',
            path:'/python/pandas'
          }
        ]
      },
      {
        title:'golang',
        path:'/golang/',
        collapsable: true,
        children:[
          {
            title: 'go mod with goland',
            path:'/golang/gomod'
          },
        ]
      }
    ]
  }
}
