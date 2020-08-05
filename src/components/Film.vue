<template>
    <div class="container">
        <div class="filter">
            <div class="filter-text">Sort by year:</div>
            <button @click="sort('year')">Sort by Year</button>
        </div>
        <div class="row">
            <!--            using vfor for show element from fetching data and slice an array to show 10 elements(api doesnt provide query for number of items-->
            <div class="movie-card col-sm-12 col-md-4" :key="items" v-for="(movie,index) in movies.slice(0,10)">
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
                sortType:'',
            }
        },
        computed:{
            items() {
                // if(this.sortType === '') return this.movies.slice(0);
                if(this.sortType === 'year') {
                    return this.movies.slice(0).sort((a,b) => {
                        if(a.year < b.year) return -1;
                        if(a.year > b.year) return 1;
                        return 0;
                    });
                }
            }
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
            // sortValues(event) {
            //     if(event.target.value==1){
            //         console.log(1)
            //         return this.movies.slice(0).sort((a,b) => a.year < b.year ? this.sorting : -this.sorting)
            //
            //     }
            //     else {
            //         return this.movies
            //     }
            // }
            sort(type) {
                this.sortType = type;
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
