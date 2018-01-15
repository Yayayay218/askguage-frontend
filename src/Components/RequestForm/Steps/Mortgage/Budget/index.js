import React, {Component} from 'react'
import StepLayout from '../../StepLayout'

class Income extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {onGoNext, _request, onChange, isValid} = this.props

        const bind = (field) => ({
            value: _request[field],
            onChange: (e) => onChange({..._request, [field]: e.target.value})
        })

        return (
            <div>
                <h2>How much are you looking for?</h2>
                <div className="form-group row">
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Current mortgage amount
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"
                                       {...bind("mortgageAmount")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                How much more do you need.
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"
                                       {...bind("needMore")}

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Whats the Value of your home?
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"
                                       {...bind("homeValue")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Renewing or Refinance
                            </label>
                            <div className="col-md-12">
                                <select type="select" className="custom-select"
                                        {...bind("mortgageType")}
                                >
                                    <option value=""></option>
                                    <option value="0">Renew</option>
                                    <option value="1">Refinance</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <StepLayout
                    onGoNext={onGoNext}
                    isValid={isValid}
                />
            </div>
        )
    }
}

export default Income