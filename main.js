process.chdir(__dirname);

var express = require('express'),
    expressify = require('expressify'),
    mongoose = require('mongoose'),
    contexts = expressify.contexts,
    bodyParser = require('body-parser'),
    sitemap = require('express-sitemap'),
    i18n = require('i18n');

var config = require('config');

//App instance initialization
var app = expressify.init({
    basepath: __dirname,
    express: express
});

mongoose.connect('mongodb://' + config.mongo.host + '/' + config.mongo.database);

//Initializing app configurations
contexts.init(__dirname + '/globals.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(require('compression')());

i18n.configure({
    locales: ['es', 'en'],
    defaultLocale: 'es',
    cookie: 'fkci18n4b8',
    directory: process.cwd() + '/locales',
    objectNotation: false
});

app.use(i18n.init);

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

if (process.env.NODE_ENV != 'production') {
    var stylus = require('stylus'),
        nib = require('nib');
    var compile = function(str, path) {
        return stylus(str)
            .set('filename', path)
            .use(nib())
    };
    app.use(stylus.middleware({
        src: __dirname + '/app/assets',
        dest: __dirname + '/public',
        compile: compile,
        force: true
    }));

    //Static resource for development
    app.use('/app/assets', express.static(__dirname + '/app/assets'));
}

//Public static resources initialization
app.use('/public', express.static(__dirname + '/public'));

//Run events
require('./app/events/web.js').live(app);
/*
var robots = sitemap({
    sitemap: 'tmp/sitemap.xml',
    robots: 'tmp/robots.txt',
    map: {
        '/': ['get']
    },
    route: {
        '/': {
            hidden: false,
            disallow: false
        }
    }
}).TXTtoFile();

var map = sitemap({
    http: 'https',
    url: 'www.odizea.com',
    map: {
        '/': ['get']
    },
    route: {
        '/': {
            changefreq: 'always',
            priority: 1.0
        }
    }
});

app.get('/sitemap.xml', function(req, res) {
    map.XMLtoWeb(res);
}).get('/robots.txt', function(req, res) {
    var fs = require('fs'),
        content = fs.readFileSync(process.cwd() + '/tmp/robots.txt').toString().replace('User-agent: *', 'User-Agent: *\nAllow: /');
    res.header('Content-Type', 'text/plain');
    res.send([lastroomASCII, '\n\n', content].join(''));
});

//Error handlers
app.get('*', function(req, res, next) {
    var err = new Error();
    err.status = 404;
    err.message = 'Page not found';
    next(err);
});

app.use(function(err, req, res, next) {
    console.error(err, req.url);
    if (err.status == 404) {
        res.render('404', {
            url: req.url
        });
    } else {
        res.status(err.status || 500).render('500', {
            error: err.stack
        });
    }
});*/

app.listen(config.app.port);