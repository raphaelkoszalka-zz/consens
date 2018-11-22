import React, { Component } from 'react';
import './WoStehenSieComponenent.css';

class WoStehenSieComponenent extends Component {

    constructor() {
        super();
        this.state = { season: WoStehenSieComponenent.createIntroMarkup() }
    }

    static createIntroMarkup() {
        return(
            <div>
                <h1>Intro</h1>
                <p>Sed lobortis ligula metus, quis feugiat mi vestibulum ut. Suspendisse potenti. Sed nec purus bibendum, cursus ante quis, vehicula arcu. Nulla tincidunt iaculis tellus vitae egestas. </p>
                <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
                <p>Sed blandit lobortis urna, eu molestie mauris suscipit eu. Sed orci massa, congue eget porta quis, laoreet at diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent suscipit tincidunt eros, a blandit velit egestas ut. Mauris vestibulum dictum nisl, vel sodales eros imperdiet in.</p>
                <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
            </div>
        )
    }

    static createSpringMarkup() {
        return(
            <div>
                <h1>Frühling</h1>
                <p>Sed lobortis ligula metus, quis feugiat mi vestibulum ut. Suspendisse potenti. Sed nec purus bibendum, cursus ante quis, vehicula arcu. Nulla tincidunt iaculis tellus vitae egestas. </p>
                <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
                <p>Sed blandit lobortis urna, eu molestie mauris suscipit eu. Sed orci massa, congue eget porta quis, laoreet at diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent suscipit tincidunt eros, a blandit velit egestas ut. Mauris vestibulum dictum nisl, vel sodales eros imperdiet in.</p>
                <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
            </div>
        )
    }

    static createSummerMarkup() {
        return(
            <div>
                <h1>Sommer</h1>
                <p>Sed lobortis ligula metus, quis feugiat mi vestibulum ut. Suspendisse potenti. Sed nec purus bibendum, cursus ante quis, vehicula arcu. Nulla tincidunt iaculis tellus vitae egestas. </p>
                <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
                <p>Sed blandit lobortis urna, eu molestie mauris suscipit eu. Sed orci massa, congue eget porta quis, laoreet at diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent suscipit tincidunt eros, a blandit velit egestas ut. Mauris vestibulum dictum nisl, vel sodales eros imperdiet in.</p>
                <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
            </div>
        )
    }

    static createAutumnMarkup() {
        return(
            <div>
                <h1>Herbst</h1>
                <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
                <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
                <p>Sed blandit lobortis urna, eu molestie mauris suscipit eu. Sed orci massa, congue eget porta quis, laoreet at diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent suscipit tincidunt eros, a blandit velit egestas ut. Mauris vestibulum dictum nisl, vel sodales eros imperdiet in.</p>
                <p>Sed lobortis ligula metus, quis feugiat mi vestibulum ut. Suspendisse potenti. Sed nec purus bibendum, cursus ante quis, vehicula arcu. Nulla tincidunt iaculis tellus vitae egestas. </p>
            </div>
        )
    }

    static createWinterMarkup() {
        return(
            <div>
                <h1>Winter</h1>
                <p>Sed blandit lobortis urna, eu molestie mauris suscipit eu. Sed orci massa, congue eget porta quis, laoreet at diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent suscipit tincidunt eros, a blandit velit egestas ut. Mauris vestibulum dictum nisl, vel sodales eros imperdiet in.</p>
                <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
                <p>Sed lobortis ligula metus, quis feugiat mi vestibulum ut. Suspendisse potenti. Sed nec purus bibendum, cursus ante quis, vehicula arcu. Nulla tincidunt iaculis tellus vitae egestas. </p>
                <p>Cras euismod turpis sit amet convallis porttitor. Nullam sit amet pretium arcu. Proin interdum pulvinar tristique. </p>
            </div>
        )
    }

    changeSeason(season) {
        let newSeason;

        if (season === 'outside') {
            newSeason = WoStehenSieComponenent.createIntroMarkup();
            this.setState( { season: newSeason } );
            return;
        }

        if (season === 'spring') {
            newSeason = WoStehenSieComponenent.createSpringMarkup();
            this.setState( { season: newSeason } );
            return;
        }

        if (season === 'summer') {
            newSeason = WoStehenSieComponenent.createSummerMarkup();
            this.setState( { season: newSeason } );
            return;
        }

        if (season === 'autumn') {
            newSeason = WoStehenSieComponenent.createAutumnMarkup();
            this.setState( { season: newSeason } );
            return;
        }

        newSeason = WoStehenSieComponenent.createWinterMarkup();
        this.setState( { season: newSeason } );
    }

    render() {
        const { season } = this.state;

        return (
            <section id="WoStehenSieComponenent">
                <div className="col-md-6">
                    <div id="seasonsWrapper"
                         onMouseOut={ () =>  this.changeSeason('outside') }
                    >
                        <div className="col-md-6">
                            <div className="seasonBlock"
                                 onMouseOver={ () => this.changeSeason('spring') } id="spring"
                            >
                                <img src="./seasons/spring.svg" className="seasonIcon" alt="Spring"/>
                            </div>
                        </div>
                        <div className="col-md-6" id="removePadding">
                            <div className="seasonBlock"
                                 onMouseOver={ () => this.changeSeason('summer') } id="summer"
                            >
                                <img src="./seasons/summer.svg" className="seasonIcon" alt="Summer"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="seasonBlock"
                                 onMouseOver={ () => this.changeSeason('winter') } id="winter"
                            >
                                <img src="./seasons/winter.svg" className="seasonIcon" alt="Winter"/>
                            </div>
                        </div>
                        <div className="col-md-6" id="removePadding">
                            <div className="seasonBlock"
                                 onMouseOver={ () =>  this.changeSeason('autumn') } id="autumn"
                            >
                                <img src="./seasons/autumn.svg" className="seasonIcon" alt="Autumn"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    { season }
                    <div id="dark-blue" />
                    <div id="light-blue" />
                </div>
            </section>
        );
    }

}

export default WoStehenSieComponenent;
