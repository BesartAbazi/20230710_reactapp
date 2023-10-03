import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// import data
import { default as navigationlinks } from '../../data/linksList.js';
// import css
import './navigation.css';
// import logos
import { default as menuLogo } from '../../icons/menu.svg';

import data from '../../data/data.js';
import { loadNews, selectNews } from '../News/newsSlice';
import { loadObjects, selectObjects } from '../Objects/objectsSlice.js';

const Navigation = (props) => {
    const [navBarActive, setNavBarActive] = useState(false);
    const dispatch = useDispatch();
    const store = props.store.getState();

    // Load data
    const allNews = useSelector(selectNews);
    const allObjects = useSelector(selectObjects);
    useEffect(() => {
        if (allNews.length === 0)
            dispatch(loadNews(data.news));
        
        if (allObjects.length === 0)
            dispatch(loadObjects(data.objects));
    }, []);

    useEffect(() => {
        let root = document.getElementById('root');
        navBarActive ? 
            root.style.alignItems = 'flex-end' : 
            root.style.alignItems = 'center';
    }, [navBarActive]);

    const handleNavBar = () => {
        setNavBarActive(!navBarActive);
    }

    const toggleNavBarPanel = (panelID) => {
        let panel = document.getElementById(panelID);
        panel.style.display === '' ?
            panel.style.display = 'flex' :
            panel.style.display = '';
    }

    return (
        <nav className={ navBarActive ? 'navActive' : 'navNonActive' }>
            <img src={ menuLogo } alt="menuLogo" onClick={ handleNavBar }/>
            {
                navBarActive ? 
                    navigationlinks.map((link) => {
                        return (
                            <>
                                <div className="navPanel" onClick={ () => { toggleNavBarPanel(link.id) } }> 
                                    {
                                        <Link to={ link.url }>
                                            { link.label }
                                        </Link>
                                    } 
                                </div>
                                <div className="navPanelItems" id={ link.id }>
                                    {
                                        store[link.type] ?
                                            store[link.type][link.type]?.map((item) => {
                                                return (
                                                    <Link to={`/${link.label}/${item.id}`}>
                                                        { item.header }
                                                    </Link>
                                                );
                                            }) 
                                            : 
                                            null
                                    }
                                </div>
                            </>
                        );
                    })
                    :
                    null
            }
        </nav>
    )
}

export default Navigation;