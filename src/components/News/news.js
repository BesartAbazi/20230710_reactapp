import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import AddItem from '../AddItem/addItem';
import { selectNews } from './newsSlice';
import './news.css';

const News = (props) => {
    let { id } = useParams();
    const allNews = useSelector(selectNews);

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
            <SearchBar searchObject={props.searchObject}/>
            {
                id && newsItemFound ?
                    <MainItem key={newsData.id} id={newsData.id} object={props.searchObject} date={newsData.date} header={newsData.header} text={newsData.text} />
                    :
                    <>
                        {
                            allNews.map((item) => {
                                return <MainItem key={item.id} id={item.id} object={props.searchObject} date={item.date} header={item.header} text={item.text} />;
                            })
                        }
                    </>
            }
        </main>
    )
}

export default News;