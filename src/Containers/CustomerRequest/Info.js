import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NameInput from '../../Components/formInputs/NameInput'
import FormInput from '../../Components/formInputs/FormInput'
import Autocomplete from 'react-google-autocomplete';

const Info = ({onChangeValue, next, source, onChangeAddress}) => {
    let {profile, info} = source
    return (
        <div className="container preference-request" style={{marginTop: '-17px'}}>
            <div className="description col-sm-4 offset-sm-4">
                <label className="">Contact Info</label>
            </div>
            <div className="form-group row">
                <label className="col-sm-4 custom-label">
                    Name
                </label>
                <div className="info-name d-flex flex-row">
                    <NameInput name="firstName" placeholder="First Name" value={info.firstName}
                               onChange={onChangeValue}/>
                    <NameInput name="middleName" placeholder="Middle Name" value="" onChange={onChangeValue}/>
                    <NameInput name="lastName" placeholder="Last Name" value={info.lastName} onChange={onChangeValue}/>
                </div>
            </div>

            {/*<FormInput type="text" label="Address" name="address" value={info.address} onChange={onChangeValue}/>*/}
            <div className="form-group row">
                <label className="col-sm-4 custom-label">
                    Address
                </label>
                <div className="col-sm-4">
                    <Autocomplete
                        className="form-control"
                        onPlaceSelected={(place) => {
                            console.log(place);
                            onChangeAddress(place.formatted_address, 'address')
                        }}
                        types={['(regions)']}
                        defaultValue={info.address}
                    />
                </div>
            </div>
            <FormInput type="text" label="Email" name="email" value={info.email} onChange={onChangeValue}/>
            <FormInput type="text" label="Phone Number" name="phoneNumber" value={info.phoneNumber}
                       onChange={onChangeValue}/>

            <div className="profile-line"></div>
            <div style={profile.realtor == 1 ? {display: 'block'} : {display: 'none'}}>
                <div className="description col-sm-4 offset-sm-4">
                    <label className="">Occupation Info</label>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Occupation Type
                    </label>

                    <div className="col-sm-4">
                        <select className="custom-select"
                                name="occupationType"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">Full Time</option>
                            <option value="1">Part Time</option>
                            <option value="2">Contract</option>
                            <option value="3">Seasonal</option>
                            <option value="4">Self Employed</option>
                            <option value="5">Retired</option>
                        </select>
                    </div>
                </div>

                <FormInput type="text" label="Job Title" name="jobTitle" value={info.jobTitle}
                           onChange={onChangeValue}/>
                <FormInput type="number" label="Length of Employer" name="lengthOfEmp" value={info.lengthOfEmp}
                           onChange={onChangeValue}/>
                <FormInput type="text" label="Industry" name="industry" value={info.industry} onChange={onChangeValue}/>

                <div className="profile-line"></div>
                <div className="description col-sm-4 offset-sm-4">
                    <label className="">Additional Info</label>
                </div>
                <FormInput type="date" label="Date of Birth" name="dob" value={info.dob} onChange={onChangeValue}/>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Sex
                    </label>

                    <div className="col-sm-4">
                        <select className="custom-select"
                                name="sex"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Civil Status
                    </label>

                    <div className="col-sm-8">
                        <select className="custom-select"
                                name="civilStatus"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">Married</option>
                            <option value="1">Common Law</option>
                            <option value="2">Single</option>
                            <option value="3">Separated</option>
                            <option value="4">Divorced</option>
                            <option value="3">Widowed</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Canadian Citizen
                    </label>

                    <div className="col-sm-8">
                        <select className="custom-select"
                                name="canadianCitizen"
                                onChange={onChangeValue}
                        >
                            <option value=""></option>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={next}>Next</button>
        </div>
    )
}

Info.propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
}
export default Info