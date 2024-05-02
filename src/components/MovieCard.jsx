import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie__card">
      <div>
        <div style={{ overflow: "hidden", height: "200px" }}>
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="movie-info">
          <div className="movie__card--titte">{movie.title} </div>
          <p className="movie__card--desc">{movie.descFilm}</p>
        </div>
      </div>
      <button type="button" className="btn btn-primary">
        <Link className="nav-link active" to={`/movieDetail/${movie.id}`}>
          Ver más
        </Link>
      </button>
    </div>
  );
};

export default MovieCard;
