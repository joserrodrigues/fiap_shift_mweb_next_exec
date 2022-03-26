import React from 'react';
import HomeView from './HomeView';
import { useRouter } from 'next/router';

const HomeController = () => {

    const router = useRouter();

    const onDetail1Clicked = () => {

        router.push('/detail/1')
    }
    const onDetailDataClicked = () => {

        router.push({
            pathname: '/detail/2',
            query: { data: JSON.stringify({ info: 1, info2: 2 }) }
        });
    }
    return (
        <HomeView onDetail1Clicked={onDetail1Clicked} onDetailDataClicked={onDetailDataClicked} />
    );
};

export default HomeController;