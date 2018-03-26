import React from 'react';

const Footer = ({isLanding}) => {
    if (isLanding)
        return (<div></div>)
    else return (
        <footer>
            <div className="container">
                <div className="row footer-content">

                </div>

                <div className="footer-bottom">
                    <div className="item">
                        <a href="">© 2018 Ask Gauge</a>
                    </div>
                    <div className="item">
                        <a href="https://askgauge.ca/privacy-policy/">Privacy Policy</a>
                    </div>
                    <div className="item">
                        <a href="https://askgauge.ca/terms-condition/">Terms & Condition</a>
                    </div>
                    <div className="item">
                        <a href="https://askgauge.ca/contact-us/">Contact Us</a>
                    </div>
                    {/*<div className="item">*/}
                        {/*<a href="">Support</a>*/}
                    {/*</div>*/}
                    {/*/!*<div className="mr-auto"></div>*!/*/}
                    {/*<div className="item copyright">*/}
                        {/*<p>© 2018 Ask Gauge </p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </footer>
    )
}

export default Footer