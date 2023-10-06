import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNews, selectNews } from '../News/newsSlice';
import { addObject } from '../Objects/objectsSlice';
import { v4 as uuid } from 'uuid';
import './addItemForm.css';

const AddItemForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const itemTitle = useRef();
    const itemText = useRef();
    const itemType = new URLSearchParams(location.search).get('type');

    const handleCancel = (e) => {
        navigate(-1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (itemTitle.current.value === '' || itemText.current.value === '') 
            return;

        const date = new Date().toISOString().toString().replace('T', ' ').slice(0, 19);
       
        const newItem = {
            id: uuid(),
            date: date,
            header: itemTitle.current.value,
            text: itemText.current.value.replace(/\r?\n/g, '<br />')
        }

        switch(itemType){
            case 'news': dispatch(addNews(newItem)); break;
            case 'object': dispatch(addObject(newItem)); break;
            default: break;
        }

        navigate(-1);
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <p>New item:</p>

                <br/>

                <input id='itemTitle' type='text' ref={itemTitle} placeholder='Title'/>

                <br/>

                <textarea id='itemText' type='text' ref={itemText} rows='20' cols='150' placeholder='Text' wrap='off'>
                </textarea>

                <br/>

                <button type='submit'>
                    Add
                </button>

                <button onClick={handleCancel}>
                    Cancel
                </button>
            </form>
        </main>
    )
}

export default AddItemForm;