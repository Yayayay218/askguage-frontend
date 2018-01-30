import React, {Component} from 'react'
import {connect} from 'react-redux';
import Actions from '../../Actions/Creators'
import Navigates from './Navigates'
import Intake from './Steps/Intake'
import ExpertsContainer from './Steps/Experts'

class RequestDetails extends Component {
    constructor(props) {
        super(props)
        if(!props.token)
            props.history.push('/')
        const {params} = props.match
        this.props.dispatch(Actions.getRequestById(params.id))
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

    render() {
        const {request, detailFetched, bids} = this.props
        console.log(this)
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
                initStepIndex={0}
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
        bids: state.bids.data
    }
}

export default connect(mapStateToProps)(RequestDetails)