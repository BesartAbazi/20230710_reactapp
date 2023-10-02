import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import data
import { default as navigationlinks } from '../../data/linksList.js';
import store from '../../store/store.js';
// import css
import './navigation.css';
// import logos
import { default as menuLogo } from '../../icons/menu.svg';
import Objects from '../Objects/objects.js';

const Navigation = () => {
    const [navBarActive, setNavBarActive] = useState(false);

    const linkItems = store.getState();

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
                                <div className="navPanel" onClick={ () => { toggleNavBarPanel(link.id)} }> 
                                    {
                                        <Link to={ link.url }>
                                            { link.label }
                                         </Link>
                                    } 
                                </div>
                                <div className="navPanelItems" id={ link.id }> {console.log(1, Objects.entries())}
                                    {
                                        linkItems[link.label][link.label] ? 
                                        linkItems[link.label][link.label].map((item) => {
                                            return (
                                                <Link to={`/${link.label}/${item.id}`}>
                                                    { item.header }
                                                </Link>
                                            );
                                        }) : null
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