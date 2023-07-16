import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import data from '../../data/data';
// CSS
import './searchPage.css';

const SearchPage = () => {
    let [searchItems, setSearchItems] = useState([]);
    const [searchParams] = useSearchParams();
    let searchObject = searchParams.get('searchObject');
    let searchValue = searchParams.get('searchValue');
    useEffect(() => {
        const itemsFound = [];

        if (searchValue) {
            searchValue = searchValue.toLowerCase();

            data[searchObject].forEach((item) => {
                if ((String(item.id) + String(item.date) + String(item.header) + String(item.text)).toLocaleLowerCase().includes(searchValue)) {
                    if (itemsFound.findIndex((currentItem) => { return Number(currentItem.id) === Number(item.id) }) == -1) {
                        itemsFound.push(item)
                    }
                }
            });
        }

        setSearchItems(itemsFound);
    }, [searchParams]);


    return (
        <main>
            <SearchBar searchObject={searchObject} />
            {
                searchValue && searchItems.length == 0 ?
                    <p className='itemsFound'> No results </p>
                    :
                    <>
                        <p className='itemsFound'> {searchItems.length} result{searchItems.length > 1 ? 's' : ''}: </p>
                        {
                            searchItems.map((item) => {
                                return <MainItem id={item.id} date={item.date} header={item.header} text={item.text} />;
                            })
                        }
                    </>
            }
        </main>
    )

}

export default SearchPage;