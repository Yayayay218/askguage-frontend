import React, {Component} from 'react'
import {connect} from 'react-redux';
import Actions from '../../Actions/Creators'
import Navigates from './Navigates'
import Intake from './Steps/Intake'

class RequestDetails extends Component {
    constructor(props) {
        super(props)
        if(!props.token)
            props.history.push('/')
        const {params} = props.match
        this.props.dispatch(Actions.getRequestById(params.id))
    }

    render() {
        const {request, detailFetched} = this.props
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
                    <div>c</div>
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
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(RequestDetails)