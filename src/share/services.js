
export default new class{
    newFilm=[] ;
    API_KEY= process.env.VUE_APP_API_KEY;
    async fetchFilms(movie) {
        return await fetch(' https://kinopoiskapiunofficial.tech/api/v2.1/films/top ', {
            method: 'GET',
            headers: {
                'X-API-KEY': `${this.API_KEY}`
            }
        })
            .then(response => response.json())
            .then(data => {
                let result = data.films;
                const newMovies =result;
                movie.push(newMovies);
            })

    }
    fetchFilmsByGenre(genre,movie) {
        movie.splice(0,movie.length)
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${genre} `, {
            method: 'GET',
            headers: {
                'X-API-KEY': '5612cdc8-8f1c-40b9-972a-6af4d1825731'
            }
        })
            .then(response => response.json())
            .then(data => {
                let result = data.films;
                const newMovies =result;
                movie.push(newMovies);
            })
    }
    async fetchFilm(id,film) {
        this.newFilm.splice(0,this.newFilm.length)
        await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${this.API_KEY}`
            }
        })
            .then(response => response.json())
            .then(data => {
                let res = data.data;
                this.newFilm.push(res);
            })
        console.log(this.newFilm)
        film=this.newFilm[0]
        console.log(film)

    }




}
