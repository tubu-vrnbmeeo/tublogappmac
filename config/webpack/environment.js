const { environment } = require('@rails/webpacker')

const babelLoader = environment.loaders.get('babel')
babelLoader.include = [
  /app\/javascript/,
  /node_modules\/@hotwired/
]

const customConfig = {
  resolve: {
    // Use alias with empty objects to provide "empty modules"
    alias: {
      dgram: require.resolve("./polyfills/empty-module.js"),
      fs: require.resolve("./polyfills/empty-module.js"),
      net: require.resolve("./polyfills/empty-module.js"),
      tls: require.resolve("./polyfills/empty-module.js"),
      child_process: require.resolve("./polyfills/empty-module.js")
    }
  }
};

environment.config.delete('node.dgram')
environment.config.delete('node.fs')
environment.config.delete('node.net')
environment.config.delete('node.tls')
environment.config.delete('node.child_process')

environment.config.merge(customConfig);

module.exports = environment
