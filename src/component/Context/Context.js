import React, { createContext } from 'react';
import axios from 'axios';
import { baseURL } from '../config/api';

const Cart = createContext();

const Context = ({ children }) => {

    const fetchData = async () => {
        const { data } = await axios.get(`${baseURL}`);

        console.log(data.products.data.items);
    };

    fetchData();



    return (
        <Cart.Provider value={{}}>
            {children}
        </Cart.Provider>
    )
}

export default Context;