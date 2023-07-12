import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import data
import { default as linkData } from '../../data/linksList.js';
// import css
import './navigation.css';
// import logos
import { default as menuLogo } from '../../icons/menu.svg';

const Navigation = () => {
    const [navBarActive, setNavBarActive] = useState(false);

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
                    linkData.map((link) => {
                        return (
                            <>
                                <div className="navPanel" onClick={ () => { toggleNavBarPanel(link.id)} }> 
                                    {
                                        <Link to={ link.url }>
                                            { link.label }
                                         </Link>
                                    } 
                                </div>
                                <div className="navPanelItems" id={ link.id }>
                                    {
                                        link.panelItems?.map((item) => {
                                            return (
                                                <Link to={`/${link.label}/${item.id}`}>
                                                    { item.header }
                                                </Link>
                                            );
                                        })
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