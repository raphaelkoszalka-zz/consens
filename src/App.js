import './App.css';
import React, { Component } from 'react';
import CoverComponent from './components/cover/CoverComponent';
import HeaderComponent from './components/header/HeaderComponent';
import ConsensComponent from './components/consens/ConsensComponent';
import WoStehenSieComponenent from './components/wo-stehen-sie/WoStehenSieComponenent';
import DienstleistungenComponent from './components/dienstleistungen/DienstleistungenComponent';
import FAQComponent from './components/faq/FAQComponent';
import ContactComponent from './components/contact/ContactComponent';
import LoaderComponent from "./components/loader/LoaderComponent";

class App extends Component {

    constructor() {
        super();
        this.state = { isLoading: true }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState( { isLoading: false });
        }, 750);
    }

    render() {
        const { isLoading } = this.state;

        if(isLoading) {
            return(<LoaderComponent />);
        }

        return (
            <div className="App">
                <HeaderComponent />
                <CoverComponent id="coverApp" />
                <ConsensComponent id="consensApp" />
                <WoStehenSieComponenent id="woStehenSieApp" />
                <DienstleistungenComponent id="dienstleistungenApp" />
                <FAQComponent id="faqApp" />
                <ContactComponent id="contactApp" />
            </div>
        );
    }
}

export default App;
