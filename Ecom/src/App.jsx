import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { store } from './Store';
import Head from './Component/Header';

const ProductApp = lazy(() => import('./ProductApp'));
const CartApp = lazy(() => import('./CartApp'));
const CheckoutApp = lazy(() => import('./CheckoutApp'));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Head />
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ProductApp />} />
              <Route path="/checkout" element={<CheckoutApp />} />
              <Route path="/cart" element={<CartApp />} />
            </Routes>
          </Suspense>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
