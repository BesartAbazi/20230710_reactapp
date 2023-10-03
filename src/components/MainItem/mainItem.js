import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeNews } from '../News/newsSlice';
import { removeObject } from '../Objects/objectsSlice';
import { selectNotification, setNotification } from "../Notification/notificationSlice";
import './mainItem.css';

const MainItem = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        switch(props.object){ 
            case 'news': dispatch(removeNews(props)); break;
            case 'objects': dispatch(removeObject(props)); break;
            default: break;
        }

        dispatch(setNotification(`Success: Item deleted (${props.object}) with title: "${props.header}".`))

        navigate('/' + props.object);
    }

    

    return (
        <div className='mainItem'>
            <div className='header'>
                <b>
                    Date: { props.date }
                    <br/>
                    Title: { props.header }
                </b>
            </div>
            <div className='text' dangerouslySetInnerHTML={{__html: props.text}}/>
            <div className='modifications'>
                <p onClick={handleDelete}>Delete</p>
            </div>
        </div>
    )
}

export default MainItem;