import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../../Actions/Creators'
import Layout from '../../Containers/App'
import Navigate from './Navigate'
import ContactInfos from './Steps/ContactInfos'
import Preferences from './Steps/Preferences'
import AdditionalInfos from './Steps/AdditionalInfos'
import StatedInfo from './Steps/StatedInfo'
import YourBid from './Steps/YourBid'
import Callback from './Steps/Callback'

class CustomerRequest extends Component {
    constructor(props) {
        super(props)
        if (!props.token)
            props.history.push('/')
        const {_bid} = props.history.location.state
        this.state = {
            bid: {
                disabled: _bid.bidOptions ? true : false,
                mortgageAmount: _bid.bidAmount || '',
                options: _bid.bidOptions ? _bid.bidOptions : props.user.profiles.kindOfService == 1 ? [{
                    mortgageType: 0,
                    mortgageTerm: '',
                    interestRate: '',
                    amortization: ''
                }] : [{
                    neighbourhood: '',
                    area: '',
                    propertyType: '',
                    squareFT: '',
                    price: ''
                }],
                commissionFee: _bid.bidCommission || 2.5,
                neighbourhood: _bid.bidNeighbourhood || '',
                comment: ''
            },
            error: false
        }
    }

    componentWillReceiveProps(newProps) {
        const {history} = this.props

        if (!newProps.token)
            history.push('/')
    }

    componentDidMount() {
        const {params} = this.props.match
        this.props.dispatch(Actions.getRequestById(params.id))
    }

    render() {
        const {user, request, history, requestFetched} = this.props
        const steps = [
            {
                render: () => (
                    <ContactInfos
                        user={request.user}
                        history={this.props.history}
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
                    <YourBid
                        user={user}
                        request={request}
                        history={this.props.history}
                        _bid={this.state.bid}
                        onChange={(bid) => this.setState({bid})}
                    />
                )
            },
            {
                render: () => (
                    <Callback
                        request={history.location.state._bid}
                    />
                )
            }
        ]
        if (!requestFetched) return <div></div>
        return (
            <Layout isLanding={false}>
                <div className="request-details">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-end top-wrapper">
                            <label className="label-header">Customer Request</label>
                            <div className="divider"></div>
                            <label className="mr-auto label-detail">
                                {
                                    request.isEstate ? 'Buy a new house' : request.mortgageType === 0 ? 'Renew Mortgage' : 'Refinance Mortgage'
                                }
                            </label>
                            <label className="status" style={{marginRight: '0'}}>Status: <strong>Open to receive
                                quotes</strong></label>
                        </div>
                    </div>
                    <div className="menu-line"></div>

                    <div className="container">
                        {this.props.token && requestFetched && <Navigate
                            initStepIndex={0}
                            steps={steps}
                            user={user}
                            history={history}
                            request={request}
                        />}
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
        token: state.auth.token,
        requestFetched: state.requests.detailFetched
    }
}

export default connect(mapStateToProps)(CustomerRequest)