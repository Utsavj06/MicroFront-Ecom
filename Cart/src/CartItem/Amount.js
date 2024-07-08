import React, { useEffect, useState } from 'react';
import style from './cart.module.css'
import { useStore } from "Ecom/store";

const Amount = () => {
  const [totlAmount, setTotlAmount] = useState(0);
  const { cart } = useStore();
  
  useEffect(() => {
    let total = 0;
    cart.cartItems.forEach((item) => {
      total += item.getProduct.price * item.prdctCount;
    });
    setTotlAmount(total);
  }, [cart.cartItems]);

  return (
    <div className='text-center'>
        {totlAmount ? 
        <>
          <h3 className='d-inline-block'>Total Amount: </h3>
          <span className={`${style.totleAmount}`}>&nbsp;{totlAmount.toFixed(2)}</span>
        </> 
            :
        <h2>No Product</h2>}
    </div>
  )
}

export default Amount;