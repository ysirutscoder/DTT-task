<template>
    <div class="container">
        <div class="filter">
            <div class="filter-text">Filter by genre:</div>
            <!--            on change send actuale genre for methode fetchbygenres-->
            <select class="filter-options" @change="fetchFilmsByGenre($event)" v-model="selectedGenres">
                <option v-for="(genre,index) in genres" :key="index" :value="genre.id">{{genre.genre}}</option>
            </select>
        </div>
        <div class="row">
            <!--            using vfor for show element from fetching data and slice an array to show 10 elements(api doesnt provide query for number of items-->
            <div class="movie-card col-sm-12 col-md-4" :key="index" v-for="(movie,index) in movies.slice(0,10)">
                <img :src="movie.posterUrl" :alt="movie.nameEn" class="movie-card--img">
                <h3 class="movie-card--title">{{movie.nameEn}}</h3>
                <h5 class="movie-card--date">{{movie.year}}</h5>
<!--                pass film id parametr vie router-->
                <router-link class="movie-card--link" :to="{name:'details',params:{filmId: movie.filmId,genre: selectedGenres}}">Read more</router-link>
            </div>

        </div>
    </div>

</template>

<script>
    export default {

        data() {
            return {
                movies: [],
                selectedGenres: 3,
                //define genres for sorting
                genres1: [{
                    id: 1,
                    genre: '1'
                },
                    {
                        id: 2,
                        genre: '2'
                    }],
                genres: [
                    {
                        id: 1750,
                        genre: 'anime'
                    },
                    {
                        id: 22,
                        genre: 'biografy'
                    },
                    {
                        id: 3,
                        genre: 'action'
                    },
                    {
                        id: 13,
                        genre: 'western'
                    },
                    {
                        id: 19,
                        genre: 'millitary'
                    },
                    {
                        id: 17,
                        genre: 'detective'
                    },
                    {
                        id: 456,
                        genre: 'children'
                    },
                    {
                        id: 20,
                        genre: 'adult'
                    },
                    {
                        id: 12,
                        genre: 'documentional'
                    },
                    {
                        id: 8,
                        genre: 'drama'
                    },
                    {
                        id: 27,
                        genre: 'game'
                    },
                    {
                        id: 23,
                        genre: 'history'
                    },
                    {
                        id: 6,
                        genre: 'comedy'
                    },
                    {
                        id: 1747,
                        genre: 'concert'
                    },
                    {
                        id: 15,
                        genre: 'short-movie'
                    },
                    {
                        id: 16,
                        genre: 'criminal'
                    },
                    {
                        id: 7,
                        genre: 'melodrama'
                    },
                    {
                        id: 21,
                        genre: 'music'
                    },
                    {
                        id: 14,
                        genre: 'cartoon'
                    },
                    {
                        id: 9,
                        genre: 'musicle'
                    },
                    {
                        id: 28,
                        genre: 'news'
                    },
                    {
                        id: 10,
                        genre: 'adventure'
                    },
                    {
                        id: 25,
                        genre: 'real TV'
                    },
                    {
                        id: 11,
                        genre: 'family'
                    },
                    {
                        id: 24,
                        genre: 'sport'
                    },
                    {
                        id: 26,
                        genre: 'show'
                    },
                    {
                        id: 4,
                        genre: 'triller'
                    },
                    {
                        id: 1,
                        genre: 'horrore'
                    },
                    {
                        id: 2,
                        genre: 'fantasy'
                    },
                    {
                        id: 18,
                        genre: 'noire'
                    },
                    {
                        id: 5,
                        genre: 'fantastic-movie'
                    },
                ]
            }
        },
        methods: {
            // fetching list of films
            fetchFilms() {
                fetch(' https://kinopoiskapiunofficial.tech/api/v2.1/films/top ', {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': '5612cdc8-8f1c-40b9-972a-6af4d1825731'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        let result = data.films;
                        this.movies = result;
                    })
            },
            //fetching films by genre

            fetchFilmsByGenre(event) {
                fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${event.target.value} `, {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': '5612cdc8-8f1c-40b9-972a-6af4d1825731'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        let result = data.films;
                        this.movies = result;
                    })

                // if (event.target.value === '1') {
                //     this.movies = this.dummyResultAction;
                // } else if (event.target.value === '2') {
                //     this.movies = this.dummyMovieWestern;
                // }
            },
        },

        //on create lifecycle hook fetch films ,to be already loaded at mount time
        created() {
            this.fetchFilms()
        }
    }
</script>
