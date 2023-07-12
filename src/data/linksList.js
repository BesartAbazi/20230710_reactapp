import React from "react";
import { default as data } from './data.js';
import WelcomePage from '../components/WelcomePage/welcomePage.js';
import News from '../components/News/news.js';
import Objects from "../components/Objects/objects.js";
import AboutUs from '../components/AboutUs/aboutUs.js';

const links = [
    {
        id: 1001,
        label: 'Home',
        path: '/',
        url: '/',
        route: <WelcomePage/>,
        panelItems: data.home
    },
    {
        id: 1002,
        label: 'News',
        path: '/News/:id?',
        url: '/News',
        route: <News/>,
        panelItems: data.news
    },
    {
        id: 1003,
        label: 'Objects',
        path: '/Objects/:id?',
        url: '/Objects',
        route: <Objects/>,
        panelItems: data.objects
    },
    {
        id: 1004,
        label: 'About Us',
        path: '/AboutUs',
        url: '/AboutUs',
        route: <AboutUs/>,
        panelItems: data.aboutUs
    }
];

export default links;