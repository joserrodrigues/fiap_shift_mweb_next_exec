import React from 'react';
import ProductView from './ProductView';

const ProductController = ({ product, statusConnection}) => {
    return (
        <ProductView product={product} statusConnection={statusConnection} />
    );
};

export default ProductController;