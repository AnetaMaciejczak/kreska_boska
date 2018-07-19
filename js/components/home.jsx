import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 3,
            targetZoom: -1,
            targetOpacity: -1,
        }
    }

    handleClick = () => {
        if(this.state.active < this.props.data.length){
            if (this.props.data.length % 3 === 0) {
                this.setState({
                    active: this.props.data.length % 3 === 0 ?
                            this.state.active + 3:
                            this.state.active + (this.props.data.length - this.state.active)
                })
            }
        }
    }

    handleClickImg = (e, i) => {
        if (this.state.targetZoom !== i) {
            this.setState ({
                targetZoom: i,
                targetOpacity: -1
            })
        } else {
            this.setState ({
                targetZoom: -1
            })
        }
    }

    handleMouseEnter = (e, i) => {
        this.setState ({
            targetOpacity: i
        })
    }

    handleMouseLeve =(e, i) => {
        this.setState ({
            targetOpacity: -1,
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
    handleSetActive = (to) => {
        // console.log(to);
    }

    render() {
        console.log(this.state.active)
            const arrActiv = [];
            if( this.props.data.length > 0 ) {

               for (let i = 0; i < this.state.active; i++) {
                   let data = this.props.data[i].content;

                   const isZoom = this.state.targetZoom === i ? "galleryImgZoom" : "";

                   const isOpacity = this.state.targetOpacity === i ? "galleryOpacity" : "";

                   let allClass = `${isOpacity} home_gallery_img ${isZoom}`


                   const elem =  <div className="col-4 home_gallery_holder_img">

                                   <img
                                        key={[i]}
                                        onMouseEnter={e => this. handleMouseEnter( e, i )}
                                        onMouseLeave={e => this. handleMouseLeve( e, i )}
                                        onClick={e => this.handleClickImg( e, i )}
                                        src={data.image}
                                        className={allClass}
                                   />
                                   <h1 className="home_gallery_title">{data.title}</h1>
                               </div>;
                   arrActiv.push(elem)
               }
           }
            // console.log(arrActiv);
            // console.log(this.state.active);

        return  (<section className="home">
            <div className="container">

                <div className="home_gallery container-grid">
                    {arrActiv}
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

export {Home}
