import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from '../../components/common/ImageList';
import { loadImages } from '../../modules/images';

const ImageListContainer = ({disabled, keyword}) => {
    const dispatch = useDispatch();
    const {images, error, loading} = useSelector(({images, loading}) => ({
        images: images.images,
        error: images.error,
        loading: loading['images/LOAD_IMAGES'],
    }));
    useEffect( () => {
        if(!disabled) {
            dispatch(loadImages(keyword));
        }
    });

    return (
        <ImageList images={images} error={error} loading={loading}/>
    );
};

export default ImageListContainer;