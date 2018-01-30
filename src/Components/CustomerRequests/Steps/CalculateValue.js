import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'

class CalculateValue extends Component {
    render() {
        const {request} = this.props

        return (
            <div>
                <Intake
                    question="TDSR Score"
                    answer={request.monthlyLiability / request.houseHold}
                />
            </div>
        )
    }
}

export default CalculateValue