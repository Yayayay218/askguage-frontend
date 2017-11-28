import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import {Link} from 'react-router-dom'
import Profile from './Profile'
import Preference from './Preference'
import Info from './Info'

const Error = ({message}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    )
}

class CustomerRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            preference: {},
            info: {
                ...this.props.user,
                ...this.props.user.profiles
            },
            finance: {},
            formErrors: false,
            screen: 'profile',
            screenStatus: {
                profile: 'active',
                preference: 'disabled',
                info: 'disabled',
                finance: 'disabled'
            }
        }
        this.handleProfileInput = this.handleProfileInput.bind(this)
        this.handleReferenceInput = this.handleReferenceInput.bind(this)
        this.handleInfoInput = this.handleInfoInput.bind(this)
        this.goPreference = this.goPreference.bind(this)
        this.goInfo = this.goInfo.bind(this)
        this.submitCustomerRequest = this.submitCustomerRequest.bind(this)
    }

    componentDidMount() {
    }

    handleProfileInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {
                profile:
                    {
                        ...this.state.profile,
                        [name]: value
                    }
            })
    }

    handleReferenceInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {
                preference:
                    {
                        ...this.state.preference,
                        [name]: value,
                        'preferredLanguages[0]': 0
                    }
            })
    }

    handleInfoInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {
                info:
                    {
                        ...this.state.info,
                        [name]: value
                    }
            })
    }

    goPreference() {
        let profile = this.state.profile
        if (!profile.homeBuyer || !profile.lookingTo || !profile.ownership)
            this.setState({
                formErrors: true
            })
        else
            this.setState({
                screen: 'preference',
                screenStatus: {
                    ...this.state.screenStatus,
                    profile: 'success',
                    preference: 'active'
                }
            })
    }

    goInfo() {
        this.setState(
            {
                screen: 'info',
                screenStatus: {
                    ...this.state.screenStatus,
                    preference: 'success',
                    info: 'active'
                }
            }
        )
    }

    submitCustomerRequest() {
        const {state} = this
        this.props.dispatch(Actions.postRequest(state));
    }

    renderx() {
        if (this.state.screen === 'profile')
            return (
                <Profile source={this.state} onChangeValue={this.handleProfileInput}
                         next={this.goPreference}/>
            )
        if (this.state.screen === 'preference')
            return (
                <Preference source={this.state.profile} onChangeValue={this.handleReferenceInput}
                            next={this.goInfo}/>
            )

        if (this.state.screen === 'info')
            return (
                <Info source={this.state} onChangeValue={this.handleInfoInput} next={this.submitCustomerRequest}/>
            )
    }


    render() {
        console.log(this)
        return (
            <div className="my-request">
                <div className="container-fluid">
                    <div className="top-wrapper">
                        <h1>My Requests</h1>
                    </div>
                </div>
                <div className="request-tab">
                    <div className="container">
                        <div
                            className={
                                `item ${this.state.screenStatus.profile}`
                            }
                        >
                            <label htmlFor="">profile</label>
                        </div>
                        <div className={
                            `item ${this.state.screenStatus.preference}`
                        }>
                            <label htmlFor="">preference</label>
                        </div>
                        <div className={
                            `item ${this.state.screenStatus.info}`
                        }>
                            <label htmlFor="">info</label>
                        </div>
                        <div className={
                            `item ${this.state.screenStatus.finance}`
                        }>
                            <label htmlFor="">finance</label>

                        </div>
                    </div>
                </div>
                {
                    this.renderx()
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.data.data,
    }
}

export default connect(mapStateToProps)(CustomerRequest)