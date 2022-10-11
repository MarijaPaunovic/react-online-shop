import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <Navbar bg="light" variant='light'>
                <Container>
                    <Navbar.Brand href="#home">
                        Online shop
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;