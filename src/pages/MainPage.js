import React from 'react';
import SearchBar from '../components/common/SearchBar';

const MainPage = () => {
    return (
        <SearchBar onSubmit={(e) => e.preventDefault()}/>
    );
};

export default MainPage;