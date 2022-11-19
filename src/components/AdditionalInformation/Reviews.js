import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

function Reviews () {
    const [status, setStatus] = useState('idle'); 
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);
    const [total_results, setTotal_results] = useState(0);
    const { movie_id } = useParams();


    useEffect(()=>{
        let reviewsForFetch = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=30a2ce985f394458475cdee9944c725b&language=en-US&page=1`
      
        async function reviewsItem () {
            setStatus('pending');
            setItem(movie_id);
            await fetch(reviewsForFetch)
            .then(res=>{if(res.ok) {return res.json()} 
            return Promise.reject(new Error(`Can't find anything`))})
            .then(key => {
                setStatus('resolved');
                setList(key);
                setTotal_results(key.total_results);
            })
            .catch(error=>{
                console.log(error);
            })
        }
        if(movie_id !== item){reviewsItem()} 
    }
    ,[item, movie_id])

    if(status ==='resolved') {return (
        <><h2>Reviews :</h2>
            <ul className='ListOfReviews'>
                { (total_results === 0) ? (<li className='EmptyCast'>Don't have any review yet</li>) : 
                (list.results.map(({author, content, id}) =>(
                    <li key={id} className='ReviewsCast'><p className='Author'>{author}</p><p>{content}</p></li>)))        
                }
            </ul>
        </>
    )
    }
}

export default Reviews