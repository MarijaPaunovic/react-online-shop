import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { CartState } from "../../Context/Context";
import parse from 'html-react-parser';

const SingleProduct = ({ prod }) => {

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
                    <Card.Text>
                        {prod.description}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><b>Category:</b> {prod.category}</ListGroup.Item>
                        <ListGroup.Item><b>Subcategory:</b> {prod.subcategory}</ListGroup.Item>
                        <ListGroup.Item><b>Keywords:</b><br />{prod.keywords}</ListGroup.Item>
                        <ListGroup.Item><b>Features:</b>{featuresText}</ListGroup.Item>
                    </ListGroup>
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
                </Card.Body>
                <Card.Footer className="text-muted">{prod.url}</Card.Footer>
            </Card>
        </div>
    )
}

export default SingleProduct