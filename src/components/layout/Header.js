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
    signOut () {
        this.props.dispatch(Actions.signOut())
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-base" style={{marginBottom: '2em'}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Logo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className={!this.props.isLogged ? 'collapse navbar-collapse hidden-nav' : 'collapse navbar-collapse'}
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto" style={{marginLeft: 'auto'}}>
                                <li className="nav-item" style={{marginRight: '7rem'}}>
                                    <a className="nav-link" href="/my-requests">Customer Request</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">How It Works</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                {
                                    typeof this.props.user == 'undefined' ? <li></li>
                                        : <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                               href="#">{this.props.user.firstName + ' ' + this.props.user.lastName}</a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <a className="dropdown-item" href="#" onClick={this.signOut}>Sign Out</a>
                                            </div>
                                        </li>
                                }

                            </ul>
                        </div>
                    </div>
                </nav>
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