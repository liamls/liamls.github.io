export default defineNuxtConfig({
    mode: 'spa',
    router: {
    base: '/liamls.github.io/'
  },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: 'Portfolio - Liam',
            meta: [
                {name: 'description', content: 'Mon portfolio'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/assets/icone.png'}
            ]
        }
    }
})
