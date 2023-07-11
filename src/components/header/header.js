import React, { ReactDOM } from "react";
import { Link } from "react-router-dom";
// import css
import './header.css';
// import logos
import { default as userLogo } from '../../icons/user.svg';
import { default as registerLogo } from '../../icons/register.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <Link to='/Login'>
                    <img src={ userLogo } alt='userLogo'/> Login
                </Link>

                <Link to='/Register'>
                    <img src={ registerLogo } alt='registerLogo'/> Register
                </Link>
            </header>
        )
    }
}

export default Header;