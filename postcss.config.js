const purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []; //eslint-disable-line
  }
}

const plugins = [
  require('tailwindcss'),
  require('autoprefixer')
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    purgecss({
      content: [
        './public/**/*.html',
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx'
      ],
      whitelist: [
        'html',
        'body'
      ],
      whitelistPatternsChildren: [
        /^code/,
        /^pre/,
        /^token/,
        /^(?!cursor-move).+-move$/,
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^router-link(|-exact)-active$/
      ],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: [
            'html',
            'vue'
          ]
        }
      ]
    })
  )
}

module.exports = {
  plugins
}
