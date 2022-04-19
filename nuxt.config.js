export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'yilan',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: '~/components/Loading.vue',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '~assets/style/main.css',
    'element-ui/lib/theme-chalk/index.css',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/api'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true, // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api': {
      target: 'http://82.157.144.230',
      changeOrigin: true,
      // pathRewrite: {

      // }
    },
  },
  styleResources: {
    scss: ['~assets/style/global.scss'], // scss入口文件
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: [/^element-ui/],
    babel: {
      plugins: [
        [
          'component',
          { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' },
        ],
      ],
    },
    vendor: ['axios'],
  },
}
