import React from 'react'
import PropTypes from 'prop-types'

const CheckBoxInput = ({label, name, value, onChange, disabled, checked}) => {
    return (
        <label className="col-sm-12 custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input"
                   value={value}
                   disabled={disabled}
                   checked={checked}
                   name={name}
                   onChange={onChange}
            />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">{label}</span>
        </label>
    )
}

CheckBoxInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default CheckBoxInput