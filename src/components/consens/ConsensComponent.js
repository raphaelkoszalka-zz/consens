import React, { Component } from 'react';
import './ConsensComponent.css';
import Loadercomponent from '../loader/LoaderComponent';

class ConsensComponent extends Component {

    constructor() {
        super();
        this.state = { isLoading: true }
    }

    componentDidMount() {
        setTimeout(() => this.setState( { isLoading: false }), 500 );
    }

    render() {

        const { isLoading } = this.state;

        if(isLoading) {
            return(<Loadercomponent />);
        }

        return (
            <section id="consensComponent">
                <div className="row">
                    <div className="col-md-6">
                        <div className='col-md-12'>
                            <h1>
                                Beratung - Coaching -
                                InterimsManagement.
                            </h1>
                            <p>
                                Wir legen vor Ort Hand an und 'schenken' Ihnen damit UnternehmerZeit indem wir als Team aus erfahrenen Unternehmern die gleichen Ziele wie Sie verfolgen (ConSenS = Zielkonvergenz) und auch umsetzen ( ConSenS = mit Sinn).
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 slideInRight" id="stripes-container">
                        <div id="light-blue" className="slideInRight" />
                        <div id="dark-blue" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <div id="pics-wrapper">
                                <div id="first-pic" />
                                <div id="second-pic" />
                            </div>
                        </div>
                        <div className="col-md-6" id="text-wrapper">
                            <h1>Erfahrung + Verantwortung + Umsetzung</h1>
                            <p>
                                Duis mattis nunc ut consequat egestas.
                                Praesent semper mattis leo, in pretium tortor vestibulum non.
                                Duis efficitur dolor lectus,
                                nec facilisis turpis consequat ut.
                            </p>
                            <p>
                                Das Ergebnis zählt - deshalb sind erfolgsorientierte Komponenten Bestandteile unseres Vergütungssystems.
                                Ein Konzept für alle, die etwas bewegen wollen.
                            </p>
                            <button className="btn btn-consens-invert">Lorem Ipsum</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ConsensComponent;
