var site = include('app', 'ops', 'site');

module.exports.live = function(app) {
    app.on({
        'get /': site.Index,
        'get /services': site.Services,
        'get /about': site.About,
        'get /hire': site.Hire
    });
};
