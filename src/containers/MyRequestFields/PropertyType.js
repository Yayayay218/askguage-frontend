import React from 'react';
import PropTypes from 'prop-types';
import {PREFERENCE} from '../../config/AppSetting'

const PropertyType = ({source}) => {
    const TYPE = PREFERENCE.PROPERTY_TYPE
    if(source == TYPE.CONDO)
        source = 'Condo'
    else if(source == TYPE.SEMI_DETACHED)
        source = 'Semi Detached'
    else if(source == TYPE.SINGLE_DETACHED)
        source = 'Single Detached'
    else source = 'Townhouse'
    return <label className="label-header content">{source}</label>
};


export default PropertyType;