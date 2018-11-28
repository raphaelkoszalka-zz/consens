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
                <div className="call-to-action">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="line" />
                    </div>
                </div>
                <ConsensComponent id="consensApp" />
                <div className="call-to-action">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="line" />
                    </div>
                </div>
                <WoStehenSieComponenent id="woStehenSieApp" />
                <div className="call-to-action">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="line" />
                    </div>
                </div>
                <DienstleistungenComponent id="dienstleistungenApp" />
                <div className="call-to-action">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="line" />
                    </div>
                </div>
                <FAQComponent id="faqApp" />
                <div className="call-to-action" id="kontaktLine">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="line" />
                    </div>
                </div>
                <ContactComponent id="contactApp" />
            </div>
        );
    }
}

export default App;
