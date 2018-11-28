import './App.css';
import React, { Component } from 'react';
import CoverComponent from './components/cover/CoverComponent';
import HeaderComponent from './components/header/HeaderComponent';
import ConsensComponent from './components/consens/ConsensComponent';
import WoStehenSieComponenent from './components/wo-stehen-sie/WoStehenSieComponenent';
import DienstleistungenComponent from './components/dienstleistungen/DienstleistungenComponent';
import FAQComponent from './components/faq/FAQComponent';
import ContactComponent from './components/contact/ContactComponent';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

class App extends Component {

    render() {
        return (
            <div className="App">
                <HeaderComponent />
                <BrowserRouter>
                    <Switch>
                        <Route className="fadeIn" path="/" exact={true} component={CoverComponent} />
                        <Route className="fadeIn" path="/home" exact={true} component={CoverComponent} />
                        <Route className="fadeIn" path="/consens" exact={true} component={ConsensComponent} />
                        <Route className="fadeIn" path="/wo-stehen-sie" exact={true} component={WoStehenSieComponenent} />
                        <Route className="fadeIn" path="/dienstleistungen" exact={true} component={DienstleistungenComponent} />
                        <Route className="fadeIn" path="/faq" exact={true} component={FAQComponent} />
                        <Route className="fadeIn" path="/kontakt" exact={true} component={ContactComponent} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

}

export default App;
