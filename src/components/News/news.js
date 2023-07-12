import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import data from '../../data/data';
// Logos
import { default as searchLogo } from '../../icons/search.svg';

const News = () => {
    let { id } = useParams();
    const [newsData, setNewsData] = useState({});
    const [newsItemFound, setNewsItemFound] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        data.news.forEach((item) => {
            console.log(id)
            if (Number(item.id) === Number(id)){
                setNewsData(item);
                setNewsItemFound(true);
            }
        })

        if (JSON.stringify(newsData) === '{}')
            setNewsItemFound(false);
    }, [pathname]);

    return (
        <main>
            {
                newsItemFound ?
                    <MainItem id={newsData.id}
                        date={newsData.date}
                        header={newsData.header}
                        text={newsData.text}
                    />
                    :
                    <>
                        <SearchBar pathname={pathname}/>
                        {
                            data.news.map((item) => {
                                return (
                                    <MainItem id={item.id}
                                        date={item.date}
                                        header={item.header}
                                        text={item.text}
                                    />
                                )
                            })
                        }
                    </>
            }
        </main>
    )
}

export default News;