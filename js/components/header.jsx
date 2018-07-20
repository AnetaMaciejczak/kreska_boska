import React from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            menuStyle: 0,
        }
    }

    handleHamburgerClick = () => {
        this.state.menuStyle === 0 ?
        this.setState ({
            menuStyle: 1,
        })
            : this.setState ({
            menuStyle: 0})
    }

    handleManuClick = () => {
        this.setState ({
            menuStyle: 0,
    })

    }

    render () {
        return (
            <section className="header">
                <div className="container">
                    <header className="header">
                        <p id="header_holder_logo">
                            <img id="header_logo" src="./img/logo_line.png" alt=""/>
                        </p>

                        <img    className ="header_hamburger"
                                src="./img/if_menu_926652.png"
                                onClick={this.handleHamburgerClick}/>

                        <ul onClick= {this.handleManuClick} className="header_menu" style={{opacity: this.state.menuStyle}}>
                            <li>
                                <Link replace to="/">Home</Link>
                            </li>
                            <li>
                                <Link replace to="/inreal">InReal</Link>

                            </li>
                            <li>
                                <Link replace to="/about">About</Link>

                            </li>
                            <li>
                                <Link replace to="/contact">Kontakt</Link>
                            </li>
                        </ul>
                    </header>
                </div>
            </section>
        )
    }
}
export {Header}