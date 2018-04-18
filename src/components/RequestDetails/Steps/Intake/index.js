import React, {Component} from 'react'
import Navigate from './Navigates'
import Profile from './Steps/Profile'
import Preference from './Steps/Preference'
import Info from './Steps/Info'
import Finance from './Steps/Finance'

class Intake extends Component {

    render() {
        // console.log(this)
        const {request, isFetched} = this.props
        const steps = [
            {
                render: () => (
                    <Profile
                        user={this.props.user}
                    />
                )
            },
            {
                render: () => (
                    <Preference
                        request={request}
                    />
                )
            },
            {
                render: () => (
                    <Info
                        user={this.props.user}
                        request={request}
                    />
                )
            },
            {
                render: () => (
                    <Finance
                        request={request}
                    />
                )
            }
        ]

        return (
            <div className="">
                <Navigate
                    initStepIndex={0}
                    steps={steps}
                    request={request}
                />
            </div>
        )
    }
}

export default Intake