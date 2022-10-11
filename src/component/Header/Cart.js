import React from 'react';
import { Nav, Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function Cart() {
    return (
        <Nav>
            <Dropdown align="end">
                <Dropdown.Toggle variant="success">
                    <FaShoppingCart color='white' fontSize='25px' />
                    <Badge bg="success">{0}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    )
}

export default Cart;