import React from 'react';
import PropTypes from 'prop-types';
import {PROFILE} from '../../config/AppSetting'

const HomeBuyer = ({source}) => {
    if(source == PROFILE.BUY_NEW_HOME)
        source = 'Buy a new house'
    else if(source == PROFILE.RENEW_MORTGAGE)
        source = 'Renew Mortgage'
    else
        source = 'Refinance Mortgage'
    return <h2>{source}</h2>
};


export default HomeBuyer;