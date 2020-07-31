const routes = require('./src/routes-sitemap');

module.exports = {
    pluginOptions: {
        sitemap: {
            baseURL: 'https://127.0.0.1' + ':' + '8080',
            routes,
        }
    }
}
