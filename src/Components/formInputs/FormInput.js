import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({type ,label, name, value, onChange}) => {
    return (
        <div className="form-group row">
            <label className="col-sm-4 custom-label">
                {label}
            </label>

            <div className="col-sm-4">
                <input type={type} className="form-control"
                       name={name}
                       value={value}
                       onChange={onChange}
                />
            </div>
        </div>
    )
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default FormInput