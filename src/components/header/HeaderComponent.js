import './HeaderComponent.css';
import React, { Component } from 'react';


class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    static navigateTo(route) {
        window.location.href = route;
    }

    static handleScroll(e) {
        const wDelta = e.wheelDelta < 0 ? 'down' : 'up';
        const routePath = window.location.href.substring(window.location.href.lastIndexOf("/"));
        if (wDelta === 'down') {
            HeaderComponent.goToNext(routePath);
            return;
        }
        HeaderComponent.goToPrevious(routePath);
    }

    static goToPrevious(path) {
        console.log(path);
        if (path === '/') {
            return;
        }
        if (path === '/kontakt') {
            window.location.href = '/faq';
            return;
        }
        if (path === '/faq') {
            window.location.href = '/dienstleistungen';
            return;
        }
        if (path === '/dienstleistungen') {
            window.location.href = '/wo-stehen-sie';
            return;
        }
        if (path === '/wo-stehen-sie') {
            window.location.href = '/consens';
            return;
        }
        window.location.href = '/';
    }


    static goToNext(path) {
        console.log(path);
        if (path === '/kontakt') {
            return;
        }
        if (path === '/faq') {
            window.location.href = '/kontakt';
            return;
        }
        if (path === '/dienstleistungen') {
            window.location.href = '/faq';
            return;
        }
        if (path === '/wo-stehen-sie') {
            window.location.href = '/dienstleistungen';
            return;
        }
        if (path === '/consens') {
            window.location.href = '/wo-stehen-sie';
            return;
        }
        window.location.href = '/consens';
    }

    componentDidMount() {
        window.addEventListener(
            'mousewheel',
            (e) => HeaderComponent.handleScroll(e)
        );

    }

    render() {
        return (
            <header>
                <div id="headerBackground">
                    <div id="headerWrapper">
                        <div id="headerComponent">
                            <div className="col-xs-3">
                                <div id="consensBrandBkg" onClick={ () => HeaderComponent.navigateTo('/') } />
                            </div>
                            <div className="col-xs-9">
                                <ul id="headerDesktopMenu" className="hidden-xs hidden-sm hidden-md">
                                    <li onClick={ () => HeaderComponent.navigateTo('/kontakt')} id="kontakt">
                                        Kontakt
                                    </li>
                                    <li onClick={ () => HeaderComponent.navigateTo('/faq')} id="faq">
                                        FAQ
                                    </li>
                                    <li onClick={ () => HeaderComponent.navigateTo('/dienstleistungen')} id="dienstleistungen">
                                        Dienstleistungen
                                    </li>
                                    <li onClick={ () => HeaderComponent.navigateTo('/wo-stehen-sie')} id="wo-stehen-sie">
                                        Wo stehen Sie?
                                    </li>
                                    <li onClick={ () => HeaderComponent.navigateTo('/consens')} id="consens">
                                        ConSenS
                                    </li>
                                    <li onClick={ () => HeaderComponent.navigateTo('/')} id="/">
                                        Home
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
