import React from 'react';
import NewsController from '../src/Screens/News/NewsController';
import news from '../src/Services/Apis/Info/news';

const Flow = ({ news, statusConnection, isBBC }) => {
    return (
        <NewsController news={news} statusConnection={statusConnection} isBBC={isBBC} />
    );
};
export default Flow;


export async function getStaticProps() {

    console.log("Inicio SSR getStaticProps");

    const info = await news.getFlowPodCast();

    let arrayNews = [];

    if (info.status === 200) {
        arrayNews = info.data.items;
    }

    return {
        props: {
            news: arrayNews,
            statusConnection: info.status,
            isBBC: false,
        },
        revalidate: 3600, // Em segundos
    }
}