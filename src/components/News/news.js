import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import data from '../../data/data';
// CSS
import './news.css';

const News = () => {
    let { id } = useParams();
    const { pathname } = useLocation();


    const [newsData, setNewsData] = useState({});
    const [newsItemFound, setNewsItemFound] = useState(false);
    useEffect(() => {
        data.news.forEach((item) => {
            if (Number(item.id) === Number(id)) {
                setNewsData(item);
                setNewsItemFound(true);
            }
        })
    }, [id]);


    let [searchItems, setSearchItems] = useState([]);
    const [searchParams] = useSearchParams();
    let searchValue = null;
    useEffect(() => {
        searchValue = searchParams.get('searchValue');
        const itemsFound = [];

        if (searchValue) {
            searchValue = searchValue.toLowerCase();

            data.news.forEach((item) => {
                if ((String(item.id).toLowerCase().includes(searchValue)) || 
                    (String(item.date).toLowerCase().includes(searchValue)) || 
                    (String(item.header).toLowerCase().includes(searchValue)) || 
                    (String(item.text).toLowerCase().includes(searchValue))) {
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
            <SearchBar pathname={pathname} />
            {
                searchValue && searchItems.length == 0 ?
                    <p className='itemsFound'> No results </p>
                    :
                    searchItems.length > 0 ?
                    <>
                        <p className='itemsFound'> {searchItems.length} result{searchItems.length > 1 ? 's' : ''}: </p>
                        {
                            searchItems.map((item) => {
                                return <MainItem id={item.id} date={item.date} header={item.header} text={item.text} />;
                            })
                        }
                    </>
                    :
                    id && newsItemFound ?
                        <MainItem id={newsData.id} date={newsData.date} header={newsData.header} text={newsData.text} />
                        :
                        <>
                            {
                                data.news.map((item) => {
                                    return <MainItem id={item.id} date={item.date} header={item.header} text={item.text} />;
                                })
                            }
                        </>
            }
        </main>
    )
}

export default News;