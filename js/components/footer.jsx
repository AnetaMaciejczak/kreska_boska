import React from 'react';

class Footer extends React.Component {
    render(){
        return(

            <footer className="footer">
                <div className="container">
                    <span className="footer_facebook_icon">
                    <i className="fab fa-facebook-square"></i>
                    </span>

                    <span className="footer_instagram_icon">
                    <i className="fab fa-instagram"></i>
                    </span>

                    <span>
                    <i className="fas fa-angle-double-down"></i>
                    </span>
                </div>
            </footer>

        )
    }
}

export {Footer}