import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector, useDispatch } from 'react-redux';

const initialState = { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(cart => cart.getProduct.id === item.getProduct.id);

      if (!existItem) {
        state.cartItems.push(item);
      } else {
        state.cartItems = state.cartItems.map(prdct =>
          prdct.getProduct.id === item.getProduct.id
            ? { ...prdct, prdctCount: prdct.prdctCount + item.prdctCount }
            : prdct
        );
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(x => x.getProduct.id !== action.payload.id);
    },
    decreasePrdct: (state, action) => {
      state.cartItems = state.cartItems.map(prdct =>
        prdct.getProduct.id === action.payload.id
          ? { ...prdct, prdctCount: prdct.prdctCount - 1 }
          : prdct
      );
    },
    increasePrdct: (state, action) => {
      state.cartItems = state.cartItems.map(prdct =>
        prdct.getProduct.id === action.payload.id
          ? { ...prdct, prdctCount: prdct.prdctCount + 1 }
          : prdct
      );
    },
  },
});

export const { addToCart, removeFromCart, decreasePrdct, increasePrdct } = cartSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistor = persistStore(store);

export function useStore() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return {
    cart,
    addToCart: item => dispatch(addToCart(item)),
    removeFromCart: item => dispatch(removeFromCart(item)),
    decreasePrdct: item => dispatch(decreasePrdct(item)),
    increasePrdct: item => dispatch(increasePrdct(item)),
  };
}

export function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
