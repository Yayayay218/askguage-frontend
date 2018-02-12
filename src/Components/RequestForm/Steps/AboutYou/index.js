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
                <div className="request-intro">
                    <h3>About you</h3>
                    <p>Tell us a bit more about yourself so that we can provide you with better estimates.</p>
                </div>
                <h2>Let’s get to know you better.</h2>
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
                                {/*<input type="text" className="form-control"*/}
                                       {/*{...bind("occupationType")}*/}
                                {/*/>*/}
                                <select className="custom-select"
                                        {...bind("occupationType")}
                                >
                                    <option value=''></option>
                                    <option value='0'>Full Time</option>
                                    <option value='1'>Part Time</option>
                                    <option value='2'>Contract</option>
                                    <option value='2'>Seasonal</option>
                                    <option value='2'>Self Employed</option>
                                    <option value='2'>Retired</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-12 custom-label">
                        Are you a Canadian Citizen?
                    </label>
                    <div className="col-md-12">
                        {/*<input type="text" className="form-control"*/}
                               {/*{...bind("citizenType")}*/}
                        {/*/>*/}
                        <select className="custom-select"
                                {...bind("citizenType")}
                        >
                            <option value=''></option>
                            <option value='0'>No</option>
                            <option value='1'>Yes</option>
                        </select>
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