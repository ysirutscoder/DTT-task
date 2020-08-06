
export default new class{
    API_KEY= process.env.VUE_APP_API_KEY;
    async fetchFilms() {
        return await fetch(' https://kinopoiskapiunofficial.tech/api/v2.1/films/top ', {
            method: 'GET',
            headers: {
                'X-API-KEY': `${this.API_KEY}`
            }
        })
    }
    async fetchFilmsByGenre(genre) {
        return await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${genre} `, {
            method: 'GET',
            headers: {
                'X-API-KEY': '5612cdc8-8f1c-40b9-972a-6af4d1825731'
            }
        })
    }
    async fetchFilm(id) {
        return await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${this.API_KEY}`
            }
        })
    }
}
