import React, {Component} from 'react'
import {connect} from 'react-redux'
import StepLayout from '../StepLayout'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class AboutYou extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const {onGoNext, onGoBack, _request, onChange, isValid, history} = this.props

        const bind = (field) => ({
            value: _request[field],
            onChange: (e) => onChange({..._request, [field]: e.target.value}),
        });
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
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    selected={_request["birthDay"]}
                                    onChange={(e) => onChange({..._request, birthDay: e})}
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
                                <input type="text" className="form-control"
                                       {...bind("occupationType")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-12 custom-label">
                        Citizen Type
                    </label>
                    <div className="col-md-12">
                        <input type="text" className="form-control"
                               {...bind("citizenType")}
                        />
                    </div>
                </div>

                <StepLayout
                    {...this.props}
                    onGoBack={onGoBack}
                    onGoNext={onGoNext}
                    isValid={isValid}
                    done={true}
                    data={_request}
                    history={history}
                />
            </div>
        )
    }
}

// Maps state from Store to props
const mapStateToProps = (state) => {
    return {
        user: state.auth.data,
        token: state.auth.token,
    }
};

export default connect(mapStateToProps)(AboutYou)