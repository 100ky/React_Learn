import './Example.css'
import { useState } from 'react';

const Example = () => {
    console.log(useState());
    const [tittle, setTittle] = useState("Můj první tittle");
    const [buttonText, setButtonText] = useState("Původní text");

    const buttonHandler = () => {
        setTittle("Nový text v Tittle");
    }
    const buttonHandler2 = () => {
        setTittle(" fsfasNový text v Tittle");
    }
    const buttonHandler3 = () => {
        setTittle(" ");
    }
    const buttonChange = () => {
        setButtonText(" Změněno");
    } 
    return (
        <>
        <h2> {tittle} </h2>
            <button type="button" onClick={buttonHandler}>Změnit tittle</button>
            <button type="button" onClick={buttonHandler2}>Opět Změnit tittle</button>
            <button type="button" onClick={buttonHandler3}>Delete ALL</button>
            <button type="button" onClick={buttonChange}>{buttonText} </button>
                
        </>

    )
}

export default Example;