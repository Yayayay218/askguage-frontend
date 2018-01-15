import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../Actions/Creators'
import {Link} from 'react-router-dom'
import Profile from './Profile'
import Preference from './Preference'
import Info from './Info'
import Finance from './Finance'
import moment from 'moment';

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
            preference: {
                renewalDate: moment(),
                requiredDate: moment(),
                preferredLanguages: 0
            },
            info: {
                ...this.props.user,
                ...this.props.user.profiles
            },
            finance: {},
            status: 1,
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
        this.handleFinanceInput = this.handleFinanceInput.bind(this)
        this.goPreference = this.goPreference.bind(this)
        this.goInfo = this.goInfo.bind(this)
        this.goFinance = this.goFinance.bind(this)
        this.submitCustomerRequest = this.submitCustomerRequest.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeRequiredDate = this.onChangeRequiredDate.bind(this)
        this.onChangeAddress = this.onChangeAddress.bind(this)
    }

    componentDidMount() {
        // this.props.dispatch(Actions.getUser());
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            requestId: newProps.request._id
        })
    }

    onChangeDate(date) {
        this.setState({
            preference: {
                ...this.state.preference,
                renewalDate: date
            }
        })
    }

    onChangeAddress(addr, field) {
        this.setState({
            preference: {
                ...this.state.preference,
                [field]: addr
            }
        })
    }

    onChangeRequiredDate(date) {
        this.setState({
            preference: {
                ...this.state.preference,
                requiredDate: date
            }
        })
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

    handleFinanceInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {
                finance:
                    {
                        ...this.state.finance,
                        [name]: value
                    }
            })
    }

    goPreference() {
        // const {state} = this
        // this.props.dispatch(Actions.postRequest(state));
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
        // const {state} = this
        // this.props.dispatch(Actions.putRequest(state));
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

    goFinance() {
        this.setState(
            {
                screen: 'finance',
                screenStatus: {
                    ...this.state.screenStatus,
                    info: 'success',
                    finance: 'active'
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
                <Preference source={this.state} onChangeValue={this.handleReferenceInput}
                            onChangeDate={this.onChangeDate}
                            onChangeRequiredDate={this.onChangeRequiredDate}
                            onChangeAddress={this.onChangeAddress}
                            next={this.goInfo}/>
            )

        if (this.state.screen === 'info')
            return (
                <Info source={this.state} onChangeValue={this.handleInfoInput} next={this.goFinance}
                      onChangeAddress={this.onChangeAddress}
                />
            )

        if (this.state.screen === 'finance')
            return (
                <Finance source={this.state} onChangeValue={this.handleFinanceInput} next={this.submitCustomerRequest}/>
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
                        <div className="d-flex flex-row">
                            <div
                                className={
                                    `item ${this.state.screenStatus.profile}`
                                }
                            >
                                <div className="item-content">
                                    {/*<div className="circle"></div>*/}
                                    <label htmlFor="">profile</label>
                                </div>
                            </div>
                            <div className={
                                `item ${this.state.screenStatus.preference}`
                            }>
                                <div className="item-content">
                                    <label htmlFor="">preference</label>
                                </div>
                            </div>
                            <div className={
                                `item ${this.state.screenStatus.info}`
                            }>
                                <div className="item-content">
                                    <label htmlFor="">info</label>
                                </div>
                            </div>
                            <div className={
                                `item ${this.state.screenStatus.finance}`
                            }>
                                <div className="item-content">
                                    <label htmlFor="">finance</label>
                                </div>
                            </div>
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
        request: state.requests.current
    }
}

export default connect(mapStateToProps)(CustomerRequest)