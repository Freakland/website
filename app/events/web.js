var site = include('app', 'ops', 'site');

module.exports.live = function(app) {
    app.on({
        'get /': site.Index,
        'get /project/:id': site.Project,
        'get /services': site.Services,
        'get /about': site.About,
        'get /contact': site.Contact,
        'post /contact': site.Contacting
    });
};
