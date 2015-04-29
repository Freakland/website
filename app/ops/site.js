//Global libraries
var expressify = require('expressify'),
    RequestContext = expressify.contexts.RequestContext;

module.exports.Index = function(req, res) {
    res.render('index', RequestContext(req, {}));
};

module.exports.Services = function(req, res) {
    res.render('services', RequestContext(req, {}));
};

module.exports.About = function(req, res) {
    res.render('about', RequestContext(req, {}));
};

module.exports.Hire = function(req, res) {
    res.render('hire', RequestContext(req, {}));
};
