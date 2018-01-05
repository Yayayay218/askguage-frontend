import React, {Component} from 'react'
import StepLayout from '../StepLayout'

class Income extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {onGoNext, onGoBack, _request, onChange, isValid} = this.props

        const bind = (field) => ({
            value: _request[field],
            onChange: (e) => onChange({..._request, [field]: e.target.value})
        })
        return (
            <div>
                <h2>Income, Liability and more?</h2>
                <div className="form-group row">
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Your / Household Income
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"
                                       {...bind("houseHold")}

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
                                <input type="text" className="form-control"
                                       {...bind("monthlyLiability")}

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Down Payment Amount
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"
                                       {...bind("downPayment")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Net Assets
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"
                                       {...bind("netAsset")}
                                />
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