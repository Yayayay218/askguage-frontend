import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import Layout from '../App'

const Error = ({message, field}) => {
    if (message && message.message)
        return (
            <div className="alert alert-danger">
                Incorrect email or password
            </div>

        )
    else return null
}

class SignIn extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.doLogin = this.doLogin.bind(this)
        // this.handleUserInput = this.handleUserInput.bind(this)
    }

    componentDidMount() {

    }

    componentWillReceiveProps(newProps) {
        const {history} = this.props
        if (newProps.isLogged && newProps.user.role === 0) {
            history.push('/my-requests')
        }
        if (!this.props.error && newProps.error)
            this.setState({
                error: newProps.error,
            })
    }

    doLogin() {
        const {state} = this
        this.props.dispatch(Actions.login(state));
    }

    render() {
        const {history, error, isLogin, location} = this.props
        const bind = (field) => ({
            value: this.state[field],
            onChange: (e) => this.setState({[field]: e.target.value})
        })
        console.log(this)

        return (
            <Layout isLanding={false}>
                <div className="container create-request-form">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="flip-panel">
                                <div className="request-intro">
                                    <h3>Sign in</h3>
                                    <p>Don’t have an account? <a style={{cursor: 'pointer'}} onClick={() => {
                                        history.push('/signup/customer')
                                    }}>Sign Up</a></p>
                                    {
                                        location.state ?
                                            <div className="alert alert-success" role="alert">
                                                Please check your email and click on the verification link before
                                                logging in
                                            </div>
                                            : <div></div>
                                    }

                                </div>
                            </div>
                            <div className="form-group row first-row">
                                <label className="col-md-12 custom-label">Email</label>
                                <div className="col-md-12">
                                    <input type="text" className="form-control"
                                           {...bind("email")}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-12 custom-label">Password</label>
                                <div className="col-md-12">
                                    <input type="password" className="form-control"
                                           {...bind("password")}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <Error message={this.state.error}/>
                                </div>
                            </div>
                            {
                                isLogin ?
                                    <button className="btn btn-next sign-up m-progress"
                                            disabled={true}
                                    >sign in
                                    </button>
                                    :
                                    <button className="btn btn-next sign-up"
                                            onClick={this.doLogin}
                                    >sign in
                                    </button>
                            }

                            <div className="form-group row">
                                <div className="col-md-12">
                                    <div className="line">
                                        <span className="text">Or Sign in with</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6 col-6">
                                    <div className="social-box facebook"></div>
                                </div>
                                <div className="col-md-6 col-6">
                                    <div className="social-box linkedin"></div>
                                </div>
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
        isLogged: state.auth.isLogged,
        isLogin: state.auth.isLogin,
        role: state.auth.role,
        user: state.auth.data
    }
}

export default connect(mapStateToProps)(SignIn)

