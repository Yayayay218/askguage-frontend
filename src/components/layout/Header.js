import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import logo from '../../assets/images/logo.svg'

class Header extends Component {
    constructor(props) {
        super(props)
        this.signOut = this.signOut.bind(this)
    }

    signOut() {
        this.props.dispatch(Actions.signOut())
    }

    render() {
        return (
            <header>
                {
                    this.props.isLanding ?
                        <nav className="navbar navbar-expand-lg navbar-dark bg-base-custom">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="/">
                                    <img src={logo} alt="Logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Design</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">CMS</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Cases</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">More</a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Login</a>
                                        </li>
                                        <li className="nav-item sign-up">
                                            <a className="nav-link" href="#">Sign up</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        : <nav className="navbar navbar-expand-lg navbar-dark bg-base" style={{marginBottom: '2em'}}>
                            <div className="container-fluid">
                                <a className="navbar-brand" href="/">
                                    <img src={logo} alt="Logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div
                                    className={typeof this.props.user == 'undefined' ? 'collapse navbar-collapse hidden-nav' : 'collapse navbar-collapse'}
                                    id="navbarSupportedContent"
                                >
                                    {
                                        typeof this.props.user == 'undefined' ? <div></div> :
                                            <ul className="navbar-nav mr-auto" style={{marginLeft: 'auto'}}>
                                                <li className="nav-item" style={{marginRight: '7rem'}}>
                                                    {
                                                        this.props.user.role == 0 ?
                                                            <a className="nav-link" href="/my-requests">My Request</a>
                                                            :
                                                            <a className="nav-link" href="/my-requests">Customer Request</a>
                                                    }
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">How It Works</a>
                                                </li>
                                            </ul>

                                    }
                                    <ul className="navbar-nav">
                                        {
                                            typeof this.props.user == 'undefined' ? <li></li>
                                                : <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink"
                                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                       href="#">{this.props.user.firstName + ' ' + this.props.user.lastName}</a>
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                        <a className="dropdown-item" href="#" onClick={this.signOut}>Sign
                                                            Out</a>
                                                    </div>
                                                </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>
                }
            </header>
        )
    }
};

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.data.data,
        isLogged: state.auth.isLogged
    }
};

export default connect(mapStateToProps)(Header)