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

module.exports.Contact = function(req, res) {
    res.render('contact', RequestContext(req, {}));
};

module.exports.Contacting = function(req, res) {
    require('../models/Contact.js').create(req.body, function(err, saved) {
        res.render('thanks', RequestContext(req, {}));
    });
};

module.exports.Project = function(req, res) {
    var projects = {
        regalodemiel: {
            image: '/public/images/projects/regalodemiel.png',
            name: 'Regalo de Miel',
            shortDescription: 'Branding + Website',
            longDescription: 'We built with this awesome startup, their branding and responsive website. Regalo de Miel is croud-founding service for the honey moon.',
            logo: '/public/images/projects/regalodemiel-logo.svg',
            cover: '/public/images/projects/regalodemiel-cover.jpg',
        }
    }
    res.render('project', RequestContext(req, projects[req.params.id]));
}
