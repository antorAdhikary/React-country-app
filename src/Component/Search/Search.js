import React, { useEffect, useState } from 'react';

const Search = (props) => {
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        setSearch(e.target.value);      
    }
    useEffect(() => {
        props.onSearch(search)
    },[search])
    return (
        <div>
            <input type="text" placeholder='Search the country' onChange={handleSearch} />
        </div>
    );
};

export default Search;