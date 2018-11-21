import './App.css';
import React, { Component } from 'react';
import CoverComponent from './components/cover/CoverComponent';
import HeaderComponent from './components/header/HeaderComponent';
import AboutComponent from './components/about/AboutComponent';
import WoStehenSieComponenent from './components/wo-stehen-sie/WoStehenSieComponenent';

class App extends Component {

    render() {
        return (
            <div className="App">
                <HeaderComponent />
                <CoverComponent />
                <AboutComponent />
                <WoStehenSieComponenent />
            </div>
        );
    }

}

export default App;
