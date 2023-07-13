import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import data from '../../data/data';
// CSS
import './news.css';
// Logos
import { default as searchLogo } from '../../icons/search.svg';

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
    useEffect(() => {
        let searchValue = searchParams.get('searchValue');
        const itemsFound = [];

        if (searchValue) {
            data.news.forEach((item) => {
                if ((String(item.id).includes(searchValue)) || (String(item.date).includes(searchValue)) || (String(item.header).includes(searchValue)) || (String(item.text).includes(searchValue))) {
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
            {
                searchParams.get('searchValue') && searchItems.length == 0 ?
                    <>
                        <SearchBar pathname={pathname} />
                        <p className='itemsFound'> No results </p>
                    </> :
                    searchItems.length > 0 ?
                        <>
                            <SearchBar pathname={pathname} />
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
                                <SearchBar pathname={pathname} />
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