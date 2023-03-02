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
                {name: 'description', content: 'My portfolio website'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/assets/gluten-free.png'}
            ]
        }
    }
})
