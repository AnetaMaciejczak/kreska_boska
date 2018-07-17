import React from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends React.Component {
    render () {
        return (
            <section className="header">
                <div className="container">
                    <header className="header">
                        <p id="header_holder_logo">
                            <img id="header_logo" src="./img/logo.png" alt=""/>
                        </p>
                        <p id="header_holder_sign">
                            <img id="header_logo_sign" src="./img/sign.png" alt=""/>
                        </p>
                        <p><i className="header_hamburger fas fa-align-right"></i></p>
                        <ul className="header_menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/inreal">InReal</Link>

                            </li>
                            <li>
                                <Link to="/about">About</Link>

                            </li>
                            <li>
                                <Link to="/contact">Kontakt</Link>
                            </li>
                        </ul>
                    </header>
                </div>
            </section>
        )
    }
}
export {Header}