export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'campingtoilette.shop',
        htmlAttrs: {
            lang: 'de'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css' }
        ],
        script: [
            { type: 'text/javascript', src: 'https://code.jquery.com/jquery-3.4.1.min.js', body: true },
            { type: 'text/javascript', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js', body: true },
            { type: 'text/javascript', src: '/assets/js/main.js', body: true },
            {
                src: 'https://www.googletagmanager.com/gtag/js?id=G-45KJTXLQX0',
                async: true,
            },
            {
                innerHTML: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-45KJTXLQX0');
                `,
            },
        ],
        __dangerouslyDisableSanitizersByTagID: {
            // this is to prevent Nuxt from sanitizing the innerHTML
            'google-gtag': ['innerHTML'],
        },
    },

    generate: {
        dir: 'docs'
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [

        // '@static/assets/css/animate/animate.min.css',
        '@static/assets/css/bootstrap.min.css',
        '@static/assets/css/style.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "@/plugins/jsonld.js"
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        'nuxt-purgecss',
        '@nuxtjs/google-fonts',
        '@nuxt/image',
        '@/modules/sitemapRouteGenerator',
        '@nuxtjs/redirect-module'
    ],

    purgeCSS: {
        // your settings here
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxtjs/redirect-module',
    ],

    // Sitemap
    sitemap: {
        hostname: 'https://www.campingtoilette.shop',
        gzip: true
    },

    // @nuxt/image
    image: {
        // Generate images to `/_nuxt/image/file.png`
        staticFilename: '[publicPath]/images/[name][ext]'
    },

    // redirect module rules
    redirect: [
        { from: '^/blog/campingtoiletten-vergleich-2022/$', to: '/blog/campingtoiletten-vergleich-2023/', statusCode: 301 }
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    googleFonts: {
        display: 'swap',
        base64: true,
        download: true,
        families: {
            Heebo: {
                wght: [400, 500, 600]
            },
            Nunito: {
                wght: [600, 700, 800]
            },
            Roboto: true,
            'Josefin+Sans': true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100]
            },
        }
    },
    router: {
        trailingSlash: true
    }
}