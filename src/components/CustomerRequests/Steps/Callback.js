import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'

class Callback extends Component {
    render() {
        const {request} = this.props
        return (
            <div>
                <Intake
                    question="Available Date"
                    answer={request.bidCallback.availableDate == 0 ? 'Weekday' : 'Weekend'}
                />

                <Intake
                    question="Available Time"
                    answer={request.bidCallback.availableTime == 0 ? 'Morning' : request.bidCallback.availableTime == 1 ? 'Afternoon' : 'Evening'}
                />
            </div>
        )
    }
}

export default Callback