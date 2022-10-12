import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../config/api';
import { cartReducer } from '../Reducer/Reducers';

const Cart = createContext();

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, {
        products: {},
        cart: []
    });

    useEffect(() => {
        axios.get(`${baseURL}`)
            .then(res => {
                dispatch({
                    type: "FETCH_SUCCESS",
                    payload: res.data.products.data.items
                })
            })
            .catch(err => console.log(err))
    }, [])

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
