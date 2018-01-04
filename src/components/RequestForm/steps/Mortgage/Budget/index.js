import React, {Component} from 'react'
import StepLayout from '../../StepLayout'

class Income extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {onGoNext} = this.props

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
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                How much more do you need.
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"/>
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
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Renewing or Refinance
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>

                <StepLayout
                    onGoNext={onGoNext}
                />
            </div>
        )
    }
}

export default Income