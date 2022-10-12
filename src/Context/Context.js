import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../config/api';
import { cartReducer, productReducer } from '../Reducer/Reducers';

const Cart = createContext();

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, {
        products: {},
        cart: []
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        searchQuery: "",
    });

    // console.log(productState);

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
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider>
    )
}

export const CartState = () => {
    return useContext(Cart);
};

export default Context;
