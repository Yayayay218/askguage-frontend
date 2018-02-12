import React, {Component} from 'react'
import StepLayout from '../StepLayout'

class Income extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {onGoNext, onGoBack, _request, onChange, isValid, requestType} = this.props

        const bind = (field) => ({
            value: _request[field],
            onChange: (e) => onChange({..._request, [field]: e.target.value})
        })
        return (
            <div>
                <div className="request-intro">
                    <h3>Finances</h3>
                    <p>Let us understand your financial situation so that we can service you accordingly.</p>
                </div>
                <h2>Income, Liability and more?</h2>
                <div className="form-group row">
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                {requestType === 0 ? 'Your / Household Income' : 'Gross Household Income'}
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"
                                       data-toggle="tooltip"
                                       title="Your /household income includes: Borrowers, Co-Borrowers and other Incomes"
                                       {...bind("houseHold")}
                                />
                                {/*<select className="custom-select"*/}
                                {/*{...bind("houseHold")}*/}
                                {/*>*/}
                                {/*<option value=''></option>*/}
                                {/*<option value='0'>Borrowers</option>*/}
                                {/*<option value='1'>Co-Borrowers</option>*/}
                                {/*<option value='2'>Other Incomes</option>*/}
                                {/*</select>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Monthly Liability
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"
                                       data-toggle="tooltip"
                                       title="Monthly Liabilities includes: Car Payments, Monthly (Credit Card, Line of Credit, Home Equity Line of Credit, Student Loan) Payments, Monthly Alimony or Child Support Payments, Any outstanding monthly payments"
                                       {...bind("monthlyLiability")}
                                />
                                {/*<select className="custom-select"*/}
                                {/*{...bind("monthlyLiability")}*/}
                                {/*>*/}
                                {/*<option value=''></option>*/}
                                {/*<option value='0'>Car Payments</option>*/}
                                {/*<option value='1'>Monthly Payments</option>*/}
                                {/*<option value='2'>Any Outstanding Monthly Payments</option>*/}
                                {/*</select>*/}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    {
                        requestType === 0 && <div className="col-md-6">
                            <div className="row">
                                <label className="col-md-12 custom-label">
                                    Down Payment Amount
                                </label>
                                <div className="col-md-12">
                                    <input type="text" className="form-control"
                                           data-toggle="tooltip"
                                           title="The minimum down payment in Canada is 5%. For down payments of less than 20%, home buyers are required to purchase mortgage default insurance, commonly referred to as CMHC insurance."
                                           {...bind("downPayment")}
                                    />
                                </div>
                            </div>
                        </div>

                    }
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Net Assets
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"
                                       data-toggle="tooltip"
                                       title="Net Assets includes: CHQ, Saving, Stocks, Investments, RRSP and RIF"

                                       {...bind("netAsset")}
                                />
                                {/*<select className="custom-select"*/}
                                {/*{...bind("netAsset")}*/}
                                {/*>*/}
                                {/*<option value=''></option>*/}
                                {/*<option value='0'>CHQ</option>*/}
                                {/*<option value='1'>Saving</option>*/}
                                {/*<option value='2'>Stocks</option>*/}
                                {/*<option value='2'>Investments</option>*/}
                                {/*<option value='2'>RRSP</option>*/}
                                {/*<option value='2'>RIF</option>*/}
                                {/*</select>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <StepLayout
                    onGoBack={onGoBack}
                    onGoNext={onGoNext}
                    isValid={isValid}
                />
            </div>
        )
    }
}

export default Income