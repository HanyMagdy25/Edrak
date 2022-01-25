import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../Redux/MovieSlice';
import MovieCard from './MovieCard';




const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    let renderMovies = "";
    renderMovies = movies.Response === "True" ? (movies.Search.map((movie,index)=>(
    <MovieCard key={index} data={movie}/>
    ))) : (<div><h3>{movies.Error}</h3></div>)
    return (
        <div>
            <div>
          {renderMovies}

          </div>
        </div>
      );
  
};

export default MovieListing;
