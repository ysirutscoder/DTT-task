import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from "@/App";
import Film from "@/components/Film";
import Radnom from "@/components/Radnom";
import FilmDetails from "@/components/FilmDetails";

const routes = [
    {path:'/',redirect:'/main'},
    {path:'/main',name:'main',component:Film},
    {path:'/random',name:'random',component: Radnom},
    {path:'/main/:filmId', name:'details',component: FilmDetails,props:true}
]

const router = new VueRouter({
    routes
})


new Vue ({
    el:'#app',
    router,
    render: h=>h(App)
})


