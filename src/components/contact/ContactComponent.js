import React, { Component } from 'react';
import './ContactComponent.css';

class ContactComponent extends Component {
    render() {
        return (
            <section id="contactComponent">
                <div id="contactComponentOverlay">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-9">
                        <input type="text" className="form-control" placeholder="Name" />
                        <hr/>
                        <input type="email" className="form-control" placeholder="Email" />
                        <hr/>
                        <input type="email" className="form-control" placeholder="Gegenstand" />
                        <hr/>
                        <textarea name="message" id="" cols="30" rows="8" className="form-control" placeholder="Botschaft" />
                        <hr/>
                        <div className="text-right">
                            <button className="btn btn-consens btn-consens-xs">Senden</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactComponent;
