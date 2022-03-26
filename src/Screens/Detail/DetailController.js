import React from 'react';
import DetailView from './DetailView';
import { useRouter } from 'next/router';

const DetailController = () => {

    const router = useRouter();
    const { id, data } = router.query;

    const onBackClicked = () => {
        router.back();
    }

    return (
        <DetailView id={id} data={data} onBackClicked={onBackClicked} />
    );
};

export default DetailController;