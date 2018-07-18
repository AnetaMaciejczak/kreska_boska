import React from 'react';

import StoryblokClient from 'storyblok-js-client'

var Storyblok = new StoryblokClient({
    accessToken: 'EhXUhurZ9rt1N8hsUPbPjgtt' // Your preview token
})

class Cms extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // Storyblok
        //     .get('cdn/spaces/46348/stories')
        //     .then( response => {
        //         console.log(response)
        //     })
    }
    render() {
        return <div></div>
    }
}

export {Cms}
