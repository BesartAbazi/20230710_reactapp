import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header.js';
import Notification from './components/Notification/notification.js';
import Navigation from './components/Navigation/navigation.js';
import SearchPage from './components/SearchPage/searchPage.js';
import AddItemForm from './components/AddItemForm/addItemForm.js';
import { default as navigationlinks } from '../src/data/linksList.js';
import store from './store/store.js';
import './App.css';

function App() { 
    return (
        <>
            <Navigation store={store}/>
            <Header />
            <Notification/>
            <Routes>
                {
                    navigationlinks.map((link) => {
                        return (
                            <Route key={ link.path } path={ link.path } element={ link.route }/>
                        )
                    })
                }
                <Route path='/Search' element={ <SearchPage/> }/>
                <Route path='/AddItem' element={ <AddItemForm/> }/>
            </Routes>
        </>
    );
}

export default App;