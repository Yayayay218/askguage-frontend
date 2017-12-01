import React from 'react'
import PropTypes from 'prop-types'
import FormInput from '../../components/formInputs/FormInput'
import CheckBoxInput from '../../components/formInputs/CheckBoxInput'

const Preference = ({onChangeValue, next, source}) => {
    return (
        <div className="container preference-request">
            <div>
                <div className="form-group row"
                     style={
                         source.homeBuyer == 1 || source.lookingTo == 0
                             ? {display: 'flex'}
                             : {display: 'none'}
                     }
                >
                    <label className="col-sm-4 custom-label">
                        Where are you looking to buy?
                        <br/>
                        <p className="sub-label">(Neighborhood, City, Province, Postal Code)</p>
                    </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                               name="whereBuy"
                               onChange={onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Property Type
                    </label>
                    <div className="col-sm-4">
                        <select type="select" className="custom-select"
                                name="propertyType"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">Single Detached</option>
                            <option value="1">Semi Detached</option>
                            <option value="2">Townhouse</option>
                            <option value="3">Condo</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Square Feet
                    </label>
                    <div className="col-sm-4">
                        <input type="number" min="500" max="5500" defaultValue={2000} step={100}
                               className="form-control"
                               name="squareFeet"
                               onChange={onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row"
                     style={
                         source.homeBuyer == 1 || source.lookingTo == 0
                             ? {display: 'flex'}
                             : {display: 'none'}
                     }
                >
                    <label className="col-sm-4 custom-label">
                        When are you planning to buy a new home?
                    </label>
                    <div className="col-sm-4">
                        <select type="select" className="custom-select"
                                name="whenBuyNewHome"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">Within 3 Months</option>
                            <option value="1">Within 6 Months</option>
                            <option value="2">Within Next Year</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row"
                     style={
                         source.lookingTo == 1
                             ? {display: 'flex'}
                             : {display: 'none'}
                     }
                >
                    <label className="col-sm-4 custom-label">
                        What is your Mortgage Renewal Date?
                    </label>
                    <div className="col-sm-4">
                        <input type="date" className="form-control"
                               name="renewalDate"
                               onChange={onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row"
                     style={
                         source.lookingTo == 2
                             ? {display: 'flex'}
                             : {display: 'none'}
                     }
                >
                    <label className="col-sm-4 custom-label">
                        When are you looking to refinance your mortgage?
                    </label>
                    <div className="col-sm-4">
                        <select type="select" className="custom-select"
                                name="whenRefinance"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">Within Weeks</option>
                            <option value="1">Within a Months</option>
                            <option value="2">Within 3 Months</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        What is the intended use of the property?
                    </label>
                    <div className="col-sm-4">
                        <select type="select" className="custom-select"
                                name="intendedProperty"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">Primary residence</option>
                            <option value="1">Rental Property</option>
                            <option value="2">Both (Primary + Rental)</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Mortgage Amount Required?
                    </label>
                    <div className="col-sm-4">
                        <input type="number" className="form-control"
                               min="100000" max="550000"
                               step={10000}
                               name="amountRequired"
                               onChange={onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row"
                     style={
                         source.lookingTo != 0
                             ? {display: 'flex'}
                             : {display: 'none'}
                     }
                >
                    <label className="col-sm-4 custom-label">
                        Value of Your Home
                    </label>
                    <div className="col-sm-4">
                        <input type="number" className="form-control"
                               min="100000" max="550000"
                               step={10000}
                               name="valueHome"
                               onChange={onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label" style={{margin: '0 0'}}>
                        Preferred Languages
                    </label>

                    <div className="col-sm-4">
                        <CheckBoxInput name="preferredLanguages[0]" label="English" onChange={onChangeValue} disabled={true} checked={true} value="0"/>
                        <CheckBoxInput name="preferredLanguages[1]" label="French" onChange={onChangeValue}  value="1"/>
                        <CheckBoxInput name="preferredLanguages[2]" label="Spanish" onChange={onChangeValue}  value="2"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Preferred Mortgage Type
                    </label>
                    <div className="col-sm-4">
                        <select type="select" className="custom-select"
                                name="preferredMortgageType"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">Variable</option>
                            <option value="1">Fixed</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Preferred Term
                    </label>
                    <div className="col-sm-4">
                        <select type="select" className="custom-select"
                                name="preferredMortgageTerm"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">1 Year</option>
                            <option value="1">3 Years</option>
                            <option value="2">5 Years</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Preferred Amortization
                    </label>
                    <div className="col-sm-4">
                        <select type="select" className="custom-select"
                                name="preferredAmortization"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">Primary residence</option>
                            <option value="1">Rental Property</option>
                            <option value="2">Both (Primary + Rental)</option>
                        </select>
                    </div>
                </div>
                <FormInput label="Funds Required Date" name="requiredDate" onChange={onChangeValue} type="date"/>

                <button className="btn btn-primary" onClick={next}>Next</button>
            </div>
        </div>
    )
}

Preference.propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
}
export default Preference