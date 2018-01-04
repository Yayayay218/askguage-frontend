import React, {Component} from 'react'
import StepLayout from '../StepLayout'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class AboutYou extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {onGoNext, onGoBack} = this.props
        console.log(this.props)
        return (
            <div>
                <h2>Just bit more about you?</h2>
                <div className="form-group row">
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                BIRTHDAY
                            </label>
                            <div className="col-md-12">
                                <DatePicker
                                    dateFormat="YYYY/MM/DD"
                                    className="form-control date"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <label className="col-md-12 custom-label">
                                Occupation type
                            </label>
                            <div className="col-md-12">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-12 custom-label">
                        Citizen Type
                    </label>
                    <div className="col-md-12">
                        <input type="text" className="form-control"/>
                    </div>
                </div>

                <StepLayout
                    onGoBack={onGoBack}
                    onGoNext={onGoNext}
                    done={true}
                />
            </div>
        )
    }
}

export default AboutYou