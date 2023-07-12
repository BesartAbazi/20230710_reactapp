import React from 'react';
import './mainItem.css';

const NewsItem = (props) => {
    return (
        <div className='newsItem'>
            <div className='header'>
                <b>
                    ID: { props.id }
                    <br/>
                    Date: { props.date }
                    <br/>
                    Title: { props.header }
                </b>
            </div>
            <div className='text'>
                { props.text }
            </div>
        </div>
    )
}

export default NewsItem;