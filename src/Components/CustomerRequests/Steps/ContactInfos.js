import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'

class ContactInfos extends Component {
    render() {
        const {user} = this.props
        const {isCallback} = this.props.history.location.state
        return (
            <div>
               <Intake
                   question="First Name"
                   answer={user.firstName}
               />

                <Intake
                    question="Last Name"
                    answer={isCallback ? user.lastName : 'hidden'}
                />

                <Intake
                    question="Email"
                    answer={isCallback ? user.email : 'hidden'}
                />

                <Intake
                    question="Phone Number"
                    answer={isCallback ? user.phoneNumber : 'hidden'}
                />
            </div>
        )
    }
}

export default ContactInfos