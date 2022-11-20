import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import { lazy } from "react";
import Home from './Home/Home';
import TrendingMoves from '../Pages/TrendingMoves';
import Searchbar from '../Pages/SeachBar';
import Move from '../Pages/Moves';
import AppBar from './AppBar/AppBar';
import NotFound from '../Pages/NotFind';

const Reviews = lazy(() => import('../components/AdditionalInformation/Reviews'));
const Credits = lazy(() => import('./AdditionalInformation/Credits'));

export const App = () => {

  // eslint-disable-next-line no-unused-vars
  let [movie_id, setMovie_Id] = useState('');

  function setMove (itemMove) {
      setMovie_Id((movie_id)=> movie_id = itemMove)
    }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '40px 80px',
        color: '#010101'
      }}
    >
    
    <Routes>
          <Route path='/' element={<AppBar/>}>
          {/* <Route index element={<TrendingMoves setMove={setMove}/>} /> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/top_movies/page=:pageNumber' element={<TrendingMoves setMove={setMove}/>}/>
          <Route path='moves' element={<Searchbar setMove={setMove}/>}/>
          <Route path='moves/:movie_id' element={<Move setMove={setMove}/>}>
                <Route path='credits' element={<Credits />}/>
                <Route path='rewier' element={<Reviews />}/>
            </Route>
          </Route>
        <Route path='*' element={<NotFound/>}/>
    </Routes>

    </div>
  );
};


// API ключ (v3 auth)
// 30a2ce985f394458475cdee9944c725b
// Приклад API-запиту
// https://api.themoviedb.org/3/movie/550?api_key=30a2ce985f394458475cdee9944c725b
// Токен доступу для читання API (v4 auth)
