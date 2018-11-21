import React, { Component } from 'react';
import './WoStehenSieComponenent.css';

class WoStehenSieComponenent extends Component {

    render() {
        return (
            <section id="WoStehenSieComponenent">
                <div className="col-md-6">
                    <div className="col-md-6">
                        <div id="spring" />
                    </div>
                    <div className="col-md-6" id="removePadding">
                        <div id="summer" />
                    </div>
                    <div className="col-md-6">
                        <div id="autumn" />
                    </div>
                    <div className="col-md-6" id="removePadding">
                        <div id="winter" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h1>Vestibulum</h1>
                    <p>Sed lobortis ligula metus, quis feugiat mi vestibulum ut. Suspendisse potenti. Sed nec purus bibendum, cursus ante quis, vehicula arcu. Nulla tincidunt iaculis tellus vitae egestas. </p>
                    <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
                    <p>Sed blandit lobortis urna, eu molestie mauris suscipit eu. Sed orci massa, congue eget porta quis, laoreet at diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent suscipit tincidunt eros, a blandit velit egestas ut. Mauris vestibulum dictum nisl, vel sodales eros imperdiet in.</p>
                    <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
                </div>
            </section>
        );
    }

}

export default WoStehenSieComponenent;
