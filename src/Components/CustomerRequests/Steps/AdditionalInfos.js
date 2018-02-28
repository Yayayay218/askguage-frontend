import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'
import moment from 'moment'

class AdditionalInfos extends Component {
    render() {
        const {request} = this.props

        return (
            <div>
                <Intake
                    question="Ownership Type"
                    answer={request.ownership == 1 ? 'single' : 'joint'}
                />

                <Intake
                    question="Birth Day"
                    answer={moment(request.user.profiles.dob).format('LL')}
                />

                <Intake
                    question="Canadian Citizen"
                    answer={request.user.profiles.citizenship == 1 ? 'yes' : 'no'}
                />
            </div>
        )
    }
}

export default AdditionalInfos