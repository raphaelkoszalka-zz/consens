import './HeaderComponent.css';
import React, { Component } from 'react';
import Scroller from "../../services/ScrollerService";

class HeaderComponent extends Component {

    scroller = new Scroller();

    constructor() {
        super();
        this.scrollToConsens = this.scrollToConsens.bind(this);
        this.scrollToHome = this.scrollToHome.bind(this);
        this.scrollToWoStehenSie = this.scrollToWoStehenSie.bind(this);
    }

    scrollToHome() {
        const home = document.getElementById('root');
        this.scroller.scrollToResolver(home, null);
    }

    scrollToConsens() {
        const consensSection = document.getElementById('consensComponent');
        this.scroller.scrollToResolver(consensSection, 20);
    }

    scrollToWoStehenSie() {
        const WoStehenSieSection = document.getElementById('WoStehenSieComponenent');
        this.scroller.scrollToResolver(WoStehenSieSection, null);
    }

    render() {
        return (
            <header>
                <div id="headerBackground">
                    <div id="headerWrapper">
                        <div id="headerComponent">
                            <div className="col-xs-3">
                                <img src="./consensBrand.png" id="consensBrand" alt=""/>
                            </div>
                            <div className="col-xs-9">
                                <ul id="headerDesktopMenu" className="hidden-xs hidden-sm hidden-md">
                                    <li id="contactButton">Kontakt</li>
                                    <li>Dienstleistungen</li>
                                    <li onClick={this.scrollToWoStehenSie}>Wo stehen Sie?</li>
                                    <li onClick={this.scrollToConsens}>ConSenS</li>
                                    <li onClick={this.scrollToHome}>Home</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
