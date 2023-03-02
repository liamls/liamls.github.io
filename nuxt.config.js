export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: 'Portfolio - Liam',
            meta: [
                {name: 'description', content: 'My portfolio website'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico'}
            ]
        }
    }
})
