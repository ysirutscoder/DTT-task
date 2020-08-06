<template>
    <div class="card film-random mt-10">
<!--        render film data into fild by binding data-->
        <img :src="film.posterUrlPreview" :alt="film.nameEn" class="film-random--img">
        <h3 class="film-random--title"><h3 class="movie-card--title" ><span v-if="!!film.nameEn" >{{ film.nameEn }}</span><span v-else >{{ film.nameRu }}</span></h3></h3>
        <h5 class="film-random--date">{{film.year}}</h5>
        <button class="btn btn-danger" @click="getRandomFilm">Randomise</button>
    </div>
</template>

<script>
    import MyService from '../share/services'
    export default{
        data(){
            return{
                film:{},
                API_KEY:process.env.VUE_APP_API_KEY,
            }
        },
        methods:{

            //method to fetch random film using Math random functionality
            getRandomFilm(){
                let random_id=Math.floor(Math.random()*10000)
                MyService.fetchFilm(random_id)
                    .then(response => response.json())
                    .then(data => {
                        let res = data.data;
                        this.film= res;
                    })
            }
        },
        //on created render first random film
        created(){
            this.getRandomFilm()

        }
    }
</script>
