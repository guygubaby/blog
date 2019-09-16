module.exports = {
  title: 'Hi there',  // 设置网站标题
  description : 'wine and rose',
  base : '/blog/',
  themeConfig : {
    // sidebar: 'auto',
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',


    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'guygubaby/blog',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'source code',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'guygubaby/blog',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'blog',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我改善此页面！',


    nav : [
      {
        text: 'docker',
        ariaLabel: 'docker label',
        items: [
          { text: 'mongodb', link: '/docker/mongo.md' },
          // { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'github', link: 'https://github.com/guygubaby' },
    ],
    sidebar: [
      {
        title: 'welcome',   // 必要的
        path: '/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/docker/'
        ]
      },
    ]
  }
}