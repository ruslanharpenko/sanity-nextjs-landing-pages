export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60f1d4935ea995744d787d61',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n2p88u7j',
                  apiId: 'f3e061dc-80ee-4afe-bdb0-b3dae2777ce7'
                },
                {
                  buildHookId: '60f1d494ba07e37c1029f1f1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kp8qqypo',
                  apiId: 'f98ba3ca-5735-45d9-aa33-b3fb5fe5b90c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ruslanharpenko/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kp8qqypo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
