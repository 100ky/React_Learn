import "./Movie.css";
import data from "../data";
import MovieDeleteButton from "./MovieDeleteButton";
import AllDeleteButton from "./AllDeleteButton";
import ReloadMovieButton from "./ReloadMovieButton";
import { useState } from "react";

const Movie = () => {
    const  [movieList, setMovieList] = useState(data);

    const deleteOneMovie = (idecko) => {
        const filtredMovies = movieList.filter ((oneMovie) => {
            return oneMovie.id !== idecko
        })
        setMovieList(filtredMovies);
    }
    
    const deleteAllMovies = () => {
        setMovieList([]);
    }

    const reloadMovies = () => {
        setMovieList(data);
    }

    return (
    <section>
        <div className="all-movies">
            {movieList.map((oneMovie) => {
                const {id, title, age, image, tags, description} = oneMovie;
                    
                return <div className="one-movie" key={id}>
                    <img src={image} alt={title} />
                    <h2>{title}</h2>
                    <p className="age">{age}</p>
                    <p className="tags">{tags}</p>
                    <p className="description">{description}</p>
                    <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} /> 
                </div>
            })}
        </div>
                <div>
                <AllDeleteButton deleteMovie={deleteAllMovies} />
                <ReloadMovieButton reloadMovie={reloadMovies} />
                </div>
    </section>
    )
}

export default Movie;