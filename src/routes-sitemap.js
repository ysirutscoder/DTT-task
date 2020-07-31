module.exports = [
    {path: '/', redirect: '/main'},
    {path: '/main', name: 'main'},
    {path: '/random', name: 'random'},
    {
        path: '/main/:filmId', name: 'details',
        meta: {
            sitemap: {
                slugs: [
                    { filmId: 1},
                    { filmId: 2},
                    { filmId: 3}
                ],
            }
        }
    }
]
