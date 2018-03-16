import React from 'react'
import IntakeDetails from '../../../Intake'
import {KindOfHome} from "../../../Intake/TransferType";

const Profile = ({request}) => {
    const address = request.homeAddress.address.split(',')
    return (
        <div>
            {
                !request.isEstate &&
                <IntakeDetails
                    question="Renew Or Refinance"
                    answer={request.mortgageType === 0 ? 'Renew' : 'Refinance'}
                />
            }

            <IntakeDetails
                question={request.isEstate ? "Property Type" : "Kind Of Home"}
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
                answer={address[0]}
            />
        </div>
    )
}

export default Profile