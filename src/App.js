import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header.js';
import Navigation from './components/Navigation/navigation.js';
import { default as linkData } from '../src/data/linksList.js';
import './App.css';

function App() { 
    return (
        <>
            <Navigation />
            <Header />
            <Routes>
                {
                    linkData.map((link) => {
                        return (
                            <Route path={ link.path } element={ link.route }/>
                        )
                    })
                }
            </Routes>
        </>
    );
}

export default App;