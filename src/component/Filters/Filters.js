import React from 'react';
import { Button, Form } from "react-bootstrap";
import { CartState } from "../../Context/Context";
// import Rating from '../Rating/Rating';
import "./Filters.css";

const Filters = () => {

    const {
        productDispatch,
        productState: { sort },
    } = CartState();

    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Price Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() =>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "lowToHigh",
                        })
                    }
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Price Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() =>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "highToLow",
                        })
                    }
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Filter products by category"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_CATEGORY",
                        })
                    }

                />
            </span>
            <Button
                variant="light"
                onClick={() =>
                    productDispatch({
                        type: "CLEAR_FILTERS",
                    })
                }
            >
                Clear Filters
            </Button>
        </div>
    )
}

export default Filters;