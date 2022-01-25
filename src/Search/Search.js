import React,{useState , useEffect} from 'react';
import Movies from '../Movies/Movies';

import './Search.css';

const Search = () => {

//const MOVIES_API = `http://www.omdbapi.com/?i=tt3896198&apikey=d8dac6a8`;
  const [movies , setMovies] = useState([]);
  const [search, setsearch] = useState("")
  const [query, setquery] = useState("batman")
  useEffect(()=>{
    const getMovies = async  () => {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=d8dac6a8`);
      const data = await response.json();
      setMovies(data.Search);
      console.log(data.Search);
    }
    getMovies()
  },[query]);

  const updateSearch = (e) =>{
    setsearch(e.target.value);
    console.log(setsearch)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setquery(search);
  }

    return (
    <div>
    
      
      <form className="form-control" onSubmit={getSearch}>
        <input type='text' className="search-bar" onChange={updateSearch} />
        <button className='search-btn'>search</button>
      </form>
      <div className='movies'>
          {movies.map(movie => (
            <Movies 
            key={movie.imdbID}
            title={movie.Title}
            image={movie.Poster}
            year = {movie.Year}
            type = {movie.Type}
            />
          ))}
      </div>
    </div>
    )
}

export default Search