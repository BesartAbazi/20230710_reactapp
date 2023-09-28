import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import { loadNews } from './newsSlice';
import data from '../../data/data';
// CSS
import './news.css';

const News = (props) => {
    let { id } = useParams();
    const dispatch = useDispatch();
    
    const [allNews, setAllNews] = useState([]);
    useEffect(() => {
       dispatch(loadNews(data));
    }, []);
    
    const [newsData, setNewsData] = useState({});
    const [newsItemFound, setNewsItemFound] = useState(false);
    useEffect(() => {
        data.news.forEach((item) => {
            if (item.id === id) {
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
                                return <MainItem key={item.id} id={item.id} date={item.date} header={item.header} text={item.text} />;
                            })
                        }
                    </>
            }
        </main>
    )
}

export default News;