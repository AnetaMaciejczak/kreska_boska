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


import StoryblokClient from 'storyblok-js-client'

var Storyblok = new StoryblokClient({
    accessToken: 'EhXUhurZ9rt1N8hsUPbPjgtt' // Your preview token
})

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dataHome:[],
            dataInreal:[]
        }
    }

    componentDidMount() {
        Storyblok
            .get('cdn/spaces/46348/stories')
            .then( response => {

                const dataArr = response.data.stories;
                // console.log("all:", dataArr);

                const dataHomeArr = dataArr.filter( item => {
                    return item.content.categorie === "home";
                })

                // console.log("home",dataHomeArr)

                const dataInrealArr = dataArr.filter(item => {
                    return item.content.categorie === "inreal"
                })
                
                // console.log("inreal", dataInrealArr);

                this.setState({
                    /*tutaj podmienić do właściewgo state*/
                    dataHome: dataHomeArr,
                    dataInreal: dataInrealArr
                })

            })
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Header/>
                     <Switch>
                            <Route exact path='/' component={ () => <Home data={this.state.dataHome}/>} />
                            <Route path='/inreal' component={() => <Inreal data={this.state.dataInreal}/>} />
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