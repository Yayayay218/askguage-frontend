import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'

const Error = ({message}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    )
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            role: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
        this.onChangeRole = this.onChangeRole.bind(this)
    }

    componentDidMount() {

    }
    onChangeRole (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
    }
    onSignUp() {
        const {email, password, confirmPassword, firstName, lastName, phoneNumber} = this;
        let data = {
            "email": email.value,
            "firstName": firstName.value,
            "lastName": lastName.value,
            "phoneNumber": phoneNumber.value,
            "password": password.value,
            "confirmPassword": confirmPassword.value,
            "role": this.state.role
        };
        this.props.dispatch(Actions.signUp(data));
    }

    render() {
        return (
            <div className="container">
                <div>
                    <div className="form-group row justify-content-md-center">
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="role"
                                           id="inlineRadio1" value="0" onChange={this.onChangeRole}/> Sign up as a customer
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="role"
                                           id="inlineRadio2" value="1" onChange={this.onChangeRole}/> Sign up as a provider
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group has-danger row justify-content-md-center">
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-danger" placeholder="First Name"
                                   ref={ref => {
                                       this.firstName = ref;
                                   }}/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-md-center">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Last Name"
                                   ref={ref => {
                                       this.lastName = ref;
                                   }}/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-md-center">
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email"
                                   ref={ref => {
                                       this.email = ref;
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row justify-content-md-center">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Phone Number"
                                   ref={ref => {
                                       this.phoneNumber = ref;
                                   }}/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-md-center">
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"
                                   ref={ref => {
                                       this.password = ref;
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row justify-content-md-center">
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword4"
                                   placeholder="Confirm Password" ref={ref => {
                                this.confirmPassword = ref;
                            }}/>
                        </div>
                    </div>
                    <div>
                        {this.props.error !== null
                            ? <Error message={this.props.error}/>
                            : <div></div>}
                    </div>


                    <div className="form-group row justify-content-md-center">
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-lg btn-block" onClick={this.onSignUp}>
                                Sign up
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {error: state.auth.error}
}

export default connect(mapStateToProps)(SignUp)

