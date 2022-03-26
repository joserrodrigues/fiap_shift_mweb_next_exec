import React from 'react';
import NewsController from '../src/Screens/News/NewsController';
import news from '../src/Services/Apis/Info/news';

const News = ({ news, statusConnection, isBBC}) => {
    return (
        <NewsController news={news} statusConnection={statusConnection} isBBC={isBBC} />
    );
};
export default News;

export async function getServerSideProps({ query }) {

    console.log("Inicio SSR getServerSideProps");

    const info = await news.getNews();
    
    let arrayNews = [];

    if(info.status === 200){
        arrayNews = info.data.items;
    }


    return {
        props: {
            news: arrayNews,
            statusConnection: info.status,
            isBBC: true,
        },
    }
}
