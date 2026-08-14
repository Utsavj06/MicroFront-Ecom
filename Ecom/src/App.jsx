import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { StoreProvider } from './Store';
import Head from './Component/Header';

const ProductApp = lazy(() => import('./ProductApp'));
const CartApp = lazy(() => import('./CartApp'));
const CheckoutApp = lazy(() => import('./CheckoutApp'));

const App = () => {
  return (
    <StoreProvider>
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
    </StoreProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
