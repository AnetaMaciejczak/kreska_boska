import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.scrollToTop = this.scrollToTop.bind(this);
        this.state = {
            active: 3,
            targetZoom: -1,
            targetOpacity: -1,
            title: -1
        }
    }

    handleClick = () => {
        if(this.state.active < this.props.data.length){

                this.setState({
                    active: (this.props.data.length % 3 != 0) && (this.props.data.length - this.state.active < 3) ?
                        this.state.active + (this.props.data.length - this.state.active):
                        this.state.active + 3,
                    targetZoom: -1
                })

        }
    }

    handleClickImg = (e, i) => {
        if (this.state.targetZoom !== i) {
            this.setState ({
                targetZoom: i,
                targetOpacity: -1,
                title: -1
            })
        } else {
            this.setState ({
                targetZoom: -1,
            })
        }
    }

    handleMouseEnter = (e, i) => {
        this.setState ({
            targetOpacity: i,
            title: i
        })
    }

    handleMouseLeve =(e, i) => {
        // console.log("title");
        this.setState ({
            targetOpacity: -1,
            title: -1
        })
    }
    
    componentDidMount () {
        Events.scrollEvent.register('begin', function(to, element) {
        });
        Events.scrollEvent.register('end', function(to, element) {
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
    handleSetActive = (to) => {
        console.log(to);
    }

    render() {
        // console.log(this.state.active)
            const arrActiv = [];
            if( this.props.data.length > 0 ) {

               for (let i = 0; i < this.state.active; i++) {
                   let data = this.props.data[i].content;

                   const isZoom = this.state.targetZoom === i ? "galleryImgZoom" : "";
                   const isOpacity = (this.state.targetOpacity != i) && (this.state.targetOpacity != -1) ?
                       "galleryOpacity" :
                       "";

                   let allClass = `${isOpacity} home_gallery_img ${isZoom}`
                   const display = this.state.title === i ? "home_gallery_display": "";

                   let allTitleClass = `${display} home_gallery_title`
                   const elem =  <div  key={[i]} className="col-4 home_gallery_holder_img">

                                   <img
                                        onMouseEnter={e => this. handleMouseEnter( e, i )}
                                        onMouseLeave={e => this. handleMouseLeve( e, i )}
                                        onClick={e => this.handleClickImg( e, i )}
                                        src={data.image}
                                        className={allClass}
                                   />
                                   <h1 className={allTitleClass}>{data.title}

                                   </h1>

                               </div>;
                   arrActiv.push(elem)
               }
           }

        return  (
            <section className="home" >
                <div  className="container">
                    <div className="home_gallery container-grid">
                    {arrActiv}
                    </div><Element name="test1" className="element"/>
                </div>
                    <a onClick={this.scrollToTop}>
                        <img className="upInreal"
                         src= "./img/angle-up.png"/>
                    </a>
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <img className="downInreal"
                     src= "./img/if_angle-double-down.png"
                     onClick={this.handleClick}/>
                    </Link>
        </section>
        )
    }
}

export {Home}
