export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mali Wspaniali',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'description', content: 'Prywatne Przedszkole "Mali Wspaniali" w Częstkowie. Otwarcie już wkrótce!' },
      { name: 'keywords', content: 'Mali Wspaniali, przedszkole, prywatne, niepubliczne, Częstkowo' },
      { name: 'author', content: 'Ewa Naczk' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/fragment.js',
      ssr: true,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Mali Wspaniali',
      author: 'Ewa naczk',
    },
    manifest: {
      name: 'Prywatne Przedszkole "Mali Wspaniali" w Częstkowie',
      short_name: 'Mali Wspaniali',
      description: 'Prywatne Przedszkole "Mali Wspaniali" w Częstkowie',
      lang: 'pl',
    },
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512],
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    styleResources: {
      scss: './styles/_*.scss',
    },
    extractCSS: true,
  },
}
