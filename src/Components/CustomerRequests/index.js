import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../../Actions/Creators'
import Layout from '../../Containers/App'
import Navigate from './Navigate'
import ContactInfos from './Steps/ContactInfos'
import Preferences from './Steps/Preferences'
import OccupationInfos from './Steps/OccupationInfos'
import AdditionalInfos from './Steps/AdditionalInfos'
import StatedInfo from './Steps/StatedInfo'
import CalculateValue from './Steps/CalculateValue'
import YourBid from './Steps/YourBid'

class CustomerRequest extends Component {
    constructor(props) {
        super(props)
        if(!props.token)
            props.history.push('/')
    }

    componentWillReceiveProps(newProps) {
        const {history} = this.props

        if (this.props.token !== newProps.token)
            history.push('/')
    }

    componentDidMount() {
        const {params} = this.props.match
        this.props.dispatch(Actions.getRequestById(params.id))
    }

    render() {
        const {user, request, history} = this.props
        const steps = [
            {
                render: () => (
                    <ContactInfos
                        user={user}
                    />
                )
            },
            {
                render: () => (
                    <Preferences
                        user={user}
                        request={request}
                    />
                )
            },
            {
                render: () => (
                    <OccupationInfos
                        user={user}
                        request={request}
                    />
                )
            },
            {
                render: () => (
                    <AdditionalInfos
                        user={user}
                        request={request}
                    />
                )
            },
            {
                render: () => (
                    <StatedInfo
                        user={user}
                        request={request}
                    />
                )
            },
            {
                render: () => (
                    <CalculateValue
                        user={user}
                        request={request}
                    />
                )
            },
            {
                render: () => (
                    <YourBid
                        user={user}
                        request={request}
                        history={this.props.history}
                    />
                )
            }
        ]
        return (
            <Layout isLanding={false}>
                <div className="request-details">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-end top-wrapper">
                            <label className="label-header">Customer Request</label>
                            <div className="divider"></div>
                            <label className="mr-auto label-detail">
                                Buy a new house
                            </label>
                            <label className="status" style={{marginRight: '0'}}>Status: <strong>Open to receive
                                bids</strong></label>
                        </div>
                    </div>
                    <div className="menu-line"></div>

                    <div className="container">
                        <Navigate
                            initStepIndex={0}
                            steps={steps}
                            user={user}
                            history={history}
                        />
                    </div>
                </div>
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        request: state.requests.current,
        user: state.auth.data,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(CustomerRequest)