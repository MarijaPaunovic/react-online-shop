import React from 'react';
import { FormControl, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <Navbar bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">
                        Online shop
                    </Navbar.Brand>
                    <Navbar.Text className='search'>
                        <FormControl
                            style={{ width: 500 }}
                            placeholder='Search a product'
                            className='m-auto'
                        />
                    </Navbar.Text>

                </Container>
            </Navbar>
        </div>
    )
}

export default Header;