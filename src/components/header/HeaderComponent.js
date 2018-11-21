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
        this.scroller.scrollToResolver(home);
    }

    scrollToConsens() {
        const consensSection = document.getElementById('consensComponent');
        this.scroller.scrollToResolver(consensSection, true);
    }

    scrollToWoStehenSie() {
        const WoStehenSieSection = document.getElementById('WoStehenSieComponenent');
        this.scroller.scrollToResolver(WoStehenSieSection, true);
    }

    render() {
        return (
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
        );
    }
}

export default HeaderComponent;
