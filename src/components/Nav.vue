<template>
    <nav class="navbar navbar-expand-lg navbar-dark ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/main/3" class="nav-link" >Home </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/random" class="nav-link" >Random</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose Genre
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link :to="{name:'main',params:{genre: genre.id}}" class="dropdown-item" v-for="(genre,index) in genres" :key="index" :value="genre.id">{{genre.genre}}</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return{
                selectedGenres: 3,
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
                ]
            }
        },

    }
</script>
