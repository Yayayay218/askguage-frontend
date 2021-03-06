import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import Layout from '../App'
import moment from 'moment';
import NumberFormat from 'react-number-format'
import FacebookLogin from 'react-facebook-login';

function Input(props) {
    return (
        <div className="col-md-6">
            <div className="row">
                <label className="col-md-12 custom-label">
                    {props.label}
                </label>
                <div className="col-md-12">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            phoneNumber: '',
            role: '0',
            kindOfService: '',
            emailValid: false,
            passwordValid: false,
            firstNameValid: false,
            phoneValid: false,
            formValid: false,
            formErrors: {email: '', password: '', firstName: '', phoneNumber: ''},
            error: '',
            tos: 0
        }
        this.doSignUp = this.doSignUp.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    responseFacebook = (response) => {
        this.props.dispatch(Actions.loginFacebook({accessToken: response.accessToken}))
    }

    componentWillReceiveProps(newProps) {
        const {history, requestTmp} = this.props
        if (newProps.signUpDone) {
            if (requestTmp.isDone) {
                this.props.dispatch(Actions.postRequest({
                    ...requestTmp.data,
                    userId: newProps.userId,
                    birthDay: moment.utc(requestTmp.birthDay).format()
                }))
                history.push('/login', {signup: true})
            }
            else
                history.push('/login', {signup: true})
        }
        if (!this.props.error && newProps.error)
            this.setState({
                error: newProps.error,
            })
        if (newProps.token)
            history.push('/')
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
    }

    doSignUp() {
        const {email, password, firstName, phoneNumber, role, kindOfService} = this.state
        let data = {};
        let _firstName = firstName.split(' ')[0]
        let _lastName = ''
        if (firstName.split(' ').length > 1) {
            let tmp = firstName.split(' ')
            tmp.shift()
            _lastName = tmp.join(' ')
        }
        if (role == 0)
            data = {
                email: email.toLowerCase(),
                password: password,
                firstName: _firstName,
                lastName: _lastName,
                phoneNumber: phoneNumber,
                role: role,
            }
        else
            data = {
                email: email.toLowerCase(),
                password: password,
                firstName: _firstName,
                lastName: _lastName,
                phoneNumber: phoneNumber,
                profiles: {kindOfService: kindOfService},
                role: role,
            }
        this.props.dispatch(Actions.signUp(data));
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let firstNameValid = this.state.firstNameValid;
        let phoneValid = this.state.phoneValid;

        switch (fieldName) {
            case 'email':
                emailValid = (
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value);
                fieldValidationErrors.email = emailValid ? '' : 'Email is invalid'
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'Password must be more than 6 characters'
                break;
            case 'firstName':
                firstNameValid = value.length !== 0;
                fieldValidationErrors.firstName = firstNameValid ? '' : 'Name is required'
                break;
            case 'phone':
                phoneValid = (/^\d{10}$/).test(value);
                fieldValidationErrors.phoneNumber = phoneValid ? '' : 'Phone Number is invalid'
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            firstNameValid: firstNameValid,
            phoneValid: phoneValid
        }, this.validateForm);
    }

    checkService(role, service) {
        if (role === 1)
            return service !== ''
        return true
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid && this.state.firstNameValid && this.state.phoneValid
            && this.checkService(this.state.role, this.state.kindOfService) && this.state.tos == 1
        });
    }

    render() {
        const {history, isSignup} = this.props
        const bind = (field) => ({
            value: this.state[field],
            onChange: (e) => this.setState({[field]: e.target.value},
                this.validateField(field, e.target.value)
            )
        })

        return (
            <Layout isLanding={false}>
                <div className="container create-request-form">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="flip-panel">
                                <div className="request-intro">
                                    <h3>Join Ask Gauge!</h3>
                                    <p>Let us simplify your home buying journey and help you make smarter, faster, and
                                        informed decisions.</p>
                                    <p>Already have an account? <a style={{cursor: 'pointer'}} onClick={() => {
                                        history.push('/login')
                                    }}>Sign in</a></p>
                                </div>
                            </div>
                            {!this.props.requestTmp.isDone && (<div className="form-group row">
                                <div className="col-md-12">
                                    <div className="d-flex flex-row">
                                        <label className="col-md-6 custom-control custom-checkbox">
                                            <input type="radio" className="custom-control-input"
                                                   value='0'
                                                   name='role'
                                                   defaultChecked={true}
                                                   onChange={() => this.setState({
                                                       role: 0,
                                                   })}
                                            />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description custom-label-signup">As a customer</span>
                                        </label>
                                        <label className="col-md-6 custom-control custom-checkbox">
                                            <input type="radio" className="custom-control-input"
                                                   value='1'
                                                   name='role'
                                                   onChange={() => this.setState({
                                                       role: 1,
                                                   })}
                                            />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description custom-label-signup">As service provider</span>
                                        </label>
                                    </div>
                                </div>
                            </div>)}
                            <div className="form-group row first-row">
                                <Input
                                    label="name *"
                                >
                                    <input type="text" className="form-control"
                                           {...bind("firstName")}
                                    />
                                    {
                                        this.state.formErrors.firstName !== '' &&
                                        <p className="error-text">{this.state.formErrors.firstName}</p>
                                    }
                                </Input>
                                <Input
                                    label="email *"
                                >
                                    <input type="text" className="form-control"
                                           {...bind("email")}
                                    />
                                    {
                                        this.state.formErrors.email !== '' &&
                                        <p className="error-text">{this.state.formErrors.email}</p>
                                    }
                                    {
                                        this.state.error !== '' && <p className="error-text">Email already exists</p>
                                    }
                                </Input>
                            </div>
                            <div className="form-group row">
                                <Input
                                    label="phone *"
                                >
                                    <NumberFormat
                                        format="##########"
                                        mask="_"
                                        className="form-control"
                                        onValueChange={(values) => this.setState({
                                            phoneNumber: values.value
                                        }, this.validateField('phone', values.value))}
                                    />
                                    {
                                        this.state.formErrors.phoneNumber !== '' &&
                                        <p className="error-text">{this.state.formErrors.phoneNumber}</p>
                                    }
                                </Input>
                                <Input
                                    label="password *"
                                >
                                    <input type="password" className="form-control"
                                           {...bind("password")}
                                    />
                                    {
                                        this.state.formErrors.password !== '' &&
                                        <p className="error-text">{this.state.formErrors.password}</p>
                                    }
                                </Input>
                            </div>
                            {
                                this.state.role == 1 &&
                                <div className="form-group row">
                                    <Input label="What service do you provide? *">
                                        <select className="custom-select"
                                                {...bind('kindOfService')}
                                        >
                                            <option value=""></option>
                                            <option value="1">Mortgage Agent</option>
                                            <option value="4">Mortgage Advisor</option>
                                            <option value="0">Real Estate Agent</option>
                                            <option value="3">Real Estate Lawyer</option>
                                            <option value="2">Home Inspector</option>
                                        </select>
                                    </Input>
                                </div>
                            }

                            <div className="terms-conditions">
                                <label className="col-12 custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                           name="tos"
                                           value="1"
                                           defaultChecked={false}
                                           onClick={() => this.setState({
                                               tos: this.state.tos === 0 ? '1' : 0,
                                           }, this.validateForm)}
                                    />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description custom-label tos">By signing up, you acknowledge and agree to Ask Gauge's <a
                                        href="https://askgauge.ca/terms-condition/"
                                        target="_blank">Terms & Conditions</a> and
                                    <a href="https://askgauge.ca/privacy-policy/" target="_blank"> Privacy Policy</a></span>
                                </label>
                            </div>
                            {
                                isSignup ?
                                    <button className="btn btn-next sign-up m-progress"
                                            disabled={true}
                                    >sign up
                                    </button>
                                    :
                                    <button className="btn btn-next sign-up"
                                            onClick={this.doSignUp}
                                            disabled={!this.state.formValid}
                                    >sign up
                                    </button>
                            }

                            <div className="form-group row">
                                <div className="col-md-12">
                                    <div className="line">
                                        <span className="text">Or Sign up with</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12 col-12">
                                    <FacebookLogin
                                        appId="336894240165471"
                                        isMobile={true}
                                        disableMobileRedirect={true}
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        cssClass="social-box facebook"
                                        scope="public_profile, email"
                                        textButton=""
                                        callback={this.responseFacebook}
                                    />
                                    {/*<div className="social-box facebook"></div>*/}
                                </div>
                                {/*<div className="col-md-6 col-6">*/}
                                {/*<div className="social-box linkedin"></div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        error: state.auth.error,
        isSignup: state.auth.isSignup,
        signUpDone: state.auth.signUpDone,
        userId: state.auth.userId,
        requestTmp: state.requestTmp,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(SignUp)

