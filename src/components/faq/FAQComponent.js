import React, { Component } from 'react';
import './FAQComponent.css';

class FAQComponent extends Component {
    render() {
        return (
            <section id="FAQComponent">
                <div id="FAQOverlay">
                    <div className="row">
                        <div className="col-md-3" id="questions">
                            <ul>
                                <li><h4>Lorem Ipsum?</h4></li>
                                <li><h4>Vestibulum ante elit?</h4></li>
                                <li><h4>Mauris iaculis?</h4></li>
                                <li><h4>Suspendisse tincidunt?</h4></li>
                                <li><h4>Phasellus laoreet?</h4></li>
                            </ul>
                        </div>
                        <div className="col-md-9" id="answers">
                            <div id="answersContainer">
                                <h1>Lorem Ipsum</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Morbi arcu metus, egestas ac libero vel, efficitur blandit lacus.
                                    Phasellus nec vestibulum est.
                                    Ut auctor magna a odio tempus cursus.
                                    Orci varius natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus.
                                </p>
                                <p>
                                    Ut auctor magna a odio tempus cursus.
                                    Orci varius natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Morbi arcu metus, egestas ac libero vel, efficitur blandit lacus.
                                    Phasellus nec vestibulum est.
                                    Ut auctor magna a odio tempus cursus.
                                    Orci varius natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FAQComponent;
