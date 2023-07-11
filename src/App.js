import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Header from './components/header/header.js';
import Navigation from './components/navigation/navigation.js';
import Main from './components/main/main.js';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Header />
            <Main />
        </BrowserRouter>
    );
}

export default App;