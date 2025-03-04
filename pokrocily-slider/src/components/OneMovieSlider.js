import "./OneMovieSlider.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import data from "../data";

const OneMovieSlider = () => {
    const [index, setIndex] = useState(0);


    return (
        <section className="All-movies">
            <div className="All-movies-content">
                {data.map((oneMovie, oneMovieIndex) => {
                    const { id, image, title, description, tags, age } = oneMovie;

                    let mainClass = "next-slide";

                    if (oneMovieIndex === index) {
                        mainClass = "active-slide";
                    }

                    if (oneMovieIndex === index - 1 || (index === 0 && oneMovieIndex === data.length - 1)) {
                        mainClass = "last-slide";
                    }
                    return <article key = {id} className={mainClass}>
                        <img src={image} alt="" />
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <p> {tags}</p>
                        <p>{ age }</p>
                    </article>
                })}
            </div>
            <button className="prev-btn"> <FaArrowAltCircleLeft /> </button>
            <button className="next-btn"> <FaArrowAltCircleRight /> </button>


        </section>
    )
}

export default OneMovieSlider;