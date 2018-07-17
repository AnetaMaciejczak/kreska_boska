import React from 'react';

class Inreal extends React.Component {
    render() {
        return (
            <section className="inreal">
                <div className="container">
                    <div className=" container-grid inreal_gallery">
                        <div className="col-4 inreal_gallery_holder_img">
                            <img className="inreal_gallery_img" src="./img/img_inreal/wystawa1.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="inreal_gallery_img" src="./img/img_inreal/wystawa2.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="inreal_gallery_img" src="./img/img_inreal/wystawa3.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export {Inreal}