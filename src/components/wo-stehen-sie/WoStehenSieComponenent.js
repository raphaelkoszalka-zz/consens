import React, { Component } from 'react';
import './WoStehenSieComponenent.css';
import LoaderComponent from "../loader/LoaderComponent";

class WoStehenSieComponenent extends Component {

    constructor() {
        super();
        this.state = {
            season: WoStehenSieComponenent.createIntroMarkup(),
            isLoading: true
        }
    }

    static createIntroMarkup() {
        return(
            <div>
                <h1>Das Unternehmen und die Jahreszeiten</h1>
                <p>Das Vorbild Natur – letztlich auch als älteste Erbinformation in uns – hat schon so manchen zur Übertragung auf durch Menschen geschaffene Systeme inspiriert.</p>
                <p>Der Baum hier als Symbol für Zeit, Jahreszeit, Vergänglichkeit und Neubeginn aus
                    scheinbar „aussichtsloser Position“, als Symbol der ständigen Veränderung
                    schlechthin, als Synonym für ein Unternehmen oder Produkt.</p>
                <p>Natürlich gibt es überall „einen Haken“: Der positive Haken ist hier, dass wir im
                    Unternehmen an der Zeitscheibe etwas vor- oder zurückdrehen können; allerdings
                    immer mit entsprechend hoher Management- oder sonstiger Anstrengung und es uns
                    damit gelingen muss, „im grünen Bereich“ zu bleiben.</p>
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

    componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 500);
    }

    render() {
        const { season, isLoading } = this.state;

        if (isLoading) {
            return(<LoaderComponent />);
        }

        return (
            <section id="WoStehenSieComponent">
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
