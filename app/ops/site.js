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
            logo: '/public/images/projects/regalodemiel-logo.svg',
            cover: '/public/images/projects/regalodemiel-cover.jpg',
            url: 'http://regalodemiel.com',
            name: 'Regalo de Miel',
            shortDescription: 'Branding + Website',
            longDescription: 'We built with this awesome startup, their branding and responsive website. Regalo de Miel is croud-founding service for the honey moon.'
        },
        impulso: {
            image: '/public/images/projects/impulso.png',
            logo: '/public/images/projects/impulso-logo.svg',
            cover: '/public/images/projects/impulso-cover.jpg',
            url: 'http://impulso.freekyminds.com',
            name: 'Impulso Universitario A. C.',
            shortDescription: 'CMS',
            longDescription: 'We extended the Django admin to allow this non-profit association to put all their benefactors and favored data on the cloud and make easy the suscription for new members.'
        },
        cocacola: {
            image: '/public/images/projects/cocacola.jpg',
            logo: '/public/images/projects/cocacola-logo.svg',
            cover: '/public/images/projects/cocacola-cover.jpg',
            url: 'http://move.optimumcsr.com',
            name: 'Industria Mexicana de Coca Cola',
            shortDescription: 'Design + Development',
            longDescription: 'Event metrics system for Coca Cola Mexico. This system allows the company manage the people participate on their social activities. View and export reports, graphics and export.'
        }
    }
    res.render('project', RequestContext(req, projects[req.params.id]));
}
