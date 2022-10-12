import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { baseURL } from '../config/api';
import { cartReducer } from '../Reducer/Reducers';

const Cart = createContext();

const Context = ({ children }) => {

    const products = axios.get(`${baseURL}`)
        .then(res => res.data.products.data.items)
        .catch(err => console.log(err))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}

export const CartState = () => {
    return useContext(Cart);
};

export default Context;
