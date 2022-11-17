import {useState, useEffect} from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { BackLink } from 'components/BackLink/BackLink';
import {LeftBar, MovieContainer, RightBar, AddInfoBar} from '../styled/Moves.styled'
import AddInfo from "../components/AdditionalInformation/AddInfo";
import NoFoto from '../Images/no_image.png';

function Move ({movie_id}) {
const [item, setItem] = useState('');
const [status, setStatus] = useState('idle');
const [posterpage, setPosterpage] = useState('');
const [original_title, setOriginal_title] = useState('');
const [popularity, setPopularity] = useState('');
const [overview, setOverview] = useState('');
const [genres, setGenres] = useState([]);
const location = useLocation();
const backLinkHref = location.state?.from ?? "/moves";


useEffect(()=>{
    let moveForFetch = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=30a2ce985f394458475cdee9944c725b&language`;
   
    async function moveItem () {
        setStatus('pending');
        await fetch(moveForFetch)
        .then(res=>{if(res.ok) {return res.json()} 
        return Promise.reject(new Error(`Can't find anything`))})
        .then(key => {
            setItem(key.id);
            setOriginal_title(key.original_title);
            setPosterpage(key.poster_path)
            setPopularity(key.popularity);
            setOverview(key.overview);
            setGenres(key.genres);
            setStatus('resolved');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    if(movie_id !== item){moveItem()} 
}
,[item, movie_id])

if (status ==='resolved') {
     return (
        <div>
    <MovieContainer>
        <LeftBar>
        <BackLink to={backLinkHref}>Back to list</BackLink>
        <div>
            <img src={(posterpage) ? `https://image.tmdb.org/t/p/original/${posterpage}` : NoFoto} style={{width:'300px' }} alt={original_title} />
        </div>
        </LeftBar>
        <RightBar>
            <h1>About movie:  {original_title}</h1>
            <h2>{popularity.toFixed(2)} %</h2>
                <div className='overView'> {overview}</div>
                <div>
                    <ul className='GanreMove'><h2>Ganre of Movie:</h2>
                    {genres.map(key=>(<li key={key.id}>{key.name}</li>))}
                    </ul>
                </div>
            <AddInfo/>
        </RightBar>
        </MovieContainer>
        <AddInfoBar>
        <Suspense fallback={<div className='loading'>Loading...</div>}>
            <Outlet />
        </Suspense>
        </AddInfoBar>
    </div>
)}}
    
export default Move