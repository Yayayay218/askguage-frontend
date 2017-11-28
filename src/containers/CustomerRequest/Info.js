import React, {Component} from 'react'
import PropTypes from 'prop-types'

const Info = ({onChangeValue, next, source}) => {
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
                    <div className="col-sm-3">
                        <input type="text" className="form-control"
                               name="firstName"
                               placeholder="First Name"
                               value={info.firstName}
                               onChange={onChangeValue}
                        />
                    </div>

                    <div className="col-sm-3">
                        <input type="text" className="form-control"
                               name="middleName"
                               placeholder="Middle Name"
                               onChange={onChangeValue}
                        />
                    </div>

                    <div className="col-sm-3">
                        <input type="text" className="form-control"
                               name="lastName"
                               placeholder="Last Name"
                               value={info.lastName}
                               onChange={onChangeValue}
                        />
                    </div>
                </div>


                {/*<div className="col-sm-1">*/}
                    {/*<input type="text" className="form-control"*/}
                           {/*name="middleName"*/}
                           {/*placeholder="middleName"*/}
                           {/*onChange={onChangeValue}*/}
                    {/*/>*/}
                {/*</div>*/}
                {/*<div className="col-sm-1">*/}
                    {/*<input type="text" className="form-control"*/}
                           {/*name="lastName"*/}
                           {/*placeholder="Last Name"*/}
                           {/*value={info.lastName}*/}
                           {/*onChange={onChangeValue}*/}
                    {/*/>*/}
                {/*</div>*/}
            </div>

            <div className="form-group row">
                <label className="col-sm-4 custom-label">
                    Address
                </label>

                <div className="col-sm-4">
                    <input type="text" className="form-control"
                           name="address"
                           value={info.address}
                           onChange={onChangeValue}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 custom-label">
                    Email
                </label>

                <div className="col-sm-4">
                    <input type="text" className="form-control"
                           name="email"
                           value={info.email}
                           onChange={onChangeValue}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 custom-label">
                    Phone Number
                </label>

                <div className="col-sm-4">
                    <input type="text" className="form-control"
                           name="phoneNumber"
                           value={info.phoneNumber}
                           onChange={onChangeValue}
                    />
                </div>
            </div>
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

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Job Title
                    </label>

                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                               name="jobTitle"
                               value={info.jobTitle}
                               onChange={onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Length of Employer
                    </label>

                    <div className="col-sm-4">
                        <input type="number" className="form-control"
                               name="lengthOfEmp"
                               value={info.lengthOfEmp}
                               onChange={onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Industry
                    </label>

                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                               name="industry"
                               value={info.industry}
                               onChange={onChangeValue}
                        />
                    </div>
                </div>
                <div className="profile-line"></div>
                <div className="description col-sm-4 offset-sm-4">
                    <label className="">Additional Info</label>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 custom-label">
                        Date of Birth
                    </label>

                    <div className="col-sm-4">
                        <input type="date" className="form-control"
                               name="dob"
                               value={info.dob}
                               onChange={onChangeValue}
                        />
                    </div>
                </div>

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