import React from 'react';
import ProductController from '../../src/Screens/Product/ProductController';
import news from '../../src/Services/Apis/Info/news';

const Product = ({ product, statusConnection }) => {
    return (
        <ProductController product={product} statusConnection={statusConnection}/>
    );
};
export default Product;


export async function getStaticProps({ params: {id} }) {

    console.log("Inicio SSR getStaticProps");

    const info = await news.getProduct(id);
    let infoProduct = {};

    if (info.status === 200) {
        infoProduct = info.data.info;
    }

    return {
        props: {
            product: infoProduct,
            statusConnection: info.status
        }
    }
}

export async function getStaticPaths() {
    return {
        paths:
            [{ params: { id: '1' } },
            { params: { id: '2' } }],
        fallback: true // false | blocking
        // false - coloca erro 400 se variável for diferente do array acima
        // true -  se a variável for diferente do array acima, carrega a página sem informação e depois carrega novamente
        // 'blocking' - espera o carregamento da informação para mostrar a página
    };
}