import React, { useState } from "react";
import ReactDOM from 'react-dom'
import styles from "./Checkout.module.css";
import { StoreProvider, useStore } from "Ecom/store";

export const Checkout = () => {
  const { cart } = useStore();
  const {cartItems} = cart;
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });


  // const cartItems = [
  //   { getProduct : {id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, category: "men's clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'},
  //     prdctCount : 3 },
  // ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.getProduct.price * item.prdctCount,
      0
    );
  };

  return (
    <div className={styles.checkoutPage}>
      <h1>Checkout</h1>
      <form className={styles.formSubmit} onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>

      <div className={styles.cartSummary}>
        <h2>Order Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.getProduct.title} x {item.prdctCount} - ₹{item.getProduct.price * item.prdctCount}
            </li>
          ))}
        </ul>
        <h3>Total: ₹{calculateTotal()}</h3>
      </div>
    </div>
  );
};

function mount(el) {
    if(el) {
      ReactDOM.render(<StoreProvider><Checkout /></StoreProvider>, el);
    }
  }
  
  if(process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#header")
    if(devRoot)
      mount(devRoot);
  }
  
  export { mount };
