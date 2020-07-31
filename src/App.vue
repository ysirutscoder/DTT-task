<template>
<div id="app">
<Nav :class="{relative: scrollPosition < 100, fixed: scrollPosition > 100}" />
<!--    adding part where routes will be shown-->
    <router-view class="mt-7"></router-view>
<Footer/>
</div>
</template>

<script>
    import Footer from "@/components/Footer";
    import Nav from "@/components/Nav";
    export default {
    name: 'app',
    movies: [],

    data() {
        return {
            title: "Recrutment Task",
            scrollPosition: null
        }
    },
        methods:{
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        },
        components:{
        Footer,
        Nav
        }
}
</script>
