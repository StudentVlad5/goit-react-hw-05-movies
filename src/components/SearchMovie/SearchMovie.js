import {useState, useEffect} from 'react';
import {StyledLi, NavItem, StyledSection, StyledTitle} from '../../styled/TrendingMoves.styled';
import { useLocation } from 'react-router-dom';


function SearchMovie ({searchMovie, setMove}) {
    const [list, setList] = useState([]);
    const [searhNameMovie, setsearhNameMovie] = useState('');
    const [status, setStatus] = useState('idle');

    const location = useLocation();

    useEffect(()=>{
        let listForFetch = `https://api.themoviedb.org/3/search/movie?api_key=30a2ce985f394458475cdee9944c725b&page=1&query=${searchMovie}`;
    
        async function moveList () {
            setStatus('pending');
            await fetch(listForFetch)
            .then(res=>{if(res.ok) {return res.json()} 
            return Promise.reject(new Error(`Can't find anything`))})
            .then(key => {
                setsearhNameMovie(searchMovie);
                setList(key.results);
                setStatus('resolved');
            })
            .catch(error=>{
                console.log(error);
            })
        }
        if(searhNameMovie !== searchMovie){moveList()} 
    }
    ,[searchMovie, searhNameMovie])

    function moves (event) {let numberMove = event.target.dataset['key'];
    setMove(numberMove)}


    if (status ==='resolved') {return (      
    <StyledSection>
        <StyledTitle>
            <h1>List of  moves: </h1>
        </StyledTitle>
        <ul onClick={(event)=>{moves(event)}}>
            {list.map(({id,title}) =>(<StyledLi key={id}><NavItem to={`/moves/${id}`} data-key={id} state={{from: location}}>{title}</NavItem></StyledLi>))}
        </ul>
    </StyledSection>

    )}}

export default SearchMovie

