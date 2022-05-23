const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true
})
module.exports = withNextra({
  images: {
    domains:[
      'pbs.twimg.com',
      'www.typelit.io',
      'upload.wikimedia.org',
      'avatars.githubusercontent.com'
    ],
  }
})
