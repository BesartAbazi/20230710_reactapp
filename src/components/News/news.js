import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import AddItem from '../AddItem/addItem';
import data from '../../data/data';
import { loadNews, selectNews } from './newsSlice';
import './news.css';

const News = (props) => {
    let { id } = useParams();
    const dispatch = useDispatch();
    
    const allNews = useSelector(selectNews);
    useEffect(() => {
        if (allNews.length === 0)
            dispatch(loadNews(data.news));
    }, []);

    const [newsData, setNewsData] = useState({});
    const [newsItemFound, setNewsItemFound] = useState(false);
    useEffect(() => {
        allNews.forEach((item) => {
            if (item.id === id) {
                setNewsData(item);
                setNewsItemFound(true);
            }
        })
    }, [id]);

    return (
        <main>
            <AddItem object='news'/>
            <SearchBar searchObject={props.searchObject} />
            {
                id && newsItemFound ?
                    <MainItem id={newsData.id} date={newsData.date} header={newsData.header} text={newsData.text} />
                    :
                    <>
                        {
                            allNews.map((item) => {
                                return <MainItem key={item.id} id={item.id} date={item.date} header={item.header} text={item.text} />;
                            })
                        }
                    </>
            }
        </main>
    )
}

export default News;