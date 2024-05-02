
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesApp from './routes/RoutesApp';
import "./styles/App.css";

const App = () => {

  // const [movies, setMovies] = useState([
  //   { id: 1, title: 'Pelicula 1', description: 'Descripción de la Pelicula 1', genre: 'Género 1', duration: '2h 30min', image: 'url_imagen_1' },
  //   { id: 2, title: 'Pelicula 2', description: 'Descripción de la Pelicula 2', genre: 'Género 2', duration: '1h 45min', image: 'url_imagen_2' },
  //   // Agrega más películas aquí
  // ]);


  return (
    <>
        <RoutesApp/>
    </>
  )
};

export default App;