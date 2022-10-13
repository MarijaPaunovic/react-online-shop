import React from 'react';
import {
    Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Logo from './Logo';
import { CartState } from "../../Context/Context";
import './Header.css';

function Header() {

    const {
        state: { cart },
        dispatch,
        productDispatch,
    } = CartState();

    return (
        <div className='header'>
            <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
                <Container>
                    <Logo />
                    {useLocation().pathname.split("/")[1] !== "cart" && (
                        <Navbar.Text className="search">
                            <FormControl
                                style={{ width: 500 }}
                                type="search"
                                placeholder="Search a product..."
                                className="m-auto"
                                aria-label="Search"
                                onChange={(e) => {
                                    productDispatch({
                                        type: "FILTER_BY_SEARCH",
                                        payload: e.target.value,
                                    });
                                }}
                            />
                        </Navbar.Text>
                    )}
                    <Nav>
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="success">
                                <FaShoppingCart color="white" fontSize="25px" />
                                <Badge bg="success">{cart.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ minWidth: 370 }}>
                                {cart.length > 0 ? (
                                    <>
                                        {cart.map((prod) => (
                                            <span className="cartItem" key={prod.id}>
                                                <img
                                                    src={prod.images && prod.images.slice(0, 1).map(img => img)}
                                                    className="cartItemImg"
                                                    alt={prod.name}
                                                />
                                                <div className="cartItemDetail">
                                                    <span>{prod.name}</span>
                                                    <span>$ {prod.price}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod,
                                                        })
                                                    }
                                                />
                                            </span>
                                        ))}
                                        <Link to="/cart">
                                            <Button style={{ width: "95%", margin: "0 10px" }}>
                                                Go To Cart
                                            </Button>
                                        </Link>
                                    </>
                                ) : (
                                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
};

export default Header;