import React, { Component } from 'react';
import './DienstleistungenComponent.css';

class DienstleistungenComponent extends Component {

    constructor() {
        super();
        this.state =  {
            dienstleistungen: DienstleistungenComponent.createDienstleistungenOne(),
            position : 1
        };
        this.navigateToNextSlider = this.navigateToNextSlider.bind(this);
    }

    static createDienstleistungenOne() {
        return {
            contentColumn : {
                'title' : 'Lorem Ipsum',
                'firstParagraph' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien lectus. Vestibulum eget mauris porta, pellentesque dui vitae, cursus ante.',
                'secondParagraph' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien lectus. Vestibulum eget mauris porta, pellentesque dui vitae, cursus ante.'
            },
            coverColumn : {
                'title_one' : 'Lorem Ipsum ',
                'title_two' : 'consectetur adipiscing',
                'background' : './dienstleistungen/dienstleistungen-1.png'
            }
        }
    }

    static createDienstleistungenTwo() {
        return {
            contentColumn : {
                'title' : 'Cursus Ante',
                'firstParagraph' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien lectus. Vestibulum eget mauris porta, pellentesque dui vitae, cursus ante.',
                'secondParagraph' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien lectus. Vestibulum eget mauris porta, pellentesque dui vitae, cursus ante.'
            },
            coverColumn : {
                'title_one' : 'Cursus Ante ',
                'title_two' : 'dolor sit amet',
                'background' : './dienstleistungen/dienstleistungen-2.png'
            }
        }
    }

    static createDienstleistungenThree() {
        return {
            contentColumn : {
                'title' : 'Dolor Sit',
                'firstParagraph' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien lectus. Vestibulum eget mauris porta, pellentesque dui vitae, cursus ante.',
                'secondParagraph' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien lectus. Vestibulum eget mauris porta, pellentesque dui vitae, cursus ante.'
            },
            coverColumn : {
                'title_one' : 'Dolor Sit ',
                'title_two' : 'adipiscing elit',
                'background' : './dienstleistungen/dienstleistungen-3.png'
            }
        }
    }

    navigateToNextSlider() {
        const position = this.state['position'];

        if (position === 1) {
            this.setState({
                dienstleistungen : DienstleistungenComponent.createDienstleistungenTwo(),
                position: 2
            });
            return;
        }

        if (position === 2) {
            this.setState({
                dienstleistungen : DienstleistungenComponent.createDienstleistungenThree(),
                position: 3
            });
            return;
        }

        this.setState({
            dienstleistungen : DienstleistungenComponent.createDienstleistungenOne(),
            position: 1
        });
    }

    render() {
        const { dienstleistungen } = this.state;

        const coverStyle = {
            backgroundImage : 'url(' +dienstleistungen['coverColumn']['background'] + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        };

        return (
            <section>
                <section id="DienstleistungenComponent">
                    <div id="DienstleistungenText">
                        <div id="contentWrapper">
                            <h1>{ dienstleistungen['contentColumn']['title'] }</h1>
                            <p>{ dienstleistungen['contentColumn']['firstParagraph'] }</p>
                            <p>{ dienstleistungen['contentColumn']['secondParagraph'] }</p>
                        </div>
                        <div id="servicesNavigationWrapper">
                            <div className="navigationBall" />
                            <div className="navigationBall" />
                            <div className="navigationBall" />
                        </div>
                    </div>
                    <div id="DienstleistungenCover" style={coverStyle}>
                        <div id="DienstleistungenCoverOverlay">
                            <h1>{ dienstleistungen['coverColumn']['title_one'] }</h1>
                            <h1>{ dienstleistungen['coverColumn']['title_two'] }</h1>
                        </div>
                    </div>
                    <div id="DienstleistungenAction">
                        <div id="callToActionWrapper">
                            <h4>Lorem Ipsum</h4>
                            <h4>consectetur adipiscing </h4>
                            <h4>cursus ante</h4>
                            <div onClick={this.navigateToNextSlider} id="dienstleistungen-light-blue">
                                <img src="./next.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }

}

export default DienstleistungenComponent;
