export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc7021c95ff5fbf63477289',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vv95iazy',
                  apiId: '9e058958-e0b5-4308-842f-64dd165fde76'
                },
                {
                  buildHookId: '5dc7021c9c414fee835eb876',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-u51jqwdp',
                  apiId: '61f09cf7-aec6-48ac-a227-46e54907f4fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mailermanx/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-u51jqwdp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
