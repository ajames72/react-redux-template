import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import opn from 'opn';

/*eslint-disable no-console*/
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res){
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(error) {
  if(error) {
    console.log(error);
  } else {
    opn(`http://localhost:${port}`, {app: 'google chrome'});
  }
});
