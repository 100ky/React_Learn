import "./Book.css";
import OrderButton from "./OrderButton";

const Book = () => {
    return (
        <div className="one-book"> 
            <h2 className="main-heading"> Název knihy</h2>
            <OrderButton></OrderButton>
        </div> 
    )
}
            
export default Book;
