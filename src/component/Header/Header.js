import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Cart from './Cart';

function Header() {
    return (
        <div className='header'>
            <Navbar bg="dark" variant='dark'>
                <Container>
                    <Logo />
                    <SearchBar />
                    <Cart />
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;