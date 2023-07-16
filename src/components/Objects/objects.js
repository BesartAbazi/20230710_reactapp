import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import data from '../../data/data';

const Objects = (props) => {
    const { id } = useParams();

    const [objectData, setObjectData] = useState({});
    const [objectItemFound, setObjectItemFound] = useState(false);
    useEffect(() => {
        data.objects.forEach((item) => {
            if (Number(item.id) === Number(id)) {
                setObjectData(item);
                setObjectItemFound(true);
            }
        })
    }, [id]);

    return (
        <main>
            <SearchBar searchObject={props.searchObject}/>
            {
                id && objectItemFound ?
                    <MainItem id={objectData.id} date={objectData.date} header={objectData.header} text={objectData.text}/>
                    :
                    data.objects.map((item) => {
                        return (
                            <MainItem id={item.id} date={item.date} header={item.header} text={item.text}/>
                        )
                    })
            }
        </main>
    )
}

export default Objects;
