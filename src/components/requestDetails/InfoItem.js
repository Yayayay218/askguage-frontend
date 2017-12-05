import React from 'react'
import {INFO} from '../../config/AppSetting'
import PropTypes from 'prop-types';

const InfoItem = ({source, question, type, style}) => {
    const {OCCUPATION_TYPE, SEX, CIVIL_STATUS, CANADIAN_CITIZEN} = INFO
    let answer = source;
    // if (type == 0)
    //     switch (source) {
    //         case PROPERTY_TYPE.SINGLE_DETACHED:
    //             answer = 'single detached'
    //             break
    //
    //         case PROPERTY_TYPE.SEMI_DETACHED:
    //             answer = 'semi detached'
    //             break
    //         case PROPERTY_TYPE.TOWNHOUSE:
    //             answer = 'townhouse'
    //             break;
    //         case PROPERTY_TYPE.CONDO:
    //             answer = 'condo'
    //             break;
    //
    //     }
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

export default InfoItem