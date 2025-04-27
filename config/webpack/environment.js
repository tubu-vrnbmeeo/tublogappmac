const { environment } = require('@rails/webpacker')

const babelLoader = environment.loaders.get('babel')
babelLoader.include = [
  /app\/javascript/,
  /node_modules\/@hotwired/
]

module.exports = environment
