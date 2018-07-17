import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <div className="container">
                    <div className="home_gallery container-grid">
                        <div className="col-4 home_gallery_holder_img">
                            <img className="home_gallery_img" src="./img/img_gallery/papierosek%20100x1300.jpg"
                                 alt="papierosek"/>
                        </div>
                        <div className="col-4">
                            <img className="home_gallery_img" src="./img/img_gallery/gorset%20100x1300.jpg"
                                 alt="papierosek"/>
                        </div>
                        <div className="col-4">
                            <img className="home_gallery_img" src="./img/img_gallery/kompleksy%20100x1300.jpg"
                                 alt="papierosek"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export {Home}
