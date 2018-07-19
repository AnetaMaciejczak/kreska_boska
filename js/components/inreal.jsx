import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Inreal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 3
        }
    }

    handleClick = () => {
        if (this.props.data.length % 3 === 0) {
            this.setState({
                active: this.state.active + 3
            })
        } else if (this.props.data.length === this.state.active) {
            console.log( "jestem równy");
            this.setState ({
                active: this.state.active
            })
        }else {
            this.setState({
                active: this.state.active + (this.props.data.length - this.state.active)
            })
        }
    }

    componentDidMount () {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });
        scrollSpy.update();
    }
    componentWillUnmount () {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // }
    // scrollToBottom = () => {
    //     scroll.scrollToBottom();
    // }
    // scrollTo = () => {
    //     scroll.scrollTo(100);
    // }
    // scrollMore = () => {
    //     scroll.scrollMore(100);
    // }
    // handleSetActive = (to) => {
    //     console.log(to);
    // }


    render() {
        const arrActivInreal = [];
        if( this.props.data.length > 0 ) {
            for (let i = 0; i < this.state.active; i++) {
                let data = this.props.data[i].content;
                const elem =  <div key={[i]} className="col-4 inreal_gallery_holder_img">
                    <img src={data.image} className="inreal_gallery_img"/>
                    <h1 className="inreal_gallery_title">{data.title}</h1>
                </div>;
                arrActivInreal.push(elem)
            }
        }
        // console.log(arrActivInreal);
        // console.log(this.state.active);

        return (
            <section className="inreal">
                <div className="container">
                    <div className=" container-grid inreal_gallery">
                        {arrActivInreal}
                    </div>
                </div>
                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                <img className="downInreal"
                     src= "../../img/if_angle-double-down.png"
                     onClick={this.handleClick}/>
                </Link>
                <Element name="test1" className="element"/>
            </section>

        )
    }
}

export {Inreal}