import React, {Component} from 'react'
import {connect} from 'react-redux';
import Actions from '../../Actions/Creators'
import Navigates from './Navigates'
import Intake from './Steps/Intake'
import ExpertsContainer from './Steps/Experts'

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
        const {history} = this.props

        if (!newProps.token)
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
        if (nextState.isBid && !this.state.isBid) {
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
                    />
                )
            },
            {
                render: () => (
                    <div>b</div>
                )
            },
            {
                render: () => (
                    <ExpertsContainer
                        bids={bids}
                        bidFetched={this.props.bidFetched}
                        isBid={(isBid) => this.setState({isBid})}
                    />
                )
            },
            {
                render: () => (
                    <div>d</div>
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
        bidFetched: state.bids.isFetched
    }
}

export default connect(mapStateToProps)(RequestDetails)