import "./AllDeleteButton.css";

const AllDeleteButton = (props) => { 
    return (
        <button className="main-delete-button" onClick = {props.deleteMovie}>Vymazat všechny filmy</button>
    )
}
export default AllDeleteButton;