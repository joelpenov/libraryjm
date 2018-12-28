const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');

const { PORT } = process.env;
const ROOT = __dirname;
const MODULES = 'node_modules';
const server = express();
// ./node_modules/.bin/eslint  app.js --fix
server.use(morgan('tiny'));

server.use(favicon(path.join(ROOT, 'favicon.ico')));

server.use(express.static(path.join(ROOT, 'static')));
server.use('/css', express.static(path.join(ROOT, `${MODULES}/bootstrap/dist/css/`)));
server.use('/js', express.static(path.join(ROOT, `${MODULES}//bootstrap/dist/js/`)));
server.use('/js', express.static(path.join(ROOT, `${MODULES}//jquery/dist/`)));

server.set('views', path.join('./src/views'));
server.set('view engine', 'ejs');

server.get('/', (req, resp) => {
  debug(`${req.method} ${req.url}`);
  resp.render('index', { names: ['Ariel', 'Manolo', 'Elvis'], title: 'Cuesta Library' });
});

server.listen(PORT, () => {
  debug(`Serving app on port ${chalk.green(PORT)}`);
});
