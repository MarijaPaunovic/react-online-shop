import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Navbar.Brand>
            <Link to='/' className='link hover-link' >Online shop</Link>
        </Navbar.Brand>
    )
}

export default Logo;