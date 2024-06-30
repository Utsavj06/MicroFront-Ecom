import React from "react";
import { Link } from 'react-router-dom';
import { useStore } from "Ecom/store";
import style from "./cart.module.css";
import { Button, Col, Row } from "react-bootstrap";

const Cart = () => {
  const { cart, decreasePrdct, increasePrdct, removeFromCart } = useStore();
  const { cartItems } = cart;
  const prodctPrce = (prodct) => {
    return prodct.getProduct.price * prodct.prdctCount;
  }
  
  return (
    <>
      {cartItems.map((items, index) => {
        return (
          <Row className={style.prdctList} key={index}>
            <Col sm={3} className="d-flex justify-content-center">
              <img src={items.getProduct.image} alt={index} width={120} />
            </Col>
            <Col xs={6} className="d-flex align-items-center flex-column">
              <div className="mb-4">{items.getProduct.title}</div>
              <div className={style.prdctPrce}>
                <h6>Price : ₹ {items.getProduct.price}</h6>
                Quant
                <div
                  className={`${items.prdctCount === 1 && style.disablediv}`}
                  onClick={() => decreasePrdct(items.getProduct)}
                >
                  -
                </div>
                {items.prdctCount}
                <div onClick={() => increasePrdct(items.getProduct)}>
                  +
                </div>
              </div>
            </Col>
            <Col sm={3} xs={6} className="d-flex align-items-center flex-column">
              <p>Total Product Price:</p>
              <h3>₹ {prodctPrce(items).toFixed(2)}</h3>
            </Col>
            <Col sm={12} className="d-flex justify-content-center mt-3">
              <Button onClick={() => removeFromCart(items.getProduct)}>Delete Product</Button>
            </Col>
          </Row>
        );
      })}
      {cartItems.length>0 && <Link to='/checkout'>
        <Button>Proceed to Checkout</Button>
      </Link>}
    </>
  );
};

export default Cart;

