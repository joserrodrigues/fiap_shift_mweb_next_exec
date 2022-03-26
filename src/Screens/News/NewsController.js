import React, {useEffect} from 'react';
import NewsView from './NewsView';
import useAPI from '../../Services/Apis/Common/useAPI';
import news from '../../Services/Apis/Info/news';

const NewsController = ({ news, statusConnection, isBBC}) => {

    return (
        <NewsView news={news} statusConnection={statusConnection} isBBC={isBBC} />
    );
};

export default NewsController;