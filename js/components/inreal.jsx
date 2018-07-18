import React from 'react';

class Inreal extends React.Component {
    render() {

        const imgInreal =  this.props.data.length > 0 &&
            this.props.data.map( elem => {
                return <div className="col-4 inreal_gallery_holder_img">
                    <img src={elem.content.image} className="inreal_gallery_img"/>
                </div>
            })

        return (
            <section className="inreal">
                <div className="container">
                    <div className=" container-grid inreal_gallery">
                        {imgInreal}
                    </div>
                </div>
            </section>

        )
    }
}

export {Inreal}