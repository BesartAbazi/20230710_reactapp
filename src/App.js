import React from 'react';
import { BrowserRouter as Router} from 'react-dom';
import Header from './components/header/header.js';
import Navigation from './components/navigation/navigation.js';
import Main from './components/main/main.js';
import './App.css';

function App() {
  return (
    <>
        <Navigation/>
        <Header/>
        <Main/>
    </>
  );
}

export default App;
