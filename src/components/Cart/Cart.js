import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const card = props.card;
    //console.log(props);
    // const total = card.reduce((total, prod) => total + prod.price * prod.quantity, 0);

    let total = 0;
    for (let i = 0; i < card.length; i++) {
        const product = card[i];
        total = total + product.price*product.quantity;

    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;

    }
    else if (total > 15) {
        shipping = 4.3;
    }
    else if (total > 0) {
        shipping = 12;
    }
    const tax = Math.round(total / 10);

    return (
        <div>
            <h4>Order Review</h4>
            <p>Item order: {card.length}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p>
                <smal> Tax + vat: {tax}</smal>
            </p>
            <p>Total price: {Math.round(total + shipping + tax)}</p>
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>

        </div>
    );
};

export default Card;