import './App.css';
import React, { Component } from 'react';
import CoverComponent from './components/cover/CoverComponent';
import HeaderComponent from './components/header/HeaderComponent';
import ConsensComponent from './components/consens/ConsensComponent';
import WoStehenSieComponenent from './components/wo-stehen-sie/WoStehenSieComponenent';
import DienstleistungenComponent from './components/dienstleistungen/DienstleistungenComponent';
import FAQComponent from './components/faq/FAQComponent';

class App extends Component {

    render() {
        return (
            <div className="App">
                <HeaderComponent />
                <CoverComponent />
                <ConsensComponent />
                <WoStehenSieComponenent />
                <DienstleistungenComponent />
                <FAQComponent />
            </div>
        );
    }

}

export default App;
