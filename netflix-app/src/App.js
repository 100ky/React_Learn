import { useState } from 'react';
import allMovies from './data';
import categories from './categories';
import MovieDeleteButton from './components/MovieDeleteButton';
import AllDeleteButton from './components/AllDeleteButton';
import ReloadMovieButton from './components/ReloadMovieButton';
import "./index.css";

const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState("komedie");
  const [movieList, setMovieList] = useState(allMovies);

  const vysledneFilmy = movieList.filter((oneMovie) => {
    return oneMovie["category"] === typeOfMovie;
  });

  const deleteOneMovie = (idecko) => {
    const filteredMovies = movieList.filter((oneMovie) => {
      return oneMovie.id !== idecko;
    });
    setMovieList(filteredMovies);
  };

  const deleteAllMovies = () => {
    setMovieList([]);
  };

  const reloadMovies = () => {
    setMovieList(allMovies);
  };

  return (
    <div>
      <div className="all-buttons">
        {categories.map((oneCategory, index) => (
          <button
            className="one-button"
            key={index}
            onClick={() => setTypeOfMovie(oneCategory)}
          >
            {oneCategory}
          </button>
        ))}
      </div>

      <div className="control-buttons">
        <AllDeleteButton deleteMovie={deleteAllMovies} />
        <ReloadMovieButton reloadMovie={reloadMovies} />
      </div>

      <div className="all-movies">
        {vysledneFilmy.length > 0 ? (
          vysledneFilmy.map((oneMovie) => {
            const { id, image, title, age, tags, description } = oneMovie;

            return (
              <div className="one-movie" key={id}>
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p className="age">{age}</p>
                <p className="tags">{tags}</p>
                <p className="description">{description}</p>
                <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} />
              </div>
            );
          })
        ) : (
          <p className="no-movies">Žádné filmy k zobrazení</p>
        )}
      </div>
    </div>
  );
};

export default App;