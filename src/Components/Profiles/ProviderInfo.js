import React, {Component} from 'react'
import Autocomplete from 'react-google-autocomplete'

export default class ProviderInfo extends Component {
    render() {
        const {user, onChange} = this.props
        const bind = (field) => ({
            value: user["profiles"][field],
            onChange: (e) => onChange({...user, profiles: {...user["profiles"], [field]: e.target.value}})
        })
        return (
            <div>
                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">What service do you provide?</label>
                            </div>
                            <div className="col-md-8">
                                <select className="custom-select"
                                        {...bind("kindOfService")}
                                >
                                    <option value=""></option>
                                    <option value="0">Estate</option>
                                    <option value="1">Mortgage</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Business Name</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("businessName")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Website</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("website")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Business Address</label>
                            </div>
                            <div className="col-md-8">
                                <Autocomplete
                                    className="form-control"
                                    types={['(regions)']}
                                    onPlaceSelected={(place) => {
                                        onChange({
                                            ...user,
                                            profiles: {
                                                ...user.profiles,
                                                businessAddress: {
                                                    address: place.formatted_address,
                                                    lat: place.geometry.location.lat(),
                                                    lng: place.geometry.location.lng()
                                                }
                                            },
                                        })
                                    }}
                                    defaultValue={user['profiles']['businessAddress']['address']}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Business Email</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("businessEmail")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Business Phone Number</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("businessPhoneNumber")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Brokerage Name</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("brokerageName")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Brokerage Address</label>
                            </div>
                            <div className="col-md-8">
                                <Autocomplete
                                    className="form-control"
                                    onPlaceSelected={(place) => {
                                        onChange({
                                            ...user,
                                            profiles: {
                                                ...user.profiles,
                                                brokerageAddress: {
                                                    address: place.formatted_address,
                                                    lat: place.geometry.location.lat(),
                                                    lng: place.geometry.location.lng()
                                                }
                                            },
                                        })
                                    }}
                                    types={['(regions)']}
                                    defaultValue={user['profiles']['brokerageAddress']['address']}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Brokerage Phone Number</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("brokeragePhoneNumber")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Which Bank do you work for?</label>
                            </div>
                            <div className="col-md-8">
                                <select className="custom-select"
                                        {...bind("bank")}
                                >
                                    <option value=""></option>
                                    <option value="0">Bank A</option>
                                    <option value="1">Bank B</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Which Lenders do you work with?</label>
                            </div>
                            <div className="col-md-8">
                                <select className="custom-select"
                                        {...bind("lenders")}
                                >
                                    <option value=""></option>
                                    <option value="0">Lender A</option>
                                    <option value="1">Lender B</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Years of Experience</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("yearOfExperience")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Licence #</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("licence")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Are you Mobile? </label>
                            </div>
                            <div className="col-md-8">
                                <select className="custom-select"
                                        {...bind("areMobile")}
                                >
                                    <option value=""></option>
                                    <option value="0">I travel to my customers</option>
                                    <option value="1">My customers travel to me</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Do you provide your services ?</label>
                            </div>
                            <div className="col-md-8">
                                <select className="custom-select"
                                        {...bind("provideService")}
                                >
                                    <option value=""></option>
                                    <option value="0">Full Time</option>
                                    <option value="1">Part Time</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-line"></div>
            </div>
        )
    }
}
