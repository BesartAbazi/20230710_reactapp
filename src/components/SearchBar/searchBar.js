import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate replaced useHistory
import './searchBar.css';

const SearchBar = (props) => {
    const searchValue = useRef();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (!searchValue.current.value)
            return;

        const searchQuery = new URLSearchParams({
            searchValue: searchValue.current.value
        }).toString();

        navigate(props.pathname + '?' + searchQuery);
    }

    return (
        <div className='searchBar'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='Search' className="searchInput" ref={searchValue} />
                <button type="submit" className='searchButton'>
                    Search
                </button>
            </form>
        </div>
    )
}


export default SearchBar;