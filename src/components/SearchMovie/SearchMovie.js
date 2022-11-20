import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {StyledLi, NavItem, StyledSection, StyledTitle} from '../../styled/TrendingMoves.styled';


function SearchMovie ({searchMovie, setMove}) {
    const [list, setList] = useState([]);
    const [searhNameMovie, setsearhNameMovie] = useState('');
    const [status, setStatus] = useState('idle');
    const [total_results, setTotal_results] = useState(0);

    const location = useLocation();

    useEffect(()=>{
        
        let listForFetch = `https://api.themoviedb.org/3/search/movie?api_key=30a2ce985f394458475cdee9944c725b&page=1&query=${searchMovie}&sort_by=popularity.desc`;
    
        async function moveList () {
            setStatus('pending');
            await fetch(listForFetch)
            .then(res=>{if(res.ok) {return res.json()} 
            return Promise.reject(new Error(`Can't find anything`))})
            .then(key => {
                setsearhNameMovie(searchMovie);
                setList(key.results);
                setTotal_results(key.total_results);
                setStatus('resolved');
            })
            .catch(error=>{
                console.log(error);
            })
        }
        if(searhNameMovie !== searchMovie && searchMovie !=='') {moveList()} 
    }
    ,[searchMovie, searhNameMovie])

    function moves (event) {let numberMove = event.target.dataset['key'];
    setMove(numberMove)}


    if (status ==='resolved') {return (      
    <StyledSection>
        <StyledTitle>
            <h1>List of  moves: {total_results}</h1>
        </StyledTitle>
        <ul onClick={(event)=>{moves(event)}}>
            {list.map(({id,title}) =>(<StyledLi key={id}><NavItem to={`/moves/${id}`} data-key={id} state={{from: location}}>{title}</NavItem></StyledLi>))}
        </ul>
    </StyledSection>

    )}}

export default SearchMovie

