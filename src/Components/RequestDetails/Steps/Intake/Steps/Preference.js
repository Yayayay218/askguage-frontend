import React from 'react'
import IntakeDetails from '../../../Intake'
import {KindOfHome} from "../../../Intake/TransferType";

const Profile = ({request}) => {
    return(
        <div>
            <IntakeDetails
                question="Property Type"
                answer={KindOfHome(request.kindOfHome)}
            />

            <IntakeDetails
                question="Bedroom"
                answer={request.numberOfBedRoom}
            />

            <IntakeDetails
                question="Square Feet"
                answer={request.squareFT}
            />

            <IntakeDetails
                question="City"
                answer={request.homeAddress.address}
            />
        </div>
    )
}

export default Profile