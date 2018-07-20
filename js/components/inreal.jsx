import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Inreal extends React.Component {
    constructor(props) {
        super(props)
        this.scrollToTop = this.scrollToTop.bind(this);
        this.state = {
            active: 3,
            targetZoomInreal: -1,
            targetOpacityInreal: -1,
        }
    }

    handleClick = () => {
        if(this.state.active < this.props.data.length){
                this.setState({
                    active: (this.props.data.length % 3 != 0) && (this.props.data.length - this.state.active < 3) ?
                        this.state.active + (this.props.data.length - this.state.active):
                        this.state.active + 3,
                    targetZoomInreal: -1
                })
        }
    }
    handleClickImg = (e, i) => {
        if (this.state.targetZoomInreal !== i) {
            this.setState ({
                targetZoomInreal: i,
                targetOpacityInreal: -1
            })
        } else {
            this.setState ({
                targetZoomInreal: -1
            })
        }
    }

    handleMouseEnter = (e, i) => {
        this.setState ({
            targetOpacityInreal: i
        })
    }

    handleMouseLeve =(e, i) => {
        this.setState ({
            targetOpacityInreal: -1,
        })
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
    scrollToTop = () => {
        scroll.scrollToTop();
    }
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

                const isZoom = this.state.targetZoomInreal === i ? "galleryImgZoomInreal" : "";
                const isOpacity = (this.state.targetOpacityInreal != i) && (this.state.targetOpacityInreal != -1)
                    ? "galleryOpacity"
                    : "";

                let allClass = `${isOpacity} inreal_gallery_img ${isZoom}`

                const elem =  <div key={[i]} className="col-4 inreal_gallery_holder_img">
                                <img
                                    onMouseEnter={e => this. handleMouseEnter( e, i )}
                                    onMouseLeave={e => this. handleMouseLeve( e, i )}
                                    onClick={e => this.handleClickImg( e, i )}
                                    src={data.image}
                                    className={allClass}/>
                                <h1 className="inreal_gallery_title">{data.title}</h1>
                            </div>;
                arrActivInreal.push(elem)
            }
        }

        return (
            <section className="inreal">
                <div className="container">
                    <div className=" container-grid inreal_gallery">
                        {arrActivInreal}
                    </div>
                </div>
                <a onClick={this.scrollToTop}>
                    <img className="upInreal"
                         src= "../../img/angle-up.png"/>
                </a>
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