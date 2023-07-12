import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainItem from '../MainItem/mainItem';
import data from '../../data/data';

const News = () => {
    const { id } = useParams();
    const [newsData, setNewsData] = useState({});

    useEffect(() => {
        data.news.forEach((item) => {
            if (item.id == id)
                setNewsData(item)
        })
    }, [id]);

    return (
        <main>
            {
                id ?
                    <MainItem id={newsData.id}
                        date={newsData.date}
                        header={newsData.header}
                        text={newsData.text}
                    />
                    :
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
        </main>
    )
}

export default News;