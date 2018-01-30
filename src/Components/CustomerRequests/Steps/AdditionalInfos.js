import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'
import {KindOfHome, BooleanType} from "../../RequestDetails/Intake/TransferType"
import moment from 'moment'

class AdditionalInfos extends Component {
    render() {
        const {request} = this.props

        return (
            <div>
                <Intake
                    question="DOB"
                    answer={moment(request.user.profiles.dob).format('LL')}
                />

                <Intake
                    question="Civil Status"
                    answer={request.user.profiles.civilStatus}
                />

                <Intake
                    question="Canadian Citizen"
                    answer={request.user.profiles.citizenship}
                />
            </div>
        )
    }
}

export default AdditionalInfos