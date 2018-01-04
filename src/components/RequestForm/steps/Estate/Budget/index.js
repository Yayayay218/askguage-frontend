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
                id: 0,
                value: '100000'
            },
            {
                id: 1,
                value: '200000'
            },
            {
                id: 2,
                value: '300000'
            },
            {
                id: 3,
                value: '400000'
            },
            {
                id: 4,
                value: '500000'
            },
            {
                id: 5,
                value: '600000'
            },
            {
                id: 6,
                value: '1000000'
            },
            {
                id: 7,
                value: '1500000'
            },
        ]
        const max = [
            {
                id: 0,
                value: '200000'
            },
            {
                id: 1,
                value: '300000'
            },
            {
                id: 2,
                value: '400000'
            },
            {
                id: 3,
                value: '500000'
            },
            {
                id: 4,
                value: '600000'
            },
            {
                id: 5,
                value: '1000000'
            },
            {
                id: 6,
                value: '1500000'
            },
            {
                id: 7,
                value: '2000000'
            },
            {
                id: 8,
                value: '3000000'
            },
            {
                id: 9,
                value: '5000000+'
            },
        ]
        const {onGoNext, onGoBack} = this.props

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
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description custom-label">Yes</span>
                        </label>
                        <label className="col-md-6 custom-control custom-radio">
                            <input type="radio" className="custom-control-input"
                                   value='0'
                                   name='areQualified'
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description custom-label">No</span>
                        </label>
                    </div>
                </div>
                <StepLayout
                    onGoBack={onGoBack}
                    onGoNext={onGoNext}
                />
            </div>
        )
    }
}

export default Budget