// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Spenik Law',
  icon: './src/favicon.png',
  plugins: [],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    config.output.globalObject= this
    config.devtool = 'source-map'
    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/*.yaml',
        typeName: 'PageContent',
        yaml: {}
      }
    },
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: '1NMi6jLNIs8SlIYCZrjt4Qtt'
        },
        version: 'published',
        typeName: 'Storyblok'
      }
    }
  ],
  transformers: {
    yaml: {}
  },
  siteUrl: 'https://spenik.fueledonbacon.com'
}
