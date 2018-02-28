import React from 'react'
import IntakeDetails from '../../../Intake'
import moment from "moment/moment";

const Info = ({user, request}) => {
    return(
        <div>
            <IntakeDetails
                question="Ownership Type"
                answer={request.ownership == 1 ? 'single' : 'joint'}
            />

            <IntakeDetails
                question="Birth Day"
                answer={moment(user.profiles.dob).format('LL')}
            />

            <IntakeDetails
                question="Canadian Citizen"
                answer={user.profiles.citizenship == 1 ? 'yes' : 'no'}
            />
        </div>
    )
}

export default Info