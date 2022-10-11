import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import SearchBar from './SearchBar';
import Cart from './Cart';

function Header() {
    return (
        <div className='header'>
            <Navbar bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">
                        Online shop
                    </Navbar.Brand>
                    <SearchBar />
                    <Cart />
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;