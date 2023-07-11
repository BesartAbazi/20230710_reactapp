import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Header from './components/Header/header.js';
import Navigation from './components/Navigation/navigation.js';
import WelcomePage from './components/WelcomePage/welcomePage.js'
import Main from './components/Main/main.js';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<WelcomePage/>}/>
                </Routes>
            </Main>
        </BrowserRouter>
    );
}

export default App;