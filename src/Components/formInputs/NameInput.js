import React from 'react'
import PropTypes from 'prop-types'

const NameInput = ({name, placeholder, value, onChange}) => {
    return (
        <div className="col-sm-3">
            <input type="text" className="form-control"
                   name={name}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
            />
        </div>
    )
}

NameInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default NameInput