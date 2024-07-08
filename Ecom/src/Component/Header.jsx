import React from "react";
import style from "./Head.module.css";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Head = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <header className={`${style.AppHeader} d-flex mb-4`}>
      <Container className="d-flex justify-content-between align-items-center position-relative">
        <div className="mx-auto"><Link to={'/'}>Fake ECOM</Link></div>
        <div className={`position-absolute ${style.cart}`}>
          <Link to='/cart'>Cart</Link>
          {cartItems.length > 0 && <span className={`${style.cartCount}`}>{cartItems.length}</span>}
        </div>
      </Container>
    </header>
  );
};

export default Head;
