import React, {Component} from 'react'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import Navigates from './Navigates'
import Intake from './Steps/Intake'
import ExpertsContainer from './Steps/Experts'
import ReviewContainer from './Steps/ReviewClose'

class RequestDetails extends Component {
    constructor(props) {
        super(props)
        if (!props.token)
            props.history.push('/')
        const {params} = props.match
        this.props.dispatch(Actions.getRequestById(params.id))

        this.state = {
            myBid: {
                callback: {
                    availableDate: '',
                    availableTime: ''
                },
                status: 0
            },
            initStepIndex: 0,
            isBid: false
        }
    }

    componentWillReceiveProps(newProps) {
        const {history, user} = this.props
        if (!newProps.token)
            history.push('/')
        if(newProps.detailFetched && user.id !== newProps.request.user.id)
            history.push('/')
    }

    componentDidMount() {
        const {params} = this.props.match
        let query = `filter[where][requestId]=${params.id}&filter[include]=provider&filter[include]=request`
        this.props.dispatch(Actions.getBidRequest(query))
    }

    componentWillUpdate(nextProps, nextState) {
        const {params} = this.props.match
        let query = `filter[where][requestId]=${params.id}&filter[include]=provider&filter[include]=request`
        if (nextState.isBid !== this.state.isBid) {
            this.props.dispatch(Actions.getBidRequest(query))
        }
    }

    render() {
        const {request, detailFetched, bids} = this.props
        const steps = [
            {
                render: () => (
                    <Intake
                        request={request}
                        isFetched={detailFetched}
                        user={this.props.user}
                    />
                )
            },
            {
                render: () => (
                    <ExpertsContainer
                        bids={bids}
                        bidFetched={this.props.bidFetched}
                        isBid={(isBid) => this.setState({isBid})}
                        request={request}
                    />
                )
            },
            {
                render: () => (
                    <ReviewContainer
                        bids={bids}
                        bidFetched={this.props.bidFetched}
                        isBid={(isBid) => this.setState({isBid})}
                        user={this.props.user}
                    />
                )
            },
        ]
        return (
            <Navigates
                steps={steps}
                initStepIndex={this.state.initStepIndex}
                request={request}
                isFetched={detailFetched}
            >
            </Navigates>
        )
    }
}

function mapStateToProps(state) {
    return {
        request: state.requests.current,
        detailFetched: state.requests.detailFetched,
        token: state.auth.token,
        bids: state.bids.data,
        bidFetched: state.bids.isFetched,
        user: state.auth.data,
    }
}

export default connect(mapStateToProps)(RequestDetails)