import "./Book.css";
import OrderButton from "./OrderButton";

const Book = (props) => {
    return (
        <div className="one-book"> 
            <img src={props.myimage} alt="Harry Potter a Kámen mudrců" className="book-image"></img>
            <h2 className="main-heading"> {props.mytitle}</h2>
            <OrderButton></OrderButton>
        </div> 
    )
}
            
export default Book;
