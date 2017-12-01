import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'

const FormErrors = ({formErrors, name}) => {
    return (
        <div>
            {
                formErrors[name].length > 0 ? <div className="alert alert-danger" role="alert">
                    {name} {formErrors[name]}
                </div> : <div></div>
            }
        </div>
    )
}

const Error = ({message}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    )
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
        this.onLogin = this.onLogin.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    componentDidMount() {

    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {
                [name]: value
            },
            () => {
                this.validateField(name, value)
            }
        )
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    onLogin() {
        const {state} = this;
        this.props.dispatch(Actions.login(state));
    }

    render() {
        // console.log(this)
        return (
            <div className="container">
                <div className="login-header">
                    <h1 className="row justify-content-center">Log In</h1>
                    <p className="row justify-content-center">Don't have an account?&nbsp;<a href="/signup">Sign up</a></p>
                </div>

                <div className="login-form">
                    <div className="form-group row">
                        <label className="col-sm-4 col-3 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-4 col-8">
                            <input type="email" className="form-control"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.handleUserInput}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-3 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-4 col-8">
                            <input type="password" className="form-control"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.handleUserInput}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4 offset-sm-4 forgot-password center-align">
                            <label className="col-sm-6 custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"/>
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description custom-label">Remember me</span>
                            </label>
                            <a href="" className="col-sm-6">Forgot Password?</a>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4 offset-sm-4 center-align">
                            <button className="btn btn-login"
                                    onClick={this.onLogin}
                            >
                                Log In
                            </button>
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
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {error: state.auth.error, isLogged: state.auth.isLogged}

}

export default connect(mapStateToProps)(Login)