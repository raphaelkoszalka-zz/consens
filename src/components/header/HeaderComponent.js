import './HeaderComponent.css';
import React, { Component } from 'react';
import Scroller from "../../services/ScrollerService";

class HeaderComponent extends Component {

    scroller = new Scroller();

    constructor() {
        super();
        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo(elm) {
        this.scroller.scrollToResolver(document.getElementById(elm));
    }

    render() {
        return (
            <header>
                <div id="headerBackground">
                    <div id="headerWrapper">
                        <div id="headerComponent">
                            <div className="col-xs-3">
                                <img src="./consensBrand.png" id="consensBrand" alt="ConSenS" onClick={ () => this.scrollTo('root')}/>
                            </div>
                            <div className="col-xs-9">
                                <ul id="headerDesktopMenu" className="hidden-xs hidden-sm hidden-md">
                                    <li onClick={ () => this.scrollTo('contactComponent')} id="contactButton">Kontakt</li>
                                    <li onClick={ () => this.scrollTo('FAQComponent')}>FAQ</li>
                                    <li onClick={ () => this.scrollTo('DienstleistungenComponent')}>Dienstleistungen</li>
                                    <li onClick={ () => this.scrollTo('WoStehenSieComponent')}>Wo stehen Sie?</li>
                                    <li onClick={ () => this.scrollTo('consensComponent')}>ConSenS</li>
                                    <li onClick={ () => this.scrollTo('root')}>Home</li>
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
