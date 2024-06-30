import React, { lazy } from "react";
import style from "./Prdct.module.css";
import { Button, Col, Row } from "react-bootstrap";
import { useStore } from 'Ecom/store';

const Product = ({ getProduct }) => {
  const { addToCart } = useStore()
  return (
    <div className={`${style.prdctContainer} p-2 mb-3`}>
      <div>
        <img src={getProduct.image} alt={getProduct.category} width={100} height={120} />
      </div>
      <div className={style.prdctTitle}>
        <div to={`product/${getProduct.id}`}>{getProduct.title}</div>
      </div>
      <h3>₹ {getProduct.price}</h3>
      <Row>
        <Col sm={12}>
          <Button onClick={()=> addToCart({getProduct, prdctCount:1})}>Add to Cart</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
