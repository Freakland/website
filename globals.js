module.exports = function(req) {
    return {
        req: {
            path: req.path
        },
        site: {
            name: 'Freeky Co.',
            description: req.__('We are a freaky company that materialize software products.'),
            year: new Date().getFullYear()
        },
        environment: process.env.NODE_ENV || 'development'
    }
}