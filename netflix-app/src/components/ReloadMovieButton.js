import "./ReloadMovieButton.css";

const ReloadMovieButton = (props) => {
    return (
        <button className="main-reload-button" onClick = {props.reloadMovie}>Načíst filmy</button>
    )
}

export default ReloadMovieButton;