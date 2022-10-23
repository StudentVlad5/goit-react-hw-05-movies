import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {StyledLi, NavItem, StyledSection, StyledTitle} from '../styled/TrendingMoves.styled';
// import PropTypes from 'prop-types';

function TrendingMoves ({setMove}) {
const [listTrendsMoves, setlistTrendsMoves] = useState([]);
const [status, setStatus] = useState('idle');
const location = useLocation();

useEffect(()=>{
    let itemForFetch = `https://api.themoviedb.org/3/trending/movie/day?api_key=30a2ce985f394458475cdee9944c725b`

    async function listOfTrendMoves () {
        setStatus('pending');
        await fetch(itemForFetch)
        .then(res=>{if(res.ok) {return res.json()} 
        return Promise.reject(new Error(`Can't find anything`))})
        .then(item => {
            setlistTrendsMoves(item.results);
            setStatus('resolved')
        })
        .catch(error=>{
            console.log(error);
        })
    }
    listOfTrendMoves() 
}
,[])

function moves (event) {let numberMove = event.target.dataset['key'];
setMove(numberMove)}

if (status ==='resolved') {return (
    <StyledSection>
        <StyledTitle>
            <h1>List of most trending moves for day:</h1>
        </StyledTitle>
        <div>
            <ul onClick={(event)=>{moves(event)}}> 
                {listTrendsMoves.map(({id,title, name}) =>(<StyledLi key={id}><NavItem to={`/moves/${id}`} data-key={id} state={{ from: location }}>{name ?? title}</NavItem></StyledLi>))}
            </ul>
        </div>
    </StyledSection>
)}}
    
export default TrendingMoves