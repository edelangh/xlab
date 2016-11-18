var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = process.env.PORT || 8080;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  proxy: {
    '/api/*': {
      target: 'localhost:3000',
      secure: false
    }
  }
}).listen(port, function(err, result) {
  if (err) throw err;
  console.log("Listening at http://localhost:" + port);
});
