import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMoviesDetails,
  getAllMovieDetails,
} from "../Redux/MovieSlice";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllMovieDetails);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMoviesDetails(imdbID));
  }, [dispatch, imdbID]);
  return (
    <div>
      <h1>{data.Title}</h1>
    </div>
  );
};

export default MovieDetails;
