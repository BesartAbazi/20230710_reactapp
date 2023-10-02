import React from 'react';
import { Link } from 'react-router-dom';
import { default as logoPlus } from '../../icons/plus.svg';

const AddItem = (props) => {
    return (
        <div id="addItem">
            <img src={logoPlus} alt={logoPlus}/>
            <Link to={`/AddItem?type=${props.object}`}> Add item </Link>
        </div>
    )
};

export default AddItem;