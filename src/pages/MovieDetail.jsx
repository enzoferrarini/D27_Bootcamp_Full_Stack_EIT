import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://6632b107f7d50bbd9b472503.mockapi.io/movies/?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Error al cargar los datos.");
        }
        const data = await response.json();
        const filteredObjects = data.filter((obj) => obj.id === parseInt(id));
        setMovie(filteredObjects[0]);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="content__container">
      {!movie ? (
        <h1>Cargando detalle...</h1>
      ) : (
        <>
          <div className="alert alert-light text-center" role="alert">
            <h4 className="alert-heading">
              Película: <strong>{movie.title}</strong>
            </h4>
            <hr />
            <div className="movie__detail">
              <img src={movie.poster} alt={movie.title} />
              <p className="mb-0 p-20">
                <strong>Descripción: </strong> {movie.descFilm} <br />
                <strong>Año: </strong> {movie.year}
                <br />
                <strong>Imdb: </strong> {movie.imdb}
              </p>
            </div>
            <button type="button" className="btn btn-primary">
              <Link className="nav-link active" to={"/movies"}>
                Volver
              </Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
