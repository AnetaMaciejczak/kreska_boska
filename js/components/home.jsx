import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 3
        }
    }

    handleClick = () => {
        this.setState ({
            active: this.state.active + 3
        })
    }

    render() {
            const arrActiv = [];
            if( this.props.data.length > 0 ) {
               for (let i = 0; i < this.state.active; i++) {
                   let data = this.props.data[i].content;
                   const elem =  <div className="col-4 home_gallery_holder_img">
                       <img src={data.image} className="home_gallery_img"/>
                       <h1 className="home_gallery_title">{data.title}</h1>
                   </div>;
                   arrActiv.push(elem)
               }
           }
            console.log(arrActiv);
            console.log(this.state.active);
        return  (<section className="home">
            <div className="container">
                <div className="home_gallery container-grid">
                    {arrActiv}
                </div>
            </div>
            <span onClick={this.handleClick}>
                    <i className="fas fa-angle-double-down"></i>
                </span>
        </section>
        )
    }
}

export {Home}
