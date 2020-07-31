import Film        from './components/Film';
import Radnom      from './components/Radnom';
import FilmDetails from './components/FilmDetails';

const routes = [
    {path: '/', redirect: '/main'},
    {path: '/main', name: 'main', component: Film},
    {path: '/random', name: 'random', component: Radnom},
    {path:'/main/:filmId/:genre', name:'details',component: FilmDetails,props:true}
]

export default routes;
