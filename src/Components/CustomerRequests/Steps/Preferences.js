import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'
import {KindOfHome, BooleanType} from "../../RequestDetails/Intake/TransferType"

class Preferences extends Component {
    render() {
        const {request} = this.props

        return (
            <div>
                <Intake
                    question="What Kind of home are you looking for?"
                    answer={KindOfHome(request.kindOfHome)}
                />

                <Intake
                    question="Number of Bedroom (new home)"
                    answer={request.numberOfBedRoom}
                />

                <Intake
                    question="Square ft (new home)"
                    answer={request.squareFT}
                />

                <Intake
                    question="Where are you looking for a home?"
                    answer={request.homeAddress.address}
                />

                <Intake
                    question="Whats your budget? (min)"
                    answer={request.budget.min}
                />
                <Intake
                    question="Whats your budget? (max)"
                    answer={request.budget.max}
                />
                <Intake
                    question="Do you know if you are qualified for the amount above?"
                    answer={BooleanType(request.areQualified)}
                />
                <Intake
                    question="Is this a single or joint ownership?"
                    answer={BooleanType(request.ownership)}
                />

            </div>
        )
    }
}

export default Preferences