import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'

class ContactInfos extends Component {
    render() {
        const {user} = this.props
        return (
            <div>
               <Intake
                   question="First Name"
                   answer={user.firstName}
               />

                <Intake
                    question="Last Name"
                    answer="hidden"
                />

                <Intake
                    question="Email"
                    answer="hidden"
                />

                <Intake
                    question="Phone Number"
                    answer="hidden"
                />
            </div>
        )
    }
}

export default ContactInfos