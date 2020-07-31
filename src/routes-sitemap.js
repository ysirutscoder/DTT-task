module.exports = [
    {path: '/', redirect: '/main'},
    {path: '/main', name: 'main'},
    {path: '/random', name: 'random'},
    {
        path:'/main/:filmId/:genre', name:'details',
        meta: {
            sitemap: {
                slugs: [
                    { filmId: 1, genre: 1},
                    { filmId: 2, genre: 2},
                    { filmId: 3, genre: 3}
                ],
            }
        }
    }
]
