import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../Actions/Creators'
import Layout from '../App'
import moment from 'moment';


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
    constructor(props, context) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            phoneNumber: '',
            role: '0'
        }
        this.doSignUp = this.doSignUp.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    componentDidMount() {

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

    doSignUp() {
        const {state} = this
        this.props.dispatch(Actions.signUp(state));
    }

    render() {
        // console.log(this)
        const {history, error, isSignup} = this.props
        const bind = (field) => ({
            value: this.state[field],
            onChange: (e) => this.setState({[field]: e.target.value})
        })

        return (
            <Layout isLanding={false}>
                <div className="container create-request-form">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="flip-panel">
                                <div className="request-intro">
                                    <h3>Sign up an account!</h3>
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
                                                   onChange={() => this.setState({role: 0})}
                                            />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description custom-label-signup">As a customer</span>
                                        </label>
                                        <label className="col-md-6 custom-control custom-checkbox">
                                            <input type="radio" className="custom-control-input"
                                                   value='1'
                                                   name='role'
                                                   onChange={() => this.setState({role: 1})}
                                            />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description custom-label-signup">As service provider</span>
                                        </label>
                                    </div>
                                </div>
                            </div>)}
                            <div className="form-group row first-row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <label className="col-md-12 custom-label">
                                            name
                                        </label>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control"
                                                   {...bind("firstName")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <label className="col-md-12 custom-label">
                                            email
                                        </label>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control"
                                                   {...bind("email")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <label className="col-md-12 custom-label">
                                            phone
                                        </label>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control"
                                                   {...bind("phoneNumber")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <label className="col-md-12 custom-label">
                                            password
                                        </label>
                                        <div className="col-md-12">
                                            <input type="password" className="form-control"
                                                   {...bind("password")}
                                            />
                                        </div>
                                    </div>
                                </div>
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
                                    <div className="social-box facebook"></div>
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
        requestTmp: state.requestTmp
    }
}

export default connect(mapStateToProps)(SignUp)
