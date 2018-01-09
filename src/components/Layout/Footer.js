import React from 'react';

const Footer = ({isLanding}) => {
    if (isLanding)
        return (<div></div>)
    else return (
        <footer>
            <div className="container">
                <div className="row footer-content">
                    <div className="col-sm-3 col-6">
                        <h2>Who We Are</h2>
                        <a href="">About Us</a>
                        <a href="">Careers</a>
                        <a href="">Feature Tour</a>
                        <a href="">Presentation</a>
                    </div>

                    <div className="col-sm-3 col-6">
                        <h2>Support</h2>
                        <a href="">Knowledge Base</a>
                        <a href="">Video Guides</a>
                        <a href="">Report a Bug</a>
                        <a href="">Terms of Use</a>
                    </div>

                    <div className="col-sm-3 col-6">
                        <h2>Contact Us</h2>
                        <a href="">astraler2017@astraler.com</a>
                        <a href="">Studio M, 4th Floor8 Lower
                            Manchester street, M1 5QF</a>
                        <a href="">+38 976 0875 9922</a>
                    </div>

                    <div className="col-sm-3 col-6">
                        <h2>Follow Us</h2>
                        <a href="">About Us</a>
                        <a href="">Careers</a>
                        <a href="">Feature Tour</a>
                        <a href="">Presentation</a>
                    </div>
                </div>

                <div className="line">

                </div>

                <div className="footer-bottom">
                    <div className="item">
                        <a href="">Shop</a>
                    </div>
                    <div className="item">
                        <a href="">Service</a>
                    </div>
                    <div className="item">
                        <a href="">Journal</a>
                    </div>
                    <div className="item">
                        <a href="">About</a>
                    </div>
                    <div className="item">
                        <a href="">Support</a>
                    </div>
                    {/*<div className="mr-auto"></div>*/}
                    <div className="item copyright">
                        <p>© 2017 Ask Gauge </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer