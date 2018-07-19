import React from 'react';

class Footer extends React.Component {
    render(){
        return(

            <footer className="footer">
                <div className="container">
                    <a href="https://www.facebook.com/KreskaBoska/"
                       target="_blank"
                       className="footer_facebook_icon">
                        <img className="footer_facebook_img" src="../../img/facebook.png"/>
                    {/*<i className="fab fa-facebook-square"></i>*/}
                    </a>

                    <a href="https://www.instagram.com/kreska.boska/"
                       target="_blank"
                       className="footer_instagram_icon">
                        <img className="footer_instagram_img" src="../../img/instagram.png"/>
                    </a>

                </div>
            </footer>

        )
    }
}

export {Footer}