import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FormInput from '../../Components/formInputs/FormInput'

const Finance = ({onChangeValue, next, source}) => {
    let {profile, info} = source
    return (
        <div className="container preference-request">
            <div style={profile.realtor == 1 ? {display: 'block'} : {display: 'none'}}>
                <FormInput label="Gross Annual Income" name="annualIncome" onChange={onChangeValue} type="number"/>
                <FormInput label="Net Assets" name="netAssets" onChange={onChangeValue} type="number"/>
                <FormInput label="Monthly Liabilities" name="monthlyLiabilities" onChange={onChangeValue} type="number"/>
                <FormInput label="Available Funds" name="availableFunds" onChange={onChangeValue} type="number"/>
                <FormInput label="Down Payment Amount" name="downPayment" onChange={onChangeValue} type="number"/>
                <FormInput label="Was the down payment amount is a?" name="downPaymentIs" onChange={onChangeValue} type="number"/>
                <FormInput label="Closing Amount" name="closingAmount" onChange={onChangeValue} type="number"/>
            </div>
            <FormInput label="Calculated Values" name="calculatedValues" onChange={onChangeValue} type="number"/>
            <FormInput label="Your Affortability" name="yourAffort" onChange={onChangeValue} type="number"/>
            <FormInput label="TDSR" name="tdsr" onChange={onChangeValue} type="number"/>
            <FormInput label="GDSR" name="gdsr" onChange={onChangeValue} type="number"/>
            <FormInput label="Total Monthly Payments" name="totalMonthly" onChange={onChangeValue} type="number"/>
            <FormInput label="Monthly Mortgage Amount" name="monthlyAmount" onChange={onChangeValue} type="number"/>
            <FormInput label="Gross Monthly Income" name="grossMonthly" onChange={onChangeValue} type="number"/>

            <button className="btn btn-primary" onClick={next}>Next</button>

        </div>
    )
}

Finance.propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
}
export default Finance