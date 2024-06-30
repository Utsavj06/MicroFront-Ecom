import React, { useEffect } from "react";
import style from "./Head.module.css";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Head = () => {
  // Selecting cart items from Redux state
  const cartItems = useSelector(state => state.cart.cartItems);

  // useEffect with dependency array to log cartItems only when it changes
  useEffect(() => {
    console.log('Cart items updated: ', cartItems);
  }, [cartItems]); // <-- Specify cartItems as a dependency

  console.log('Component rendered');

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
