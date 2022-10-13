import React from 'react';
import { CartState } from '../../Context/Context';
import Filters from '../Filters/Filters';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {

    const {
        state: { products },
        productState: { sort, searchQuery, categorySearch },
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery) || prod.description.toLowerCase().includes(searchQuery)
            );
        }

        if (categorySearch) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.category.toLowerCase().includes(categorySearch)
            );
        }

        return sortedProducts;

    };

    return (
        <div className='home'>
            <Filters />
            <div className="productContainer">
                {products.length && transformProducts().map((prod) => (
                    <SingleProduct prod={prod} key={prod.id} />
                ))}
            </div>
        </div>
    )
}

export default Home;