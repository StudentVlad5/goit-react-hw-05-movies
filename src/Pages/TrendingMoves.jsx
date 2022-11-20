import {useState, useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
// import PropTypes from 'prop-types';
import {StyledLi, NavItem, StyledSection, StyledTitle, NumberPage, NavNumber} from '../styled/TrendingMoves.styled';

function TrendingMoves ({setMove}) {
const [listTrendsMoves, setlistTrendsMoves] = useState([]);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [status, setStatus] = useState('idle');
const location = useLocation();
const { pageNumber } = useParams();


useEffect(()=>{
    let itemForFetch = `https://api.themoviedb.org/3/trending/movie/day?page=${page}&api_key=30a2ce985f394458475cdee9944c725b&sort_by=popularity.desc`

    async function listOfTrendMoves () {
        setStatus('pending');
        await fetch(itemForFetch)
        .then(res=>{if(res.ok) {return res.json()} 
        return Promise.reject(new Error(`Can't find anything`))})
        .then(item => {
            setlistTrendsMoves(item.results);
            setTotalPages(item.total_pages);
            setPage(item.page);
            console.log('pageNumber: ', pageNumber, 'page: ',page);
            setStatus('resolved')
        })
        .catch(error=>{
            console.log(error);
        })
    }
    if(pageNumber !== page) {listOfTrendMoves()}
}
,[page, pageNumber])


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
            <div>
                <NumberPage>
                    {page > 1 && <NavNumber to={`/top_movies/page=${page}`}> <FaArrowAltCircleLeft onClick={()=>setPage(page=>page-1)}style={{fontSize: '50px' , fill:'rgba(84,78,114,1)'}}/> </NavNumber>}
                    <span style={{fontSize: '50px' , color:'rgba(84,78,114,1)', padding: '40px'}}>{page} of {totalPages}</span>
                    {page < totalPages && <NavNumber to={`/top_movies/page=${page}`}><FaArrowAltCircleRight onClick={()=>setPage(page=>page+1)} style={{fontSize: '50px' , fill:'rgba(84,78,114,1)'}}/></NavNumber>}
                </NumberPage>
            </div>
        </div>
    </StyledSection>
)}}
    
export default TrendingMoves