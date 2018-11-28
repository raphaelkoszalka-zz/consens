import React, { Component } from 'react';
import './ContactComponent.css';
import Loadercomponent from "../loader/LoaderComponent";

class ContactComponent extends Component {

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
            <section id="contactComponent">
                <div id="contactComponentOverlay">
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactComponent;
