import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWatchlist, removeFromWatchlist } from '../Redux/MovieSlice';

const MovieCard = (props) => {
  const dispatch = useDispatch()
    const {data} = props
    const handleAddTowatch =(data)=>{
      dispatch(addToWatchlist(data))
    }
    // const handleRemoveFromwatch =(data)=>{
      
    //   dispatch(removeFromWatchlist(data));
    // }
  return <div>
    {/* <Link to={`/movie/${data.imdbID}`}> */}
      <div className='media'>
            <img className='poster' src={data.Poster} alt={data.Title}/>
            <p className='title'>{data.Title} ({data.Year})</p>
            <button onClick={()=> handleAddTowatch(data)}>Add To </button>
            {/* <button onClick={()=> dispatch(removeFromWatchlist({watchId: data.imdbID}))}>remove </button> */}
            <span className='type'>{data.Type}</span>
            
        </div>
    {/* </Link> */}
      
      
  </div>;
};

export default MovieCard;
