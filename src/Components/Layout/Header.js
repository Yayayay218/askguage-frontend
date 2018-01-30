import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Actions from '../../Actions/Creators'
import logo from '../../Assets/images/logo.svg'

class Header extends Component {
    constructor(props) {
        super(props)
        this.signOut = this.signOut.bind(this)
    }

    signOut() {
        this.props.dispatch(Actions.signOut())
    }

    render() {
        const {user, token} = this.props
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
                                            <a className="nav-link" href="/login">Login</a>
                                        </li>
                                        <li className="nav-item sign-up">
                                            <a className="nav-link" href="/signup/customer">Sign up</a>
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
                                    className={!token ? 'collapse navbar-collapse hidden-nav' : 'collapse navbar-collapse'}
                                    id="navbarSupportedContent"
                                >
                                    {
                                        !token ? <div></div> :
                                            <ul className="navbar-nav mr-auto" style={{marginLeft: 'auto'}}>
                                                <li className="nav-item" style={{marginRight: '7rem'}}>
                                                    {
                                                        user.role === 0 ?
                                                            <a className="nav-link" href="/my-requests">My Request</a>
                                                            :
                                                            <a className="nav-link" href="/customer-requests">Customer
                                                                Request</a>
                                                    }
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">How It Works</a>
                                                </li>
                                            </ul>

                                    }
                                    <ul className="navbar-nav">
                                        {
                                            !token ? <li></li>
                                                : <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink"
                                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                       href="">{this.props.user.firstName}</a>
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                        <a className="dropdown-item" href="/my-profiles"
                                                        >My Profile</a>
                                                        <a className="dropdown-item"
                                                           onClick={() => {
                                                               this.props.dispatch(Actions.signOut(token))
                                                           }}>Sign
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

// Maps state from Store to props
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.data,
        isLogged: state.auth.isLogged,
        token: state.auth.token
    }
};

export default connect(mapStateToProps)(Header)