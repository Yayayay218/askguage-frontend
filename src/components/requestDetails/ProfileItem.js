import React from 'react'
import {PROFILE} from '../../config/AppSetting'
import PropTypes from 'prop-types';

const ProfileItem = ({source, question, type, style}) => {
    let answer;
    if (type == 0)
        switch (source) {
            case PROFILE.YES:
                answer = 'yes'
                break

            case PROFILE.NO:
                answer = 'no'
                break

        }
    if (type == 1)
        switch (source) {
            case PROFILE.SINGLE:
                answer = 'single'
                break

            case PROFILE.JOINT:
                answer = 'joint'
                break

        }
    if (type == 2)
        switch (source) {
            case PROFILE.BUY_NEW_HOME:
                answer = 'buy a new home'
                break

            case PROFILE.RENEW_MORTGAGE:
                answer = 'renew mortgage'
                break
            case PROFILE.REFINANCE_MORTGAGE:
                answer = 'refinance mortgage'
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

export default ProfileItem