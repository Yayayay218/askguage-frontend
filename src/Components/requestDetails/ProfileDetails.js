import React from 'react'
import ProfileItem from './ProfileItem'
import PropTypes from 'prop-types'


const ProfileDetails = ({initData}) => {
    const {profile} = initData
    return (
        <div>
            <ProfileItem source={profile.homeBuyer}
                         question="Are you a first time home buyer?"
                         type="0"
            />
            <ProfileItem source={profile.currentlyRenting}
                         question="Are you currently renting?"
                         type="0"
                         style={
                             profile.homeBuyer == 1 ?
                                 {display: 'flex'} : {display: 'none'}
                         }
            />
            <ProfileItem source={profile.lookingTo}
                         question="Are you looking to?"
                         type="2"
            />
            <ProfileItem source={profile.realtor}
                         question="Are you currently working with a Realtor?"
                         type="0"
                         style={
                             profile.homeBuyer == 1
                             || profile.lookingTo == 0
                                 ?
                                 {display: 'flex'} : {display: 'none'}
                         }
            />
            <ProfileItem source={profile.newHome}
                         question="Have you identified your new home?"
                         type="0"
                         style={profile.realtor == 1 ?
                             {display: 'flex'} : {display: 'none'}
                         }
            />
            <ProfileItem source={profile.purchaseAgreement}
                         question="Do you have a purchase agreement for this property?"
                         type="0"
                         style={
                             profile.realtor == 1
                             && profile.newHome == 1
                                 ?
                                 {display: 'flex'} : {display: 'none'}
                         }
            />
            <ProfileItem source={profile.ownership}
                         question="Is this a single or joint ownership?"
                         type="1"
            />
        </div>
    )
}

ProfileDetails.propTypes = {
    initData: PropTypes.object.isRequired
}

export default ProfileDetails