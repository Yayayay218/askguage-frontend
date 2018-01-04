import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'

const Error = ({message, field}) => {
    if (message && message.message)
        return (
            <p className="error-text">
                {message.message}
            </p>
        )
    else return (<div></div>)
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            confirmPassword: '',
            role: '0'
        }
        this.onSignUp = this.onSignUp.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    componentDidMount() {

    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        if (!this.props.errors && newProps.errors)
            this.setState({
                errors: newProps.errors,
                errorField: newProps.errors.param
            })
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
    }

    onSignUp() {
        const {state} = this
        this.props.dispatch(Actions.signUp(state));
    }

    render() {
        console.log(this)
        return (
            <div className="container">
                <div className="login-header">
                    <h1 className="row justify-content-center">Sign Up</h1>
                    <p className="row justify-content-center">Already have an account?&nbsp;<a href="/login">Login</a>
                    </p>
                </div>

                <div className="login-form">
                    <div className="form-group row">
                        <div className="col-sm-4 offset-sm-4 center-align" style={{display: 'inline-flex'}}>
                            <label className="col-sm-6 custom-control custom-checkbox">
                                <input type="radio" className="custom-control-input"
                                       name="role"
                                       value="0" onChange={this.handleUserInput}
                                       defaultChecked={true}
                                />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description custom-label">As a customer</span>
                            </label>
                            <label className="col-sm-6 custom-control custom-checkbox" style={{marginLeft: '-23px'}}>
                                <input type="radio" className="custom-control-input"
                                       name="role"
                                       value="1"
                                       onChange={this.handleUserInput}
                                />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description custom-label">As service provider</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-3 col-form-label">
                            First Name *
                        </label>
                        <div className="col-sm-4 col-8">
                            <input type="text"
                                   className={this.state.errorField === 'firstName' ? 'form-control error' : 'form-control'}
                                   name="firstName"
                                   onChange={this.handleUserInput}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-3 col-form-label">
                            Last Name *
                        </label>
                        <div className="col-sm-4 col-8">
                            <input type="text"
                                   className={this.state.errorField === 'lastName' ? 'form-control error' : 'form-control'}
                                   name="lastName"
                                   onChange={this.handleUserInput}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-3 col-form-label">
                            Email *
                        </label>
                        <div className="col-sm-4 col-8">
                            <input type="text"
                                   className={this.state.errorField === 'email' ? 'form-control error' : 'form-control'}
                                   name="email"
                                   onChange={this.handleUserInput}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-3 col-form-label">
                            Phone {this.state.role == 0 ? '' : '*'}
                        </label>
                        <div className="col-sm-4 col-8">
                            <input type="text" className="form-control"
                                   name="phoneNumber"
                                   onChange={this.handleUserInput}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-3 col-form-label">
                            Password *
                        </label>
                        <div className="col-sm-4 col-8">
                            <input type="password"
                                   className={this.state.errorField === 'password' ? 'form-control error' : 'form-control'}
                                   name="password"
                                   onChange={this.handleUserInput}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-3 col-form-label">
                            Confirm Password *
                        </label>
                        <div className="col-sm-4 col-8">
                            <input type="password"
                                   className={this.state.errorField === 'confirmPassword' ? 'form-control error' : 'form-control'}
                                   name="confirmPassword"
                                   onChange={this.handleUserInput}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4 offset-sm-4">
                            {<Error message={this.state.errors}/>}
                        </div>
                    </div>

                    <div className="form-group row" style={{marginTop: '30px'}}>
                        <div className="col-sm-4 offset-sm-4 center-align">
                            {
                                !this.props.isSignup ?
                                    <button className="btn btn-login"
                                            onClick={this.onSignUp}
                                    >
                                        Sign Up
                                    </button>
                                    :
                                    <button className="btn btn-login m-progress"
                                    >
                                        Sign Up
                                    </button>
                            }

                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4 offset-sm-4 center-align">
                            <div className="line">
                                <span className="text">or connect with</span>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4 offset-sm-4 center-align">
                            <div className="social-box">
                                <span className="facebook-icon"></span>
                            </div>

                            <div className="social-box">
                                <span className="linkedin-icon"></span>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4 offset-sm-4 center-align">
                            <div className="quote">
                                <label>By creating your account, you agree to our Terms of Service and Privacy
                                    Policy.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.auth.error,
        isSignup: state.auth.isSignup
    }
}

export default connect(mapStateToProps)(SignUp)

