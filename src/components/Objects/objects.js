import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import AddItem from '../AddItem/addItem';
import { selectObjects } from './objectsSlice';

const Objects = (props) => {
    const { id } = useParams();
    
    const allObjects = useSelector(selectObjects);

    const [objectData, setObjectData] = useState({});
    const [objectItemFound, setObjectItemFound] = useState(false);
    useEffect(() => {
        allObjects.forEach((item) => {
            if (item.id === id) {
                setObjectData(item);
                setObjectItemFound(true);
            }
        })
    }, [id]);

    return (
        <main>
            <AddItem object="object"/>
            <SearchBar searchObject={props.searchObject} />
            {
                id && objectItemFound ?
                    <MainItem key={objectData.id} id={objectData.id} object={props.searchObject} date={objectData.date} header={objectData.header} text={objectData.text} />
                    :
                    allObjects.map((item) => {
                        return (
                            <MainItem key={item.id} id={item.id} object={props.searchObject} date={item.date} header={item.header} text={item.text} />
                        )
                    })
            }
        </main>
    )
}

export default Objects;
