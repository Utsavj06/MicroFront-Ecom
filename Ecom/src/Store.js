import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch } from 'react-redux';

const initialState = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {                 // Slice to Add Product in Cart
      const { ...item } = action.payload;

      const existItem = state.cartItems.find(
        (cart) => cart.getProduct.id === item.getProduct.id
      );

      if (!existItem) {
        state.cartItems = [...state.cartItems, item];
      } else {        
          state.cartItems.map((prdct) => {
            if(prdct.getProduct.id === item.getProduct.id){
            prdct.prdctCount += item.prdctCount;
            }
          });
      }
    },
    removeFromCart: (state, action) => {                   // Slice to remove Product from Cart
      state.cartItems = state.cartItems.filter((x) => x.getProduct.id !== action.payload.id);
    },
    decreasePrdct: (state, action) => {                    // Slice to Decrease the Quantity of Product from Cart
        const {...item} = action.payload

        state.cartItems.map((prdct)=>{
            if(prdct.getProduct.id === item.id){
              prdct.prdctCount -= 1
            }
        })
    },
    increasePrdct: (state, action) => {                    // Slice to Increase the Quantity of Product from Cart
        const {...item} = action.payload

        state.cartItems.map((prdct)=>{
            if(prdct.getProduct.id === item.id){
                prdct.prdctCount += 1
            }
        })
    }
  },
});

export const { addToCart, removeFromCart, decreasePrdct, resetCart, increasePrdct } =
  cartSlice.actions;

export const store = configureStore({
    reducer : {
        cart: cartSlice.reducer,
    },
})

export function useStore(){
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return {
        cart,
        addToCart: (item) => dispatch(addToCart(item)),
        removeFromCart: (item) => dispatch(removeFromCart(item)),
        decreasePrdct: (item) => dispatch(decreasePrdct(item)),
        increasePrdct: item => dispatch(increasePrdct(item))
    }
}

export function StoreProvider({children}){
    return <Provider store={store}>{children}</Provider>
}