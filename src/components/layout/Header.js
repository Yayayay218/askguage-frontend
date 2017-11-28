import React from 'react';
import {Link} from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-base" style={{marginBottom: '2em'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/*<div className="mr-auto"></div>*/}
                    {/*<ul className="navbar-nav">*/}
                        {/*/!*<li className="nav-item">*!/*/}
                            {/*/!*<HeaderNav className="nav-link active" filter="full-match">Full Match Replays</HeaderNav>*!/*/}
                        {/*/!*</li>*!/*/}
                        {/*<li className="nav-item">*/}
                            {/*<HeaderNav className="nav-link" filter="full-match">Full Match Replays</HeaderNav>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                            {/*<HeaderNav className="nav-link" filter="high-light">HighLights</HeaderNav>*/}
                        {/*</li>*/}

                        {/*<li className="nav-item">*/}
                            {/*/!*<a className="nav-link " href="/watch-live">Watch Live</a>*!/*/}
                            {/*<HeaderNav className="nav-link" filter="watch-live">Watch Live</HeaderNav>*/}
                        {/*</li>*/}

                    {/*</ul>*/}
                </div>
            </div>
        </nav>
    )
};

export default Header