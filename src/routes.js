import Film        from './components/Film';
import Radnom      from './components/Radnom';
import FilmDetails from './components/FilmDetails';

const routes = [
    {path: '/', redirect: '/main/:genre'},
    {path: '/main/:genre', name: 'main', component: Film,props:true},
    {path: '/random', name: 'random', component: Radnom},
    {path:'/main/:filmId/:genre', name:'details',component: FilmDetails,props:true},
]

export default routes;
