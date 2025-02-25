import "./Movie.css";
import data from "../data";

const Movie = () => {
    return (
        <div className="all-movies">
            {data.map((oneMovie) => {
                const {id, title, age, image, tags, description} = oneMovie;
                    
                return <div className="one-movie" key={id}>
                    <img src={image} alt={title} />
                    <h2>{title}</h2>
                    <p className="age">{age}</p>
                    <p className="tags">{tags}</p>
                    <p className="description">{description}</p>
                </div>
            })}
        </div>
    )
}

export default Movie;