const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const express = require('express');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(compression());
app.use(cors());

const devMiddlewareInstance = devMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
});

app.use(devMiddlewareInstance);

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('dist'));
app.use(express.static('node_modules'));

app.use('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath,'index.html');
  devMiddlewareInstance.waitUntilValid(() => {
    compiler.outputFileSystem.readFile(filename, function(err, result){
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });
});

app.listen(3010, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Server running on http://localhost:3010');
  }
});