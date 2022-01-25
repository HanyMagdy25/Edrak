import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (search) => {
  // let query = "batman";
  const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=d8dac6a8`);
    const data = await response.json();
      
    console.log(data.Search);
    return data;
})

export const fetchAsyncMoviesDetails = createAsyncThunk("movies/fetchAsyncMoviesDetails", async (id) => {
  // let query = "batman";
  const response = await fetch(`http://www.omdbapi.com/?&apikey=d8dac6a8&i=${id}&Plot=full`);
    const data = await response.json();
      
    console.log(data.Search);
    return data;
})

const initialState = {
  movies:[],
  watchList:[],
  selectedMovie:{}
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state,{payload}) => {
      state.movies = payload
    },
    addToWatchlist: (state,action) => {
      state.watchList.push(action.payload);
    },
    removeFromWatchlist: (state,action) => {
      state.watchList = state.watchList.filter(
        (item) => item.id !== action.payload.watch.id
      );
      // state.watchList = nextWatchList
    },
    
  },
  extraReducers:{
    [fetchAsyncMovies.pending]:()=>{
      console.log("pending")
    },
    [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
      console.log("fulfilled");
      return{...state, movies:payload}
    },
    [fetchAsyncMovies.rejected]:()=>{
      console.log("rejected");
      
    },
    [fetchAsyncMoviesDetails.fulfilled]:(state,{payload})=>{
      console.log("MoviesDetails fulfilled success");
      return{...state, selectedMovie:payload} //this for init state
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { addMovie,addToWatchlist ,removeFromWatchlist } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies;
export const getAllMovieDetails = (state) => state.movies.selectedMovie;
export const getWatchList = (state) => state.movies.watchList;
// export const removeFromWatchlist = (state) => state.movies.watchList;
export default movieSlice.reducer