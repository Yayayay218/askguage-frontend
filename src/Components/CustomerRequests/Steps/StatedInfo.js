import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'

class StatedInfo extends Component {
    render() {
        const {request} = this.props

        return (
            <div>
                <Intake
                    question="Household Income"
                    answer={request.houseHold}
                />

                <Intake
                    question="Monthly Liability"
                    answer={request.monthlyLiability}
                />

                <Intake
                    question="Down Payment Amount"
                    answer={request.downPayment}
                />

                <Intake
                    question="Net Assets"
                    answer={request.netAsset}
                />
            </div>
        )
    }
}

export default StatedInfo