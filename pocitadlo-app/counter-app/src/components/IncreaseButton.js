import "./IncreaseButton.css";

const IncreaseButton = (props) => {
    return (
        <button onClick={props.increase}>Zvýšit o jeden</button>
    );
}

export default IncreaseButton;