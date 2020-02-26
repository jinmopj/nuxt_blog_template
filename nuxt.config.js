const baseUrl = process.env.BASE_URL || 'https://xxx.com'
const baseName = process.env.BASE_NAME || 'xxx'
const startYear = process.env.startYear || '2019'
const baseDescription = process.env.BASE_DESCRIPTION || 'サイトのディスクリプション'
const baseKeywords = process.env.BASE_KEYWORDS || 'キーワード1, キーワード2, キーワード3, キーワード4, キーワード5'
const baseGoogleAnalytics = process.env.BASE_GOOGLE_ANALYTICS || 'UA-XXXXXX-X'
const githubUrl = process.env.GITHUB_URL || 'https://github.com/xxx'
const twitterUrl = process.env.TWITTER_URL || 'https://twitter.com/xxx'

const ogImage = process.env.OG_IMAGE || 'xxx.png'
const iconImage = process.env.ICON_IMAGE || 'favicon.ico'
const AppleTouchIconImage = process.env.APPLE_TOUCH_ICON_IMAGE || 'apple-touch-icon.png'

const cloudinaryDomain = process.env.CLOUNDINARY_DOMAIN || 'https://res.cloudinary.com'
const cloundName = process.env.CLOUND_NAME || 'xxxxxx'
const cloudinary_param = process.env.CLOUNDINARY_PARAM || 'w_auto,q_auto:eco,f_auto'
const imagePathId = process.env.IMAGE_PATH_ID || 'v1'
const ogDirectoryPath = process.env.OG_DIRECTORY_PATH || 'xxxxxx/xxxxxx'
const faviconDirectoryPath = process.env.FAVICON_DIRECTORY_PATH || 'xxxxxx/xxxxxx'

const ogImagePath = `${ cloudinaryDomain }/${ cloundName }/${ cloudinary_param }/${ imagePathId }/${ ogDirectoryPath }/${ ogImage }`
const iconPath = `${ cloudinaryDomain }/${ cloundName }/${ cloudinary_param }/${ imagePathId }/${ faviconDirectoryPath }/${ iconImage }`
const AppleTouchIconPath = `${ cloudinaryDomain }/${ cloundName }/${ cloudinary_param }/${ imagePathId }/${ faviconDirectoryPath }/${ AppleTouchIconImage }`

const { sourceFileArray } = require('./contents/posts/summary.json')

const sourceFileNameToUrl = filepath => {
  const deleteExt = filepath.replace('.md', '')
  const fileName = deleteExt.split('/')[deleteExt.split('/').length - 1]
  const splitArray = fileName.split('_')
  return `/posts/${splitArray[0]}/${splitArray[1]}`
}
const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    return sourceFileNameToUrl(sourceFileName)
  })
  callback(null, routes)
}

export default {
  mode: 'universal',
  head: {
    htmlAttrs: { prefix: 'og: http://ogp.me/ns#' },
    htmlAttrs: { lang: 'ja' },
    title: baseName,
    titleTemplate: '%s - ' + baseName,
    meta: [
      { charset: 'UTF-8'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: baseDescription },
      { hid: 'keywords', name: 'keywords', content: baseKeywords },
      { hid: 'og:site_name', property: 'og:site_name', content: baseName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: baseName },
      { hid: 'og:description', property: 'og:description', content: baseDescription },
      { hid: 'og:image', property: 'og:image', content: ogImagePath },
    ],
    link: [
      /* favicon */
      { rel: 'icon', type: 'image/x-icon', href: iconPath },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: AppleTouchIconPath },
    ]
  },
  loading: { color: '#fff' },
  css: [
    'normalize.css',
    { src: '~/assets/css/common.scss', lang: 'scss' },
    { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' },
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    ["@nuxtjs/google-analytics", {
      id: baseGoogleAnalytics
    }]
  ],
  styleResources: {
    scss: [
      '~/assets/css/_mixins.scss'
      ]
  },
  env: {
    baseUrl: baseUrl,
    baseName: baseName,
    startYear: startYear,
    githubUrl: githubUrl,
    twitterUrl: twitterUrl,
    cloudinaryDomain: cloudinaryDomain,
    cloundName: cloundName,
    cloudinary_param: cloudinary_param,
    imagePathId: imagePathId,
    ogDirectoryPath: ogDirectoryPath,
  },
  markdownit: {
    preset: 'default',
    injected: true,
    breaks: true,
    html: true,
  },
  generate: {
    routes: generateDynamicRoutes
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
    exclude: [
      '/issues'
    ],
    routes: generateDynamicRoutes
  },
  build: {
    extend(config, ctx) {
    }
  }
}
