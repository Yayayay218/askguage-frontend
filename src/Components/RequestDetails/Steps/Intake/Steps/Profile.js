import React from 'react'
import IntakeDetails from '../../../Intake'

const Profile = ({user}) => {
    return(
        <div>
            <IntakeDetails
                question="First Name"
                answer={user.firstName}
            />

            <IntakeDetails
                question="Last Name"
                answer={user.lastName}
            />

            <IntakeDetails
                question="Email"
                answer={user.email}
            />

            <IntakeDetails
                question="Phone Number"
                answer={user.phoneNumber}
            />
        </div>
    )
}

export default Profile