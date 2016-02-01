var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var appServer = require('./lib/appServer');

console.log('==========================');
console.log('config.devServer', config.devServer);
console.log('==========================');

var devServer = new WebpackDevServer(webpack(config), config.devServer);

// configure underlying express
appServer.configure(devServer.app);

devServer.listen(config.port, function(err) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:' + config.port);
        console.log('Url: http://localhost:' + config.port + '/webpack-dev-server/');
    });
