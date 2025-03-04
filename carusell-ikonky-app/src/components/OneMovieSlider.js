import "./OneMovieSlider.css";
import allMovies from "../Data";
import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const OneMovieSlider = () => {

    const [index, setIndex] = useState(0);
    const { image, title, description, tags, age } = allMovies[index];

    const nextMovie = () => {
        setIndex((index) => {
            const newIndex = index + 1;
            if (newIndex > allMovies.length - 1) {
                return 0;
            }
            return newIndex;
        });
    };

    const previousMovie = () => {
        setIndex((index) => {
            const newIndex = index - 1;
            if (newIndex < 0) {
                return allMovies.length - 1;
            }
            return newIndex;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextMovie();
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="movie-slider">
            <h1>{title} <span className="age-rating">{age}</span></h1>
            <img src={image} alt={title} />            
            <p>{description}</p>
            <div className="tags">{tags}</div>
            <div className="button-container">
                <button onClick={previousMovie}> <FaArrowAltCircleLeft /> </button>
                <button onClick={nextMovie}> <FaArrowAltCircleRight /> </button>
            </div>
        </div>
    );
};               

export default OneMovieSlider;