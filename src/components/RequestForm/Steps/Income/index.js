import React, {Component} from 'react'
import StepLayout from '../StepLayout'
import NumberFormat from 'react-number-format';

class Income extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {onGoNext, onGoBack, _request, onChange, isValid, requestType} = this.props

        // const bind = (field) => ({
        //     value: _request[field],
        //     onChange: (e) => onChange({..._request, [field]: e.target.value})
        // })
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
                                Your / Household Income
                            </label>
                            <div className="col-md-12">
                                <NumberFormat
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    className="form-control"
                                    data-toggle="tooltip"
                                    title="Your yearly household income before taxes, including any bonuses and supplementary income. Your /household income includes: Borrowers, Co-Borrowers and other Incomes"
                                    value={_request["houseHold"]}
                                    onValueChange={(values) => onChange({..._request, houseHold: values.value})}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Monthly Liability
                            </label>
                            <div className="col-md-12">
                                <NumberFormat
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    className="form-control"
                                    data-toggle="tooltip"
                                    title="Monthly liabilities includes:  average monthly interest owed on credit card,  monthly leasing or financing payment for car(s), monthly loan expenses, such as line of credit,  student loans, alimony or child support."
                                    value={_request["monthlyLiability"]}
                                    onValueChange={(values) => onChange({..._request, monthlyLiability: values.value})}
                                />
                                {/*<input type="text" className="form-control"*/}
                                {/*data-toggle="tooltip"*/}
                                {/*title="Monthly liabilities includes:  average monthly interest owed on credit card,  monthly leasing or financing payment for car(s), monthly loan expenses, such as line of credit,  student loans, alimony or child support."*/}
                                {/*{...bind("monthlyLiability")}*/}
                                {/*/>*/}
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
                                    <NumberFormat
                                        thousandSeparator={true}
                                        prefix={'$'}
                                        className="form-control"
                                        data-toggle="tooltip"
                                        title="The minimum down payment in Canada is 5%. For down payments of less than 20%, home buyers are required to purchase mortgage default insurance, commonly referred to as CMHC insurance."
                                        value={_request["downPayment"]}
                                        onValueChange={(values) => onChange({..._request, downPayment: values.value})}
                                    />
                                    {/*<input type="text" className="form-control"*/}
                                           {/*data-toggle="tooltip"*/}
                                           {/*title="The minimum down payment in Canada is 5%. For down payments of less than 20%, home buyers are required to purchase mortgage default insurance, commonly referred to as CMHC insurance."*/}
                                           {/*{...bind("downPayment")}*/}
                                    {/*/>*/}
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
                                <NumberFormat
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    className="form-control"
                                    data-toggle="tooltip"
                                    title="Net Assets includes: CHQ, Saving, Stocks, Investments, RRSP and RIF"
                                    value={_request["netAsset"]}
                                    onValueChange={(values) => onChange({..._request, netAsset: values.value})}
                                />
                                {/*<input type="text" className="form-control"*/}
                                       {/*data-toggle="tooltip"*/}
                                       {/*title="Net Assets includes: CHQ, Saving, Stocks, Investments, RRSP and RIF"*/}
                                       {/*{...bind("netAsset")}*/}
                                {/*/>*/}
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