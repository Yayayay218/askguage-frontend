import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../../Actions/Creators'
import Layout from '../../Containers/App'
import Axios from 'axios'
import Config from '../../Configs/AppSetting'

class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            newPassword: '',
            confirmPassword: '',
            emailValid: false,
            newPasswordValid: false,
            confirmPasswordValid: false,
            formValid: false,
            formErrors: {email: '', newPassword: '', confirmPassword: ''},
            error: '',
            message: '',
            isClicked: false

        }
        this.doSave = this.doSave.bind(this)
        this.doSent = this.doSent.bind(this)
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors
        let emailValid = this.state.emailValid;
        let newPasswordValid = this.state.newPasswordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = (
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value);
                fieldValidationErrors.email = emailValid ? '' : 'Email is invalid'
                break;
            case 'newPassword':
                newPasswordValid = value.length >= 6;
                fieldValidationErrors.newPassword = newPasswordValid ? '' : 'Password must be more than 6 characters'
                break;
            case 'confirmPassword':
                confirmPasswordValid = value.length !== 0 && value === this.state.newPassword;
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : 'Confirm password is invalid'
                break;
            default:
                break;
        }
        this.setState({
            emailValid: emailValid,
            newPasswordValid: newPasswordValid,
            confirmPasswordValid: confirmPasswordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.newPasswordValid && this.state.confirmPasswordValid});
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error && newProps.error.message !== "Unexpected end of JSON input")
            this.setState({error: newProps.error})
        if (newProps.error && newProps.error.message === "Unexpected end of JSON input")
            this.props.history.push('/')
    }

    doSave() {
        const {history} = this.props
        const {search} = this.props.location
        const {newPassword} = this.state
        let data = {
            newPassword: newPassword
        }
        Axios.post(Config.URL + '/users/reset-password' + search, data).then(res => history.push('/login'))
    }

    doSent() {
        this.setState({isClicked: true})
        Axios.post(Config.URL + '/users/reset', {
            email: this.state.email.toLowerCase()
        })
            .then(res => this.setState({
                message: "We've sent you a link to reset your password. Click the link in the email and enter a new password.",
                isClicked: false
            }))
            .catch(err => console.log(err))
    }

    renderResetPassword = (bind, formValid, formErrors) => {
        return (
            <div className="container create-request-form">
                <div className="row">
                    <div className="col-md-8">
                        <div className="flip-panel">
                            <div className="request-intro">
                                <h3>Reset Your Password</h3>
                            </div>
                        </div>
                        <div className="form-group row first-row">
                            <label className="col-md-12 custom-label">New Password</label>
                            <div className="col-md-12">
                                <input type="password" className="form-control"
                                       {...bind('newPassword')}
                                />
                                {
                                    formErrors.newPassword !== '' &&
                                    <p className="error-text">{formErrors.newPassword}</p>
                                }
                            </div>
                        </div>
                        <div className="form-group row first-row">
                            <label className="col-md-12 custom-label">Confirm Password</label>
                            <div className="col-md-12">
                                <input type="password" className="form-control"
                                       {...bind('confirmPassword')}
                                />
                                {
                                    formErrors.confirmPassword !== '' &&
                                    <p className="error-text">{formErrors.confirmPassword}</p>
                                }
                            </div>
                        </div>
                        <button className="btn btn-next sign-up"
                                onClick={this.doSave}
                                disabled={!formValid}
                        >Save
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const {search} = this.props.location
        // const {isFetching} = this.props.userActions
        const bind = (field) => ({
            value: this.state[field],
            onChange: (e) => this.setState({[field]: e.target.value}, this.validateField(field, e.target.value))
        })
        return (
            <Layout islanding={false}>
                {
                    search === '' ? <div className="container create-request-form">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="flip-panel">
                                        <div className="request-intro">
                                            <h3>Forgot Password?</h3>
                                        </div>
                                    </div>
                                    <div className="form-group row first-row">
                                        <label className="col-md-12 custom-label">We'll send you a link to reset it</label>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control"
                                                   {...bind('email')}
                                                   placeholder="Registered Email"
                                            />
                                            {
                                                this.state.message !== '' &&
                                                <p style={{marginTop: '15px'}}>{this.state.message}</p>
                                            }
                                        </div>
                                    </div>
                                    {this.state.isClicked ? <button className="btn btn-next sign-up m-progress"
                                                                    onClick={this.doSent}
                                                                    disabled={!this.state.emailValid}>Reset</button> :
                                        <button className="btn btn-next sign-up"
                                                onClick={this.doSent}
                                                disabled={!this.state.emailValid}>Reset</button>
                                    }
                                </div>
                            </div>
                        </div>
                        : this.renderResetPassword(bind, this.state.formValid, this.state.formErrors)
                }
            </Layout>
        )
    }
}


export default ResetPassword
