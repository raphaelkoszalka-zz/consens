import React, { Component } from 'react';
import './AboutComponent.css';

class AboutComponent extends Component {
    render() {
        return (
            <section id="consensComponent">
                <div className="row">
                    <div className="col-md-6">
                        <div className='col-md-12'>
                            <h1>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </h1>
                            <p>
                                Sed facilisis iaculis ornare.
                                Etiam scelerisque ligula in faucibus molestie.
                                Donec a blandit sem, eget aliquet augue.
                                Cras non metus in erat viverra fringilla eu ut eros.
                                In eget sapien in augue tristique aliquam non eget nisi.
                                Morbi aliquet volutpat odio sed auctor.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6" id="stripes-container">
                        <div id="light-blue" />
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
                            <h1>Praesent consequat in tortor</h1>
                            <p>
                                Duis mattis nunc ut consequat egestas.
                                Praesent semper mattis leo, in pretium tortor vestibulum non.
                                Duis efficitur dolor lectus,
                                nec facilisis turpis consequat ut.
                            </p>
                            <p>
                                Duis mattis nunc ut consequat egestas.
                                Praesent semper mattis leo, in pretium tortor vestibulum non.
                                Duis efficitur dolor lectus,
                                nec facilisis turpis consequat ut.
                            </p>
                            <button className="btn btn-consens-invert">Gangsta Paradise</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutComponent;
