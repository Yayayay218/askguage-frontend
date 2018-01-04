import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Home from '../containers/Home'
import SignUp from './Auth/SignUp'
import Login from './Auth/Login'
import Profiles from './Profiles/index'
import CustomerRequest from '../containers/CustomerRequest'
import MyRequest from '../containers/MyRequests'
import RequestDetails from '../containers/MyRequests/RequestDetails'
import CreateRequest from '../components/RequestForm'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import configureStore from '../store/Store';

class Root extends Component {
    constructor() {
        super();
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
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/profile" component={Profiles}/>
                        <Route path="/create-request" component={CreateRequest}/>
                        <Route path="/my-requests" component={MyRequest}/>
                        <Route path="/customer-requests" component={MyRequest}/>
                        <Route path="/view/:id" component={RequestDetails}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}


Root.propTypes = {}

export default Root