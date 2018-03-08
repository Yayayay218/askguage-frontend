import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'
import {KindOfHome, BooleanType} from "../../RequestDetails/Intake/TransferType"

class Preferences extends Component {
    render() {
        const {request} = this.props
        const address = request.homeAddress.address.split(',')

        return (
            <div>
                <Intake
                    question="Property Type"
                    answer={KindOfHome(request.kindOfHome)}
                />

                <Intake
                    question="Number of Bedroom"
                    answer={request.numberOfBedRoom}
                />

                <Intake
                    question="Square Feet"
                    answer={request.squareFT}
                />

                <Intake
                    question="City"
                    answer={address[0]}
                />
            </div>
        )
    }
}

export default Preferences