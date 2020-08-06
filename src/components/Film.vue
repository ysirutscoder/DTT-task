<template>
    <div class="container">
        <div class="filter">
            <div class="filter-text">Sort by year:</div>
            <select v-model="currentOrder">
                <option selected disabled value="" hidden>Select</option>
                <option value="year">Sort by Year</option>
                <option value="name">Sort by Name</option>
            </select>
        </div>
        <div class="row">
            <!--            using vfor for show element from fetching data and slice an array to show 10 elements(api doesnt provide query for number of items-->
            <div class="movie-card col-sm-12 col-md-4" :key="index" v-for="(movie,index) in orderedItems(movies.slice(0,10))">
                <img :src="movie.posterUrl" :alt="movie.nameEn" class="movie-card--img">
                <h3 class="movie-card--title" ><span v-if="!!movie.nameEn" >{{ movie.nameEn }}</span><span v-else >{{ movie.nameRu }}</span></h3>
                <h5 class="movie-card--date">{{movie.year}}</h5>
                <!--                pass film id parametr vie router-->
                <router-link class="movie-card--link" :to="{name:'details',params:{filmId: movie.filmId,genre: genre}}">Read more</router-link>
            </div>

        </div>
    </div>

</template>

<script>
    import MyService from '../share/services'
    export default {

        data() {
            return {
                API_KEY:process.env.VUE_APP_API_KEY,
                selectedGenres: 3,
                movies:[],
                genre: this.$route.params.genre,
                currentOrder:'',
            }
        },
        computed:{
        },
        watch: {
            '$route': 'changeGenre'
        },
        methods: {
            // fetching list of films
            changeGenre() {
                this.genre = this.$route.params.genre;
                MyService.fetchFilmsByGenre(this.genre)
                    .then(response => response.json())
                    .then(data => {
                        let result = data.films;
                        this.movies= result;
                    })
            },
            orderedItems(items) {
                if (this.currentOrder == '') return this.movies.slice(0,10);
                if (this.currentOrder == 'year') {
                    return items.slice(0).sort((a, b) => a.year < b.year ? 1 : -1);
                }  else if (this.currentOrder == 'name') {
                    return items.slice(0).sort((a, b) => a.nameEn > b.nameEn ? 1 : -1);
                }
            }

        },
        //on create lifecycle hook fetch films ,to be already loaded at mount time
        created() {
            MyService.fetchFilms()
                .then(response => response.json())
                .then(data => {
                    let result = data.films;
                    this.movies =  result;
                })

        }
    }
</script>

