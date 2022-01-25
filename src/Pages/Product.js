import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies} from '../Redux/MovieSlice';
// import MovieCard from './MovieCard';
import MovieListing from './MovieListing';


const Product = () => {
  
  let dispatch = useDispatch();
  const searchInit = "batman"
  useEffect(()=>{
    dispatch(fetchAsyncMovies(searchInit))
  },[dispatch]);
  // هنا كأننا فى ال movieListing 
  // const movies = useSelector(getAllMovies)
  // let renderMovies = "";
  // renderMovies = movies.Response === "True" ? (movies.Search.map((movie,index)=>(
  //   <MovieCard key={index} data={movie}/>
  // ))) : (<div><h3>{movies.Error}</h3></div>)
  return (
    <div>
      <MovieListing/>
    </div>
  );
};

export default Product;

// export default MovieList
