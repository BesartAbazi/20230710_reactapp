import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import data from '../../data/data';
// Logos
import { default as searchLogo } from '../../icons/search.svg';

const News = () => {
    let { id } = useParams();
    const { pathname } = useLocation();


    const [newsData, setNewsData] = useState({});
    const [newsItemFound, setNewsItemFound] = useState(false);
    useEffect(() => {    
        data.news.forEach((item) => {
            if (Number(item.id) === Number(id)){
                setNewsData(item);
                setNewsItemFound(true);
            }
        })
    }, [id]);


    let [searchItems, setSearchItems] = useState([]);
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('searchValue');
    useEffect(() => {
        setSearchItems([]);

        if (searchValue){
            console.log(searchValue)
            data.news.forEach((item) => {
                if ((String(item.id).includes(String(searchValue))) || (String(item.date).includes(String(searchValue))) || (String(item.header).includes(String(searchValue))) || (String(item.text).includes(String(searchValue)))){
                    if (searchItems.findIndex((currentItem) => { return currentItem.id == item.id}) == -1){
                        setSearchItems ((prev) => [
                            ...prev,
                            item
                        ]);
                    }
                }
            })
        }
    }, [searchValue]);

    
    return (
        <main>{console.log(searchItems)}
            {   
                searchValue ?
                    <>
                        <p> Values found:</p>
                        <SearchBar pathname={pathname}/>
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
                            <SearchBar pathname={pathname}/>
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