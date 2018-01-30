import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'
import {KindOfHome, BooleanType} from "../../RequestDetails/Intake/TransferType"

class OccupationInfos extends Component {
    render() {
        const {request} = this.props
        console.log(request)

        return (
            <div>
                <Intake
                    question="Occupation Type "
                    answer={request.occupationType}
                />

                <Intake
                    question="Job Title "
                    answer={request.user.profiles.jobTitle}
                />

                <Intake
                    question="Length of Employment "
                    answer={request.user.profiles.lengthOfEmployment}
                />

                <Intake
                    question="Employer"
                    answer={request.user.profiles.employer}
                />
                <Intake
                    question="Industry "
                    answer={request.user.profiles.industry}
                />
            </div>
        )
    }
}

export default OccupationInfos