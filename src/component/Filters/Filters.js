import React from 'react';
import { Form } from "react-bootstrap";
import { CartState } from "../../Context/Context";

const Filters = () => {

    const {
        productState: { sort },
        productDispatch
    } = CartState();

    // console.log({sort});

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
                    name="group2"
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
                <Form.Control
                    placeholder="Filter products by category"
                    type="text"
                    id={`inline-3`}
                    onChange={(e) =>
                        productDispatch({
                            type: "FILTER_BY_CATEGORY",
                            payload: e.target.value,
                        })
                    }
                />
            </span>
        </div>
    )
}

export default Filters;