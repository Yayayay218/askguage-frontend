import React from 'react'
import {PREFERENCE} from '../../Configs/AppSetting'
import PropTypes from 'prop-types';

const PreferenceItem = ({source, question, type, style}) => {
    const {PROPERTY_TYPE, WHEN_BUY_NEW_HOME, WHEN_REFINANCE, INTENDED_PROPERTY, PREFERRED_MORTGAGE_TYPE, PREFERRED_MORTGAGE_TERM} = PREFERENCE;
    let answer = source;
    if (type == 0)
        switch (source) {
            case PROPERTY_TYPE.SINGLE_DETACHED:
                answer = 'single detached'
                break

            case PROPERTY_TYPE.SEMI_DETACHED:
                answer = 'semi detached'
                break
            case PROPERTY_TYPE.TOWNHOUSE:
                answer = 'townhouse'
                break;
            case PROPERTY_TYPE.CONDO:
                answer = 'condo'
                break;

        }
    if (type == 1)
        switch (source) {
            case WHEN_BUY_NEW_HOME.THREE_MONTHS:
                answer = '3 Months'
                break

            case WHEN_BUY_NEW_HOME.SIX_MONTHS:
                answer = '6 Months'
                break
            case WHEN_BUY_NEW_HOME.NEXT_YEAR:
                answer = 'Next Year'
                break

        }
    if (type == 2)
        switch (source) {
            case WHEN_REFINANCE.WEEKS:
                answer = 'Weeks'
                break

            case WHEN_REFINANCE.A_MONTH:
                answer = 'A Month'
                break
            case WHEN_REFINANCE.THREE_MONTHS:
                answer = '3 Months'
                break
        }
    if (type == 3)
        switch (source) {
            case INTENDED_PROPERTY.PRIMARY:
                answer = 'primary'
                break

            case INTENDED_PROPERTY.RENTAL:
                answer = 'rental'
                break
            case INTENDED_PROPERTY.BOTH:
                answer = 'Both (Primary & Rental)'
                break
        }
    if (type == 4)
        switch (source) {
            case PREFERRED_MORTGAGE_TYPE.VARIABLE:
                answer = 'variable'
                break

            case INTENDED_PROPERTY.FIXED:
                answer = 'fixed'
                break
        }
    if (type == 5)
        switch (source) {
            case PREFERRED_MORTGAGE_TERM.A_YEAR:
                answer = 'a year'
                break

            case PREFERRED_MORTGAGE_TERM.THREE_YEARS:
                answer = '3 Years'
                break
            case PREFERRED_MORTGAGE_TERM.FIVE_YEARS:
                answer = '5 Years'
                break
        }
    return (
        <div className="row" style={style}>
            <div className="col-sm-6 col-9 question">
                <label htmlFor="">{question} </label>
            </div>
            <div className="col-sm-6 col-3 answer">
                <label htmlFor="">{answer}</label>
            </div>
            <div className="profile-line"></div>

        </div>
    )
}

export default PreferenceItem