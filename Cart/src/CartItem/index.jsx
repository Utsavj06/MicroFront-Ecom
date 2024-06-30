import React from 'react'
import ReactDOM from 'react-dom'
import Cart from './Cart'
import { BrowserRouter, Link } from 'react-router-dom';
import Amount from './Amount'
import { StoreProvider } from "Ecom/store";

const CartItem = () => {
  return (
    <div>
        <Amount />
        <Cart />
    </div>
  )
}

export default CartItem;

function mount(el) {
  if (el) {
    ReactDOM.render(<StoreProvider><BrowserRouter><CartItem /></BrowserRouter></StoreProvider>, el);
  }
}

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#cart")
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };