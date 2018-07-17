import React from 'react';
import {Header} from "./header.jsx"
import {Footer} from "./footer.jsx"
import {Home} from "./home.jsx"
import {Inreal} from "./inreal.jsx"
import {About} from "./about.jsx"
import {Contact} from "./contact.jsx"

import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header/>
                     <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/inreal' component={Inreal} />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                     </Switch>
                    <Footer/>
                </div>
            </HashRouter>
        )
    }
}

export {App}