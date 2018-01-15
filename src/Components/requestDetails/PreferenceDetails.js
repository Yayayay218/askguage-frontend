import React from 'react'
import PreferenceItem from './PreferenceItem'
import PropTypes from 'prop-types'
import moment from 'moment'
import {FormattedNumber} from 'react-intl';

const PreferenceDetails = ({initData}) => {
    const {profile, preference} = initData
    return (
        <div>
            <PreferenceItem source={preference.whereBuy}
                            question="Where are you looking to buy?"
                            style={
                                    profile.homeBuyer == 1 || profile.lookingTo == 0
                                ? {display: 'flex'} : {display: 'none'}
                            }
            />
            <PreferenceItem source={preference.propertyType}
                            question="Property Type"
                            type="0"
            />
            <PreferenceItem source={preference.squareFeet}
                            question="Square Feet"
            />
            <PreferenceItem source={preference.whenBuyNewHome}
                            question="When are you plan to buy a new home?"
                            type="1"
                            style={
                                profile.homeBuyer == 1 || profile.lookingTo == 0
                                    ? {display: 'flex'} : {display: 'none'}
                            }
            />
            <PreferenceItem source={moment(preference.renewalDate).format('YYYY-MM-DD')}
                            question="What is your Mortgage Renewal Date?"
                            style={
                                profile.lookingTo == 1
                                    ? {display: 'flex'} : {display: 'none'}
                            }
            />
            <PreferenceItem source={preference.whenRefinance}
                            question="When are you looking to refinance your mortgage?"
                            type="2"
                            style={
                                profile.lookingTo == 2
                                    ? {display: 'flex'} : {display: 'none'}
                            }
            />
            <PreferenceItem source={preference.intendedProperty}
                            question="What is the Intended use of the property?"
                            type="3"
            />
            <PreferenceItem source={preference.amountRequired}
                            question="Mortgage Amount Required?"
            />
            <PreferenceItem source={preference.valueHome}
                            question="Value of Your Home"
                            style={
                                profile.lookingTo != 0
                                    ? {display: 'flex'} : {display: 'none'}
                            }
            />
            <PreferenceItem source={preference.preferredMortgageType}
                            question="Preferred Mortgage Type"
                            type="4"
            />
            <PreferenceItem source={preference.preferredMortgageTerm}
                            question="Preferred Mortgage Term"
            />
            <PreferenceItem source={preference.preferredAmortization}
                            question="Preferred Amortization"
            />
            <PreferenceItem source={moment(preference.requiredDate).format('YYYY-MM-DD')}
                            question="Funds Required Date"
            />
        </div>
    )
}

PreferenceDetails.propTypes = {
    initData: PropTypes.object.isRequired
}

export default PreferenceDetails