import React, { useRef, useEffect } from "react";
import { mount } from "Cart/Cart";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    })
    return <><div ref={ref}/><Link to='/checkout'><Button>Proceed to Checkout</Button></Link></>
}