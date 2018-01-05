import React, {Component} from 'react'
import StepLayout from '../../StepLayout'

class Budget extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const min = [
            {
                id: '100000',
                value: '100000'
            },
            {
                id: '200000',
                value: '200000'
            },
            {
                id: '300000',
                value: '300000'
            },
            {
                id: '400000',
                value: '400000'
            },
            {
                id: '500000',
                value: '500000'
            },
            {
                id: '600000',
                value: '600000'
            },
            {
                id: '1000000',
                value: '1000000'
            },
            {
                id: '1500000',
                value: '1500000'
            },
        ]
        const max = [
            {
                id: '200000',
                value: '200000'
            },
            {
                id: '300000',
                value: '300000'
            },
            {
                id: '400000',
                value: '400000'
            },
            {
                id: '500000',
                value: '500000'
            },
            {
                id: '600000',
                value: '600000'
            },
            {
                id: '1000000',
                value: '1000000'
            },
            {
                id: '1500000',
                value: '1500000'
            },
            {
                id: '2000000',
                value: '2000000'
            },
            {
                id: '3000000',
                value: '3000000'
            },
            {
                id: '5000000+',
                value: '5000000+'
            },
        ]
        const {onGoNext, onGoBack, _request, onChange, isValid} = this.props

        const bind = (field, nested) => ({
            value: _request[field][nested],
            onChange: (e) => onChange({..._request, [field]: {..._request[field], [nested]:e.target.value}})
        })

        return (
            <div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="">Whats your budget?</label>
                    </div>
                    <div className="col-md-6 label-mini">
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="">Min</label>
                            </div>
                            <div className="col-md-12">
                                <select type="select" className="custom-select"
                                        {...bind("budget","min")}
                                >
                                    <option value=""></option>
                                    {
                                        min.map(item => (
                                            <option value={item.id} key={item.id}>{item.value}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 label-mini">
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="">Max</label>
                            </div>
                            <div className="col-md-12">
                                <select type="select" className="custom-select"
                                        {...bind("budget", "max")}

                                >
                                    <option value=""></option>
                                    {
                                        max.map(item => (
                                            <option value={item.id} key={item.id}>{item.value}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="">Do you know if you are qualified for the amount above?</label>
                    </div>
                    <div className="group-check-boxes">
                        <label className="col-md-6 custom-control custom-radio">
                            <input type="radio" className="custom-control-input"
                                   value='1'
                                   name='areQualified'
                                   defaultChecked={_request["areQualified"] === 1}
                                   onChange={(e) => onChange({..._request, areQualified: 1})}
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description custom-label">Yes</span>
                        </label>
                        <label className="col-md-6 custom-control custom-radio">
                            <input type="radio" className="custom-control-input"
                                   value='0'
                                   name='areQualified'
                                   defaultChecked={_request["areQualified"] === 0}
                                   onChange={(e) => onChange({..._request, areQualified: 0})}
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

export default Budget