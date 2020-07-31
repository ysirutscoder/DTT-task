<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/main" class="nav-link" >Home </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/random" class="nav-link" >Random</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Some Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" >Option1</a>
                        <a class="dropdown-item" >Option2</a>
                        <a class="dropdown-item" >Option3</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
<!--    adding part where routes will be shown-->
    <router-view class="mt-7"></router-view>

<Footer/>
</div>
</template>

<script>
    import Footer from "@/components/Footer";
    export default {
    name: 'app',
    movies: [],

    data() {
        return {
            title: "Recrutment Task"
        }
    },
        components:{
        Footer,
        }
}
</script>
