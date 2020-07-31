<template>
    <div class="container">
        <div class="filter">
            <div class="filter-text">Filter by genre:</div>
            <!--            on change send actuale genre for methode fetchbygenres-->
            <select class="filter-options" @change="fetchFilmsByGenre($event)" v-model="selectedGenres">
                <option v-for="(genre,index) in genres" :key="index" :value="genre.id">{{genre.genre}}</option>
            </select>
        </div>
        <div class="row">
            <!--            using vfor for show element from fetching data and slice an array to show 10 elements(api doesnt provide query for number of items-->
            <div class="movie-card col-sm-12 col-md-4" :key="index" v-for="(movie,index) in movies.slice(0,10)">
                <img :src="movie.posterUrl" :alt="movie.nameEn" class="movie-card--img">
                <h3 class="movie-card--title">{{movie.nameEn}}</h3>
                <h5 class="movie-card--date">{{movie.year}}</h5>
<!--                pass film id parametr vie router-->
                <router-link class="movie-card--link" :to="{name:'details',params:{filmId: movie.filmId,genre: selectedGenres}}">Read more</router-link>
            </div>

        </div>
    </div>

</template>

<script>
    export default {

        data() {
            return {
                movies: [],
                dummyResultAction: [{
                    'filmId': 326,
                    'nameRu': 'Побег из Шоушенка',
                    'nameEn': 'The Shawshank Redemption',
                    'year': '1994',
                    'filmLength': '2:22',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'драма'}],
                    'rating': '9.2',
                    'ratingVoteCount': 711509,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/326.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/326.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 435,
                    'nameRu': 'Зеленая миля',
                    'nameEn': 'The Green Mile',
                    'year': '1999',
                    'filmLength': '3:09',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'фантастика'}, {'genre': 'драма'}, {'genre': 'криминал'}],
                    'rating': '9.1',
                    'ratingVoteCount': 612043,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/435.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 448,
                    'nameRu': 'Форрест Гамп',
                    'nameEn': 'Forrest Gump',
                    'year': '1994',
                    'filmLength': '2:22',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'мелодрама'}, {'genre': 'комедия'}],
                    'rating': '9.0',
                    'ratingVoteCount': 577610,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/448.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/448.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 329,
                    'nameRu': 'Список Шиндлера',
                    'nameEn': 'Schindler\'s List',
                    'year': '1993',
                    'filmLength': '3:15',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'биография'}, {'genre': 'история'}],
                    'rating': '8.9',
                    'ratingVoteCount': 332665,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/329.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/329.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 535341,
                    'nameRu': '1+1',
                    'nameEn': 'Intouchables',
                    'year': '2011',
                    'filmLength': '1:52',
                    'countries': [{'country': 'Франция'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'комедия'}, {'genre': 'биография'}],
                    'rating': '8.8',
                    'ratingVoteCount': 1109808,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/535341.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/535341.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 447301,
                    'nameRu': 'Начало',
                    'nameEn': 'Inception',
                    'year': '2010',
                    'filmLength': '2:28',
                    'countries': [{'country': 'США'}, {'country': 'Великобритания'}],
                    'genres': [{'genre': 'фантастика'}, {'genre': 'боевик'}, {'genre': 'триллер'}],
                    'rating': '8.8',
                    'ratingVoteCount': 683952,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/447301.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/447301.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 389,
                    'nameRu': 'Леон',
                    'nameEn': 'Léon',
                    'year': '1994',
                    'filmLength': '2:13',
                    'countries': [{'country': 'Франция'}],
                    'genres': [{'genre': 'боевик'}, {'genre': 'триллер'}, {'genre': 'драма'}],
                    'rating': '8.8',
                    'ratingVoteCount': 474337,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/389.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/389.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 2360,
                    'nameRu': 'Король Лев',
                    'nameEn': 'The Lion King',
                    'year': '1994',
                    'filmLength': '1:28',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'мультфильм'}, {'genre': 'мюзикл'}, {'genre': 'драма'}],
                    'rating': '8.8',
                    'ratingVoteCount': 486058,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/2360.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/2360.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 361,
                    'nameRu': 'Бойцовский клуб',
                    'nameEn': 'Fight Club',
                    'year': '1999',
                    'filmLength': '2:19',
                    'countries': [{'country': 'США'}, {'country': 'Германия'}],
                    'genres': [{'genre': 'триллер'}, {'genre': 'драма'}, {'genre': 'криминал'}],
                    'rating': '8.7',
                    'ratingVoteCount': 556045,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/361.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/361.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 42664,
                    'nameRu': 'Иван Васильевич меняет профессию',
                    'nameEn': '',
                    'year': '1973',
                    'filmLength': '1:28',
                    'countries': [{'country': 'СССР'}],
                    'genres': [{'genre': 'фантастика'}, {'genre': 'комедия'}, {'genre': 'приключения'}],
                    'rating': '8.7',
                    'ratingVoteCount': 631445,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/42664.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/42664.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 381,
                    'nameRu': 'Жизнь прекрасна',
                    'nameEn': 'La vita è bella',
                    'year': '1997',
                    'filmLength': '1:56',
                    'countries': [{'country': 'Италия'}],
                    'genres': [{'genre': 'военный'}, {'genre': 'комедия'}, {'genre': 'драма'}],
                    'rating': '8.7',
                    'ratingVoteCount': 194483,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/381.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/381.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 32898,
                    'nameRu': 'Достучаться до небес',
                    'nameEn': 'Knockin\' on Heaven\'s Door',
                    'year': '1997',
                    'filmLength': '1:27',
                    'countries': [{'country': 'Германия'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'комедия'}, {'genre': 'криминал'}],
                    'rating': '8.6',
                    'ratingVoteCount': 421359,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/32898.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/32898.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 325,
                    'nameRu': 'Крестный отец',
                    'nameEn': 'The Godfather',
                    'year': '1972',
                    'filmLength': '2:55',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'криминал'}],
                    'rating': '8.6',
                    'ratingVoteCount': 280891,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/325.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/325.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 342,
                    'nameRu': 'Криминальное чтиво',
                    'nameEn': 'Pulp Fiction',
                    'year': '1994',
                    'filmLength': '2:34',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'триллер'}, {'genre': 'комедия'}, {'genre': 'криминал'}],
                    'rating': '8.6',
                    'ratingVoteCount': 461263,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/342.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/342.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 42782,
                    'nameRu': 'Операция «Ы» и другие приключения Шурика',
                    'nameEn': '',
                    'year': '1965',
                    'filmLength': '1:35',
                    'countries': [{'country': 'СССР'}],
                    'genres': [{'genre': 'комедия'}, {'genre': 'мелодрама'}, {'genre': 'криминал'}],
                    'rating': '8.6',
                    'ratingVoteCount': 551195,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/42782.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/42782.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 195334,
                    'nameRu': 'Престиж',
                    'nameEn': 'The Prestige',
                    'year': '2006',
                    'filmLength': '2:05',
                    'countries': [{'country': 'США'}, {'country': 'Великобритания'}],
                    'genres': [{'genre': 'фантастика'}, {'genre': 'триллер'}, {'genre': 'драма'}],
                    'rating': '8.6',
                    'ratingVoteCount': 467403,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/195334.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/195334.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 530,
                    'nameRu': 'Игры разума',
                    'nameEn': 'A Beautiful Mind',
                    'year': '2001',
                    'filmLength': '2:15',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'биография'}, {'genre': 'мелодрама'}],
                    'rating': '8.6',
                    'ratingVoteCount': 395678,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/530.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/530.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 258687,
                    'nameRu': 'Интерстеллар',
                    'nameEn': 'Interstellar',
                    'year': '2014',
                    'filmLength': '2:49',
                    'countries': [{'country': 'США'}, {'country': 'Великобритания'}, {'country': 'Канада'}],
                    'genres': [{'genre': 'фантастика'}, {'genre': 'драма'}, {'genre': 'приключения'}],
                    'rating': '8.6',
                    'ratingVoteCount': 591808,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/258687.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/258687.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 3498,
                    'nameRu': 'Властелин колец: Возвращение Короля',
                    'nameEn': 'The Lord of the Rings: The Return of the King',
                    'year': '2003',
                    'filmLength': '3:21',
                    'countries': [{'country': 'Новая Зеландия'}, {'country': 'США'}],
                    'genres': [{'genre': 'фэнтези'}, {'genre': 'приключения'}, {'genre': 'драма'}],
                    'rating': '8.6',
                    'ratingVoteCount': 419493,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/3498.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/3498.jpg',
                    'ratingChange': 0
                }, {
                    'filmId': 474,
                    'nameRu': 'Гладиатор',
                    'nameEn': 'Gladiator',
                    'year': '2000',
                    'filmLength': '2:35',
                    'countries': [{'country': 'США'}, {'country': 'Великобритания'}, {'country': 'Мальта'}],
                    'genres': [{'genre': 'боевик'}, {'genre': 'история'}, {'genre': 'драма'}],
                    'rating': '8.6',
                    'ratingVoteCount': 393360,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/474.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/474.jpg',
                    'ratingChange': 0
                }],
                dummyMovieWestern: [{
                    'filmId': 349,
                    'nameRu': 'Хороший, плохой, злой',
                    'nameEn': 'Il buono, il brutto, il cattivo',
                    'type': 'FILM',
                    'year': '1966',
                    'countries': [{'country': 'Италия'}, {'country': 'Испания'}, {'country': 'Германия (ФРГ)'}],
                    'genres': [{'genre': 'вестерн'}],
                    'rating': '8.5',
                    'ratingVoteCount': 121764,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/349.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_349.jpg'
                }, {
                    'filmId': 1045172,
                    'nameRu': 'Йеллоустоун (сериал)',
                    'nameEn': 'Yellowstone',
                    'type': 'TV_SHOW',
                    'year': '2018-...',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'вестерн'}],
                    'rating': '8.3',
                    'ratingVoteCount': 11402,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/1045172.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_1045172.jpg'
                }, {
                    'filmId': 404901,
                    'nameRu': 'Зорро (сериал)',
                    'nameEn': 'Zorro',
                    'type': 'TV_SHOW',
                    'year': '1957-1959',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'семейный'}, {'genre': 'приключения'}, {'genre': 'боевик'}],
                    'rating': '8.2',
                    'ratingVoteCount': 750,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/404901.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_404901.jpg'
                }, {
                    'filmId': 586397,
                    'nameRu': 'Джанго освобожденный',
                    'nameEn': 'Django Unchained',
                    'type': 'FILM',
                    'year': '2012',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'вестерн'}, {'genre': 'боевик'}, {'genre': 'драма'}],
                    'rating': '8.2',
                    'ratingVoteCount': 418278,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/586397.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_586397.jpg'
                }, {
                    'filmId': 7103,
                    'nameRu': 'Назад в будущее 3',
                    'nameEn': 'Back to the Future Part III',
                    'type': 'FILM',
                    'year': '1990',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'фантастика'}, {'genre': 'комедия'}, {'genre': 'приключения'}],
                    'rating': '8.2',
                    'ratingVoteCount': 251107,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/7103.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_7103.jpg'
                }, {
                    'filmId': 8190,
                    'nameRu': 'На несколько долларов больше',
                    'nameEn': 'Per qualche dollaro in più',
                    'type': 'FILM',
                    'year': '1965',
                    'countries': [{'country': 'Италия'}, {'country': 'Испания'}, {'country': 'Германия (ФРГ)'}],
                    'genres': [{'genre': 'вестерн'}, {'genre': 'драма'}, {'genre': 'боевик'}],
                    'rating': '8.2',
                    'ratingVoteCount': 48121,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/8190.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_8190.jpg'
                }, {
                    'filmId': 44128,
                    'nameRu': 'Деловые люди',
                    'nameEn': '',
                    'type': 'FILM',
                    'year': '1963',
                    'countries': [{'country': 'СССР'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'комедия'}, {'genre': 'вестерн'}],
                    'rating': '8.2',
                    'ratingVoteCount': 22578,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/44128.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_44128.jpg'
                }, {
                    'filmId': 2037,
                    'nameRu': 'Танцующий с волками',
                    'nameEn': 'Dances with Wolves',
                    'type': 'FILM',
                    'year': '1990',
                    'countries': [{'country': 'США'}, {'country': 'Великобритания'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'вестерн'}, {'genre': 'приключения'}],
                    'rating': '8.1',
                    'ratingVoteCount': 53124,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/2037.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_2037.jpg'
                }, {
                    'filmId': 32726,
                    'nameRu': 'Босс ниггер',
                    'nameEn': 'Boss Nigger',
                    'type': 'FILM',
                    'year': '1975',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'комедия'}, {'genre': 'вестерн'}],
                    'rating': '8.1',
                    'ratingVoteCount': 1837,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/32726.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_32726.jpg'
                }, {
                    'filmId': 4378,
                    'nameRu': 'Мэверик',
                    'nameEn': 'Maverick',
                    'type': 'FILM',
                    'year': '1994',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'комедия'}, {'genre': 'приключения'}, {'genre': 'вестерн'}],
                    'rating': '8.1',
                    'ratingVoteCount': 65722,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/4378.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_4378.jpg'
                }, {
                    'filmId': 839,
                    'nameRu': 'Спирит: Душа прерий',
                    'nameEn': 'Spirit: Stallion of the Cimarron',
                    'type': 'FILM',
                    'year': '2002',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'мультфильм'}, {'genre': 'драма'}, {'genre': 'приключения'}],
                    'rating': '8.1',
                    'ratingVoteCount': 77296,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/839.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_839.jpg'
                }, {
                    'filmId': 408442,
                    'nameRu': 'Триган (сериал)',
                    'nameEn': 'Trigun',
                    'type': 'TV_SHOW',
                    'year': '1998',
                    'countries': [{'country': 'Япония'}],
                    'genres': [{'genre': 'аниме'}, {'genre': 'мультфильм'}, {'genre': 'фантастика'}],
                    'rating': '8.1',
                    'ratingVoteCount': 8553,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/408442.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_408442.jpg'
                }, {
                    'filmId': 376,
                    'nameRu': 'Однажды на Диком Западе',
                    'nameEn': 'C\'era una volta il West',
                    'type': 'FILM',
                    'year': '1968',
                    'countries': [{'country': 'Италия'}, {'country': 'США'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'вестерн'}],
                    'rating': '8.0',
                    'ratingVoteCount': 20727,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/376.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_376.jpg'
                }, {
                    'filmId': 45463,
                    'nameRu': 'Человек с бульвара Капуцинов',
                    'nameEn': '',
                    'type': 'FILM',
                    'year': '1987',
                    'countries': [{'country': 'СССР'}],
                    'genres': [{'genre': 'комедия'}, {'genre': 'вестерн'}, {'genre': 'мюзикл'}],
                    'rating': '8.0',
                    'ratingVoteCount': 80344,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/45463.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_45463.jpg'
                }, {
                    'filmId': 8455,
                    'nameRu': 'За пригоршню долларов',
                    'nameEn': 'Per un pugno di dollari',
                    'type': 'FILM',
                    'year': '1964',
                    'countries': [{'country': 'Италия'}, {'country': 'Испания'}, {'country': 'Германия (ФРГ)'}],
                    'genres': [{'genre': 'вестерн'}],
                    'rating': '8.0',
                    'ratingVoteCount': 37231,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/8455.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_8455.jpg'
                }, {
                    'filmId': 393,
                    'nameRu': 'Сокровища Сьерра Мадре',
                    'nameEn': 'The Treasure of the Sierra Madre',
                    'type': 'FILM',
                    'year': '1947',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'приключения'}, {'genre': 'вестерн'}],
                    'rating': '8.0',
                    'ratingVoteCount': 6505,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/393.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_393.jpg'
                }, {
                    'filmId': 421,
                    'nameRu': 'Буч Кэссиди и Сандэнс Кид',
                    'nameEn': 'Butch Cassidy and the Sundance Kid',
                    'type': 'FILM',
                    'year': '1969',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'вестерн'}, {'genre': 'драма'}, {'genre': 'криминал'}],
                    'rating': '8.0',
                    'ratingVoteCount': 16601,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/421.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_421.jpg'
                }, {
                    'filmId': 8827,
                    'nameRu': 'Легенды осени',
                    'nameEn': 'Legends of the Fall',
                    'type': 'FILM',
                    'year': '1994',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'драма'}, {'genre': 'мелодрама'}, {'genre': 'вестерн'}],
                    'rating': '8.0',
                    'ratingVoteCount': 65937,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/8827.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_8827.jpg'
                }, {
                    'filmId': 415,
                    'nameRu': 'Паровоз Генерал',
                    'nameEn': 'The General',
                    'type': 'FILM',
                    'year': '1926',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'боевик'}, {'genre': 'драма'}, {'genre': 'комедия'}],
                    'rating': '7.9',
                    'ratingVoteCount': 5927,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/415.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_415.jpg'
                }, {
                    'filmId': 819101,
                    'nameRu': 'Омерзительная восьмерка',
                    'nameEn': 'The Hateful Eight',
                    'type': 'FILM',
                    'year': '2015',
                    'countries': [{'country': 'США'}],
                    'genres': [{'genre': 'вестерн'}, {'genre': 'криминал'}, {'genre': 'триллер'}],
                    'rating': '7.9',
                    'ratingVoteCount': 332053,
                    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/819101.jpg',
                    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/iphone360_819101.jpg'
                }],
                selectedGenres: 3,
                //define genres for sorting
                genres1: [{
                    id: 1,
                    genre: '1'
                },
                    {
                        id: 2,
                        genre: '2'
                    }],
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
                    {
                        id: 4,
                        genre: 'triller'
                    },
                    {
                        id: 1,
                        genre: 'horrore'
                    },
                    {
                        id: 2,
                        genre: 'fantasy'
                    },
                    {
                        id: 18,
                        genre: 'noire'
                    },
                    {
                        id: 5,
                        genre: 'fantastic-movie'
                    },
                ]
            }
        },
        methods: {
            // fetching list of films
            fetchFilms() {
                fetch(' https://kinopoiskapiunofficial.tech/api/v2.1/films/top ', {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': '5612cdc8-8f1c-40b9-972a-6af4d1825731'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        let result = data.films;
                        this.movies = result;
                    })
            },
            //fetching films by genre

            fetchFilmsByGenre(event) {
                fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${event.target.value} `, {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': '5612cdc8-8f1c-40b9-972a-6af4d1825731'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        let result = data.films;
                        this.movies = result;
                    })

                // if (event.target.value === '1') {
                //     this.movies = this.dummyResultAction;
                // } else if (event.target.value === '2') {
                //     this.movies = this.dummyMovieWestern;
                // }
            },
        },

        //on create lifecycle hook fetch films ,to be already loaded at mount time
        created() {
            this.fetchFilms()
        }
    }
</script>
