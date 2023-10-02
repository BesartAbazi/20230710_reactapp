import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import MainItem from '../MainItem/mainItem';
import SearchBar from '../SearchBar/searchBar';
import AddItem from '../AddItem/addItem';
import data from '../../data/data';
import { loadObjects, selectObjects } from './objectsSlice';

const Objects = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const allObjects = useSelector(selectObjects);
    useEffect(() => {
        if (allObjects.length === 0)
            dispatch(loadObjects(data.objects));
    }, []);

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
                    <MainItem id={objectData.id} date={objectData.date} header={objectData.header} text={objectData.text} />
                    :
                    allObjects.map((item) => {
                        return (
                            <MainItem key={item.id} id={item.id} date={item.date} header={item.header} text={item.text} />
                        )
                    })
            }
        </main>
    )
}

export default Objects;
