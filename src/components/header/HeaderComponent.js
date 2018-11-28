import './HeaderComponent.css';
import React, { Component } from 'react';
import Scroller from "../../services/ScrollerService";

class HeaderComponent extends Component {

    scroller = new Scroller();

    constructor() {
        super();
        this.scrollTo = this.scrollTo.bind(this);
    }

    componentDidMount() {
        HeaderComponent.setActiveMenu('root');
        HeaderComponent.handleScroll();
    }

    static handleScroll() {
    }

    static setActiveMenu(active) {
        const navigationBalls = document.getElementsByClassName('buttonsList');
        if(navigationBalls) {
            Array.from(navigationBalls).forEach( (nav) => nav.classList.remove('activeButton'));
            document.getElementById( active + 'Button' ).classList.toggle('activeButton');
        }
    }

    scrollTo(elm) {
        this.scroller.scrollToResolver(document.getElementById(elm));
        HeaderComponent.setActiveMenu(elm);
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
                                    <li
                                        className="buttonsList"
                                        onClick={ () => this.scrollTo('contactComponent')}
                                        id="contactComponentButton"
                                    >
                                        Kontakt
                                    </li>
                                    <li
                                        className="buttonsList"
                                        onClick={ () => this.scrollTo('FAQComponent')}
                                        id="FAQComponentButton"
                                    >
                                        FAQ
                                    </li>
                                    <li
                                        className="buttonsList"
                                        onClick={ () => this.scrollTo('DienstleistungenComponent')}
                                        id="DienstleistungenComponentButton"
                                    >
                                        Dienstleistungen
                                    </li>
                                    <li
                                        className="buttonsList"
                                        onClick={ () => this.scrollTo('WoStehenSieComponent')}
                                        id="WoStehenSieComponentButton"
                                    >
                                        Wo stehen Sie?
                                    </li>
                                    <li
                                        className="buttonsList"
                                        onClick={ () => this.scrollTo('consensComponent')}
                                        id="consensComponentButton"
                                    >
                                        ConSenS
                                    </li>
                                    <li
                                        className="buttonsList"
                                        onClick={ () => this.scrollTo('root')}
                                        id="rootButton"
                                    >
                                        Home
                                    </li>
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
