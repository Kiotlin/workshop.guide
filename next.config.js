const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true
})
module.exports = withNextra({
  images: {
    domains:[
      'url-shortener.ri1ken.workers.dev',
    ],
  }
})
