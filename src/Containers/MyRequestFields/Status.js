import React from 'react';
import PropTypes from 'prop-types';
import {STATUS} from '../../Configs/AppSetting'

const PropertyType = ({source}) => {
    if (source == STATUS.DRAFT)
        source = 'Draft'
    else if (source == STATUS.OPEN)
        source = 'Open'
    else if (source == STATUS.CLOSED)
        source = 'Closed'
    else if (source == STATUS.BID_CLOSED)
        source = 'Bid Closed'
    return <label className="label-header content">{source}</label>
};


export default PropertyType;