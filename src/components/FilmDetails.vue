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
            <div class="movie-card col-sm-12 col-md-4" :key="index" v-for="(movie,index) in movies.slice(0,3)">
                <img :src="movie.posterUrl" :alt="movie.nameEn" class="movie-card--img">
                <h3 class="movie-card--title" ><span v-if="!!movie.nameEn" >{{ movie.nameEn }}</span><span v-else >{{ movie.nameRu }}</span></h3>
                <h5 class="movie-card--date">{{movie.year}}</h5>
                <router-link class="movie-card--link" :to="{name:'details',params:{filmId: movie.filmId}}">Read more</router-link>
            </div>

        </div>
    </div>
</template>

<script>
    import MyService from '../share/services'
    export default{
        data(){
            return{
                //get parametrs from route
                filmId:this.$route.params.filmId,
                genre:this.$route.params.genre,
                films:[],
                movies:[],
                film:{}
            }
        },
        //observing route in order to dynamicly change data
        watch: {
            '$route': 'change'
        },
        methods: {
            //function which called on route change
            change() {
                this.filmId = this.$route.params.filmId;
                MyService.fetchFilm(this.filmId)
                    .then(response => response.json())
                    .then(data => {
                        let res = data.data;
                        this.film=res;
                    })
            },
        },
        //on create lifecycle hook fetch films ,to be already loaded at mount time
        created(){
             MyService.fetchFilm(this.filmId)
                 .then(response => response.json())
                 .then(data => {
                     let res = data.data;
                     this.film= res;
                 })
             MyService.fetchFilmsByGenre(this.genre)
                 .then(response => response.json())
                 .then(data => {
                     let result = data.films;
                     this.movies =result;

                 })
         }
    }
</script>
