import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import data
import { default as linkData } from '../../data/linksList.js';
// import css
import './navigation.css';
// import logos
import { default as menuLogo } from '../../icons/menu.svg';

const Navigation = () => {
    const [navBarActive, setNavBarActive] = useState(false);

    const handleNavBar = () => {
        setNavBarActive(!navBarActive);
    }

    const toggleNavBarPanel = (panelID) => {
        if (document.getElementById(panelID).style.display == '')
            document.getElementById(panelID).style.display = 'flex';
        else
            document.getElementById(panelID).style.display = '';
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
                                        link.panelItems ?
                                            link.label
                                            :
                                            <Link to={ link.path }>
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