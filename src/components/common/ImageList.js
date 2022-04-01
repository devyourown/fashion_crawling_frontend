import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const ImageListBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    
`;

const ImageItemBlock = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
    border: 1px solid #ccc;
    width: 240px;

    img {
        width: 100%;
        height: 1.5rem;
    }

    &:hover {
        border: 1px solid #777;
    }
`;

const ImageItem = ({image}) => {
    const {src, alt, href} = image;
    return (
        <ImageItemBlock>
            <a target='_blank' href={href} >
                <img src={src} alt={alt} />
            </a>
        </ImageItemBlock>
    )
}

const ImageList = ({loading, images, error}) => {
    if(error) {
        <ImageListBlock>에러가 발생했습니다.</ImageListBlock>
    }
    if(loading) {
        <ImageListBlock><Spinner animation="border" /></ImageListBlock>
    }
    return (
        
        <ImageListBlock>
            {!loading && images && (
            <div>
                {images.map(image => (
                    <ImageItem image={image} key={image.id}/>
                ))}
            </div>
            )}
        </ImageListBlock>
    );
};

export default ImageList;