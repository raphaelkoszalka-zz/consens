import React, { Component } from 'react';
import './FAQComponent.css';

class FAQComponent extends Component {

    constructor() {
        super();
        this.state = { active: 1, answer: FAQComponent.createQuestionOneMarkup() };
        this.setActiveQuestion = this.setActiveQuestion.bind(this);
        this.setActiveAnswer = this.setActiveAnswer.bind(this);
    }

    static createQuestionOneMarkup() {
        return(
            <div id="answersContainer">
                <h1>Question One</h1>
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
        )
    }

    static createQuestionTwoMarkup() {
        return(
            <div id="answersContainer">
                <h1>Question Two</h1>
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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi arcu metus, egestas ac libero vel, efficitur blandit lacus.
                    Phasellus nec vestibulum est.
                    Ut auctor magna a odio tempus cursus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                </p>
            </div>
        )
    }

    static createQuestionThreeMarkup() {

        return(
            <div id="answersContainer">
                <h1>Question Three</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi arcu metus, egestas ac libero vel, efficitur blandit lacus.
                    Phasellus nec vestibulum est.
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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi arcu metus, egestas ac libero vel, efficitur blandit lacus.
                    Phasellus nec vestibulum est.
                    Ut auctor magna a odio tempus cursus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                </p>
            </div>
        )
    }

    componentDidMount() {
        this.setActiveQuestion();
    }

    setActiveQuestion() {
        const { active } = this.state;
        const navigationBalls = document.getElementsByClassName('questions');

        Array.from(navigationBalls).forEach( (nav) => nav.classList.remove('activeQuestion'));
        document.getElementById('question_' + active).classList.toggle('activeQuestion');
    }

    setActiveAnswer(answer) {

        if (answer === 1) {
            this.setState( { active: 1, answer: FAQComponent.createQuestionOneMarkup() } );
            setTimeout(() => this.setActiveQuestion());
            return;
        }

        if (answer === 2) {
            this.setState( { active: 2, answer: FAQComponent.createQuestionTwoMarkup() } );
            setTimeout(() => this.setActiveQuestion());
            return;
        }

        this.setState( { active: 3, answer: FAQComponent.createQuestionThreeMarkup() } );
        setTimeout(() => this.setActiveQuestion());
    }

    render() {


        const { answer } = this.state;

        return (
            <section id="FAQComponent" data-reveal="true">
                <div id="FAQOverlay">
                    <div className="row">
                        <div className="col-md-3" id="questions">
                            <h3>Häufige gestellte Fragen</h3>
                            <hr/>
                            <ul>
                                <li onClick={() => this.setActiveAnswer(1)}><h4 className="questions" id="question_1">Lorem Ipsum?</h4></li>
                                <li onClick={() => this.setActiveAnswer(2)}><h4 className="questions" id="question_2" >Vestibulum ante elit?</h4></li>
                                <li onClick={() => this.setActiveAnswer(3)}><h4 className="questions" id="question_3">Mauris iaculis?</h4></li>
                            </ul>
                        </div>
                        <div className="col-md-9" id="answers">
                            { answer }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FAQComponent;
