import React, { Component } from 'react';
import './CoverComponent.css';
import Scroller from "../../services/ScrollerService";

class CoverComponent extends Component {

    scroller = new Scroller();

    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }

    // move this static function into a service
    static setActiveMenu(active) {
        const items = document.getElementsByClassName('buttonsList');
        if(items) {
            Array.from(items).forEach( (nav) => nav.classList.remove('activeButton'));
            document.getElementById( active + 'Button' ).classList.toggle('activeButton');
        }
    }

    handleScroll() {
        this.scroller.scrollToResolver(document.getElementById('consensComponent'));
        CoverComponent.setActiveMenu('consensComponent');
    }

    render() {
        return (
            <section id="coverSection" data-reveal="true">
                <div id="cover" className="wow slideInLeft"  />
                <div id="coverOverlay" className="wow slideInLeft">
                    <div className="col-md-12">
                        <h1 className="text-center">
                            Ihr Nutzen ist unser Ziel
                        </h1>
                        <h4 className="text-center text-thin">
                            Als ManagementPraktiker sind wir darauf spezialisiert, Unternehmen in Umbruch-/Grenzsituationen umsetzungsorientiert zu unterstützen.
                            Unsere Leistungen gehen deshalb bewusst über die klassische Beratung
                            ('Entscheidungsvorbereitung') hinaus
                        </h4>
                        <p className="text-center">
                            <button className="btn btn-consens above-all" onClick={this.handleScroll}>
                                Erfahren Sie mehr
                            </button>
                        </p>
                    </div>
                </div>
                <div id="coverShadow" className="wow slideInRight" />
            </section>
        );

    }
}

export default CoverComponent;
