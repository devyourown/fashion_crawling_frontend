import React, { useState } from 'react';
import ImageList from '../components/common/ImageList';
import SearchBar from '../components/common/SearchBar';

const MainPage = () => {
    const [disabledList, setDisabledList] = useState(true);
    const [keyword, setKeyword] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        setDisabledList(false);
        setKeyword(e.target.value);
    }
    return (
        <>
            <SearchBar onSubmit={onSubmit}/>
            <ImageList disabled={disabledList} keyword={keyword}/>
        </>
    );
};

export default MainPage;