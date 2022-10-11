import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl } from 'react-bootstrap';

function SearchBar() {
    return (
        <>
            <Navbar.Text className='search'>
                <FormControl
                    style={{ width: 500 }}
                    placeholder='Search a product'
                    className='m-auto'
                />
            </Navbar.Text>
        </>
    )
}

export default SearchBar;