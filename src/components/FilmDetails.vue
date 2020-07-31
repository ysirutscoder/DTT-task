<template>
    <div class="container">
        <div class="row">
            <div class="film-details">
                <!--    render film data into filds by binding data from route-->
                <img :src="film.posterUrlPreview" :alt="film.nameEn" class="film-details--img">
                <div class="film-details--info">
                    <h3 class="film-details--title">{{film.nameEn}}</h3>
                    <h5 class="film-details--date">{{film.year}}</h5>
                    <p class="film-details--length">{{film.filmLength}}</p>
                    <a :href="film.webUrl">Watch trailer</a>
                </div>
            </div>
        </div>
<!--        movies component-->
        <h2>Related films</h2>
        <div class="row">
            <div class="movie-card col-sm-12 col-md-4" :key="index" v-for="(movie,index) in movies.slice(0,5)">
                <img :src="movie.posterUrl" :alt="movie.nameEn" class="movie-card--img">
                <h3 class="movie-card--title">{{movie.nameEn}}</h3>
                <h5 class="movie-card--date">{{movie.year}}</h5>
                <router-link  class="movie-card--link" :to="{name:'details',params:{filmId: movie.filmId}}">Read more</router-link>
            </div>

        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                //get parametrs from route
                filmId:this.$route.params.filmId,
                genre:this.$route.params.genre,
                film:{},
                movies:[]
            }
        },
        //observing route in order to dynamicly change data
        watch:{
            '$route':'change'
        },
        methods:{
            // fetching data of film with id given in route params
            fetchFilm(id){
                fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`,{
                    method: 'GET',
                    headers: {
                        "X-API-KEY": '5612cdc8-8f1c-40b9-972a-6af4d1825731'
                    }})
                    .then(response => response.json())
                    .then(data => {
                        let res = data.data;
                        this.film = res;
                    })
            },
            //function which called on route change
            change(){
                this.filmId=this.$route.params.filmId;
                this.fetchFilm(this.filmId);
            },
            //fetching all films , i think i could it put in services but i dont know if it is good practic for Vue
            // fetchFilms(){
            //     fetch(" https://kinopoiskapiunofficial.tech/api/v2.1/films/top ",{
            //         method: 'GET',
            //         headers: {
            //             "X-API-KEY": '5612cdc8-8f1c-40b9-972a-6af4d1825731'
            //         }})
            //         .then(response => response.json())
            //         .then(data => {
            //             let result = data.films;
            //             this.movies = result;
            //         })
            // },
            fetchFilmsByGenre(genre){
                fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${genre} `,{
                    method: 'GET',
                    headers: {
                        "X-API-KEY": '5612cdc8-8f1c-40b9-972a-6af4d1825731'
                    }})
                    .then( response => response.json())
                    .then (data=> {
                        let result =  data.films;
                        this.movies=result;
                    })
            },
        },
        //on create lifecycle hook fetch films ,to be already loaded at mount time
        created(){
             this.fetchFilm(this.filmId)
            this.fetchFilmsByGenre(this.genre)
         }
    }
</script>
