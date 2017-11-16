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
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        }
        this.onLogin= this.onLogin.bind(this)
    }

    componentDidMount() {

    }
    onLogin () {
        const {email, password} = this;
        let data = {
            "email": email.value,
            "password": password.value,
        };
        this.props.dispatch(Actions.login(data));
    }
    render() {
        return(
            <div className="container">
                <div>

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
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"
                                   ref={ref => {
                                       this.password = ref;
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
                            <button className="btn btn-primary btn-lg btn-block" onClick={this.onLogin}>
                                Login
                            </button>
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