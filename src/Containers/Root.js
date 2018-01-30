import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {connect} from 'react-redux';

import Home from './Home'
import SignUp from './Auth/SignUp'
import Login from './Auth/SignIn'
import Profiles from '../Components/Profiles'
import MyRequest from '../Components/MyRequests'
import RequestDetails from '../Components/RequestDetails'
import SignUpCustomer from './Auth/SignUpCustomer'
import CreateRequest from '../Components/RequestForm'
import CustomerRequests from '../Components/CustomerRequests'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import configureStore from '../Store/Store';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            active: false,
            store: configureStore(() => this.setState({isLoading: false})),
        };
    }

    render() {
        if (this.state.isLoading) return <div>Loading...</div>;
        return (
            <Provider store={this.state.store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/my-profiles" component={Profiles}/>
                        <Route path="/create-request" component={CreateRequest}/>
                        <Route exact path="/my-requests" component={MyRequest}/>
                        <Route exact path="/customer-requests" component={MyRequest}/>
                        <Route path="/customer-requests/:id" component={CustomerRequests}/>
                        <Route path="/my-requests/:id" component={RequestDetails}/>
                        <Route path="/signup/customer" component={SignUpCustomer}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}
function redirect(location) {
    return class RedirectRoute extends Component {
        constructor(props, context) {
            super(props, context);

            props.history.push(location);
        }
        render() {
            return null;
        }
    }
}

Root.propTypes = {}

function mapStateToProps(state) {
    return {
        app: state.app
    }

}
export default Root