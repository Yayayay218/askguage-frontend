import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {connect} from 'react-redux';

import Home from './Home'
import SignUp from './Auth/SignUp'
import Login from './Auth/SignIn'
import Profiles from '../components/Profiles'
import MyRequest from '../components/MyRequests'
import RequestDetails from '../components/RequestDetails'
import SignUpCustomer from './Auth/SignUpCustomer'
import ChangePassword from '../components/Profiles/ChangePassword'
import CreateRequest from '../components/RequestForm'
import CustomerRequests from '../components/CustomerRequests'
import ResetPassword from '../components/Profiles/ResetPassword'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import configureStore from '../store/Store';

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
                        <Route path="/change-password" component={ChangePassword} />
                        <Route path="/reset-password" component={ResetPassword}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Root