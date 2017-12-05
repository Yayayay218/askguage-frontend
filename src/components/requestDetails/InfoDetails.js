import React from 'react'
import InfoItem from './InfoItem'
import PropTypes from 'prop-types'
import moment from 'moment'
import {FormattedNumber} from 'react-intl';

const InfoDetails = ({initData, user}) => {
    const {profile, info} = initData
    return (
        <div>
            <InfoItem source={user.firstName + ' ' + user.lastName}
                            question="Name"
            />
            <InfoItem source={info.address}
                      question="Address"
            />
            <InfoItem source={info.email}
                      question="Email"
            />
            <InfoItem source={info.phoneNumber}
                      question="Phone Number"
            />
        </div>
    )
}

InfoDetails.propTypes = {
    initData: PropTypes.object.isRequired
}

export default InfoDetails