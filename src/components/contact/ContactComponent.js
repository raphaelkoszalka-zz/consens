import React, { Component } from 'react';
import './ContactComponent.css';

class ContactComponent extends Component {
    render() {
        return (
            <section id="contactComponent">
                <div id="contactComponentOverlay">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="col-md-12">
                                <h1 className="text-center">
                                    Nehmen Sie Kontakt mit uns auf
                                </h1>
                                <hr/>
                            </div>
                            <div className="col-md-3">
                                <h4>
                                    <img src="./map.svg" alt="Adresse"/>
                                    Adresse
                                </h4>
                                <p>
                                    Bornstraße 18 - 61352 Bad Homburg
                                </p>
                                <hr/>
                                <h4>
                                    <img src="./phone.svg" alt="Adresse"/>
                                    Telefon
                                </h4>
                                <p>
                                    +49 (0)61 72 / 48 83 01</p>
                                <hr/>
                                <h4>
                                    <img src="./mail.svg" alt="Adresse"/>
                                    Email
                                </h4>
                                <p>
                                    Consens@ConsensManagement.de</p>
                                <hr/>
                            </div>
                            <div className="col-md-9">
                                <input type="text" className="form-control" placeholder="Name" />
                                <input type="email" className="form-control" placeholder="Email" />
                                <input type="email" className="form-control" placeholder="Betreff" />
                                <textarea name="message" id="" cols="30" rows="8" className="form-control" placeholder="Nachricht" />
                                <div className="text-right">
                                    <button className="btn btn-consens btn-consens-xs">Senden</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-uppercase" id="footerApp">
                        <h5>Impressum</h5>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactComponent;
