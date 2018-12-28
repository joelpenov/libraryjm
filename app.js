var express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');

const PORT = 3000;
const ROOT = __dirname;
var server = express();

server.use(morgan('tiny'));

server.use(favicon(path.join(ROOT, 'favicon.ico')));
server.use(express.static(path.join(ROOT, 'static')));
server.use('/css', express.static(path.join(ROOT, 'node_modules/bootstrap/dist/css/')));
server.use('/js', express.static(path.join(ROOT, 'node_modules/bootstrap/dist/js/')));
server.use('/js', express.static(path.join(ROOT, 'node_modules/jquery/dist/')));

server.get('/', function(req, resp){
    debug(`${req.method} ${req.url}`)
    resp.sendFile(path.join(__dirname, 'views','index.html'));
});

server.listen(3000, function(){
    debug(`Serving app on port ${chalk.green(PORT)}`);
})