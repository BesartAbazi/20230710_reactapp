import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import data from '../../data/data';
// CSS
import './news.css';

const News = (props) => {
    let { id } = useParams();


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


    return (
        <main>
            <SearchBar searchObject={props.searchObject}/>
            {
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