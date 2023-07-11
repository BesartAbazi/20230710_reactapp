import { default as data } from './data.js';

const links = [
    {
        id: 1001,
        label: 'Home',
        path: '/',
        panelItems: data.home
    },
    {
        id: 1002,
        label: 'News',
        path: '/News/:id?',
        panelItems: data.news
    },
    {
        id: 1003,
        label: 'Objects',
        path: '/Objects/:id?',
        panelItems: data.objects
    },
    {
        id: 1004,
        label: 'About Us',
        path: '/AboutUs',
        panelItems: data.aboutUs
    }
];

export default links;