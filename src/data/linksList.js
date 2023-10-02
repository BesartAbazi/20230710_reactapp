import React from "react";
import { default as data } from './data.js';
import WelcomePage from '../components/WelcomePage/welcomePage.js';
import News from '../components/News/news.js';
import Objects from "../components/Objects/objects.js";
import AboutUs from '../components/AboutUs/aboutUs.js';

const navigationlinks = [
    {
        id: 1001,
        label: 'Home',
        path: '/',
        url: '/',
        route: <WelcomePage/>
    },
    {
        id: 1002,
        label: 'News',
        path: '/News/:id?',
        url: '/News',
        route: <News searchObject='news'/>
    },
    {
        id: 1003,
        label: 'Objects',
        path: '/Objects/:id?',
        url: '/Objects',
        route: <Objects searchObject='objects'/>
    },
    {
        id: 1004,
        label: 'About Us',
        path: '/AboutUs',
        url: '/AboutUs',
        route: <AboutUs/>
    }
];

export default navigationlinks;