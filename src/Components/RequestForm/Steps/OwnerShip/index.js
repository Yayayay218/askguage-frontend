import React, {Component} from 'react'
import StepLayout from '../StepLayout'

class OwnerShip extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {onGoNext, onGoBack, _request, onChange, isValid} = this.props

        return (
            <div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="">Is this a single or joint ownership?</label>
                    </div>
                    <div className="group-check-boxes">
                        <label className="col-md-6 custom-control custom-radio">
                            <input type="radio" className="custom-control-input"
                                   value='1'
                                   name='ownership'
                                   defaultChecked={_request["ownership"] === 1}
                                   onChange={(e) => onChange({..._request, ownership: 1})}
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description custom-label">Yes</span>
                        </label>
                        <label className="col-md-6 custom-control custom-radio">
                            <input type="radio" className="custom-control-input"
                                   value='0'
                                   name='ownership'
                                   defaultChecked={_request["ownership"] === 0}
                                   onChange={(e) => onChange({..._request, ownership: 0})}
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description custom-label">No</span>
                        </label>
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

export default OwnerShip