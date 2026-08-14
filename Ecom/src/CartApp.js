import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CartItem from "Cart/Cart";

export default () => (
    <>
        <CartItem />
        <Link to='/checkout'>
            <Button>Proceed to Checkout</Button>
        </Link>
    </>
);