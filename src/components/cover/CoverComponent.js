import React, { Component } from 'react';
import './CoverComponent.css';
import { WOW } from 'wowjs';

class CoverComponent extends Component {
    render() {

        return (
            <section id="coverSection">
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
                            <button className="btn btn-consens">
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
