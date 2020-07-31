<template>
    <div class="card film-random mt-10">
<!--        render film data into fild by binding data-->
        <img :src="film.posterUrlPreview" :alt="film.nameEn" class="film-random--img">
        <h3 class="film-random--title">{{film.nameEn}}</h3>
        <h5 class="film-random--date">{{film.year}}</h5>
        <button class="btn btn-danger" @click="getRandomFilm">Randomise</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                film:{},
            }
        },
        methods:{
            //method for fetching fil with special id
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
            //method to fetch random film using Math random functionality
            getRandomFilm(){
                let random_id=Math.floor(Math.random()*10000)
                this.fetchFilm(random_id);
            }
        },
        //on created render first random film
        created(){
            this.getRandomFilm()

        }
    }
</script>
