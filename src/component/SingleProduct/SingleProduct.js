import React, { useState } from 'react';
import { Card, ListGroup, Button, Container, Modal } from 'react-bootstrap';
import { CartState } from "../../Context/Context";
import parse from 'html-react-parser';
import { BsArrowRightCircleFill } from "react-icons/bs";

const SingleProduct = ({ prod }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        state: { cart },
        dispatch,
    } = CartState();

    const featuresText = parse(prod.features);

    return (
        <div className='products'>
            <Card>
                {
                    prod.images && prod.images.slice(0, 1).map((images, i) => <Card.Img variant="top" src={images} alt={prod.name} key={i} />)
                }
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>$ {prod.price}</span>
                    </Card.Subtitle>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><b>Category:</b> {prod.category}</ListGroup.Item>
                    </ListGroup>
                    <Card.Text>
                        {prod.description}
                    </Card.Text>

                    <div className="d-grid gap-2">
                        {cart.some((p) => p.id === prod.id) ? (
                            <Button
                                variant="danger"
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod,
                                    })
                                }
                            >
                                Remove from Cart
                            </Button>
                        ) : (
                            <Button
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
                                    })
                                }
                            >
                                Add to Cart
                            </Button>
                        )}

                        <Button variant="info" onClick={handleShow} align="end">
                            See more
                            <BsArrowRightCircleFill style={{ marginLeft: '10px' }} />
                        </Button>
                    </div>

                    <Modal show={show} onHide={handleClose}>

                        <Modal.Header closeButton>
                            <Modal.Title>{prod.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Container>
                                {
                                    prod.images && prod.images.slice(0, 1).map((images, i) => <Card.Img variant="top" src={images} alt={prod.name} key={i} />)
                                }
                                <Card.Title><span>$ {prod.price}</span></Card.Title>
                                <Card.Subtitle style={{ paddingBottom: 10 }}>
                                    {prod.description}
                                </Card.Subtitle>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><b>Category:</b> {prod.category}</ListGroup.Item>
                                    <ListGroup.Item><b>Subcategory:</b> {prod.subcategory}</ListGroup.Item>
                                    <ListGroup.Item><b>Keywords:</b><br /> {prod.keywords}</ListGroup.Item>
                                    <ListGroup.Item><b>Features:</b> {featuresText}</ListGroup.Item>
                                    <ListGroup.Item><b>URL:</b> {prod.url}</ListGroup.Item>
                                </ListGroup>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            {cart.some((p) => p.id === prod.id) ? (
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                        })
                                    }
                                >
                                    Remove from Cart
                                </Button>
                            ) : (
                                <Button
                                    onClick={() =>
                                        dispatch({
                                            type: "ADD_TO_CART",
                                            payload: prod,
                                        })
                                    }
                                >
                                    Add to Cart
                                </Button>
                            )}
                        </Modal.Footer>

                    </Modal>

                </Card.Body>

            </Card>
        </div>
    )
}

export default SingleProduct;