import React, {Component} from 'react'
import Autocomplete from 'react-google-autocomplete'
import NumberFormat from 'react-number-format'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

function Input(props) {
    return (
        <div className="col-md-6 col-12">
            <div className="row">
                <div className="col-md-4 ">
                    <label className="col-form-label">{props.label}</label>
                </div>
                <div className="col-md-8">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default class ProviderInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: (props.user.profiles.arrLenders && props.user.profiles.arrLenders.length !== 0) ? props.user.profiles.arrLenders : [],
            options: [
                {value: '0', label: 'A Lenders'},
                {value: '1', label: 'B Lenders'},
                {value: '2', label: 'C Lenders'},
                {value: '3', label: 'Private Investors'},
                {value: '4', label: 'All of the Above'}
            ]
        }
    }

    isAllOfAbove(arr) {
        if (arr.length === 0)
            return false
        else {
            let pos = arr.map(e => {
                return e.value
            }).indexOf('4')
            if (pos === -1)
                return false
            return true
        }
    }

    handleSelectChange(value) {
        const {user, onChange, disabled} = this.props
        if (this.isAllOfAbove(value)) {
            this.setState({
                value: [{value: '4', label: 'All of the Above'}],
                options: [{value: '4', label: 'All of the Above'}],
            }, () => onChange({
                ...user,
                profiles: {...user["profiles"], arrLenders: this.state.value}
            }))
        }
        else
            this.setState({
                value: value,
                options: [
                    {value: '0', label: 'A Lenders'},
                    {value: '1', label: 'B Lenders'},
                    {value: '2', label: 'C Lenders'},
                    {value: '3', label: 'Private Investors'},
                    {value: '4', label: 'All of the Above'}
                ]
            }, () => onChange({
                ...user,
                profiles: {...user["profiles"], arrLenders: this.state.value}
            }));
    }

    render() {
        // console.log(this.props)
        const {user, onChange, disabled, formFields} = this.props
        const bind = (field) => ({
            value: user["profiles"][field],
            onChange: (e) => onChange({...user, profiles: {...user["profiles"], [field]: e.target.value}})
        })
        return (
            <div>
                <div className="form-group row">
                    <Input
                        label="What service do you provide?"
                    >
                        <select className="custom-select"
                                {...bind("kindOfService")}
                                disabled={disabled}
                        >
                            <option value="-1"></option>
                            <option value="1">Mortgage Agent</option>
                            <option value="4">Mortgage Advisor</option>
                            <option value="0">Real Estate Agent</option>
                            <option value="3">Real Estate Lawyer</option>
                            <option value="2">Home Inspector</option>
                        </select>
                    </Input>

                    <Input
                        label="Business Name"
                    >
                        <input type="text" className="form-control"
                               {...bind("businessName")}
                        />
                        {
                            !formFields.businessNameValid && <p className="error-text no-margin">is required</p>
                        }
                    </Input>

                </div>

                <div className="form-group row">
                    <Input
                        label="Website"
                    >
                        <input type="text" className="form-control"
                               {...bind("website")}
                        />
                        {
                            !formFields.websiteValid && <p className="error-text no-margin">is required</p>
                        }
                    </Input>

                    <Input
                        label="Business Address"
                    >
                        <Autocomplete
                            className="form-control"
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
                            onChange={(e) => onChange({
                                ...user,
                                profiles: {
                                    ...user.profiles,
                                    businessAddress: {
                                        address: e.target.value,
                                        lat: '',
                                        lng: ''
                                    }
                                },
                            })}
                            types={['geocode']}
                            defaultValue={user['profiles']['businessAddress']['address']}
                        />
                        {
                            !formFields.businessAddressValid && <p className="error-text no-margin">is required</p>
                        }
                    </Input>

                </div>

                <div className="form-group row">
                    <Input
                        label="Business Email"
                    >
                        <input type="text" className="form-control"
                               {...bind("businessEmail")}
                        />
                        {
                            !formFields.businessEmailValid && <p className="error-text no-margin">is required</p>
                        }
                    </Input>

                    <Input
                        label="Business Phone Number"
                    >
                        <NumberFormat
                            format="##########"
                            mask="_"
                            className="form-control"
                            onValueChange={(values) => onChange({
                                ...user,
                                profiles: {...user.profiles, businessPhoneNumber: values.value}
                            })}
                            value={user.profiles.businessPhoneNumber}
                        />
                        {
                            !formFields.businessPhoneValid && <p className="error-text no-margin">is required</p>
                        }
                    </Input>

                </div>
                {
                    (user.profiles.kindOfService == 0 || user.profiles.kindOfService == 1)
                    &&
                    <div className="form-group row">
                        <Input
                            label="Brokerage Name"
                        >
                            <input type="text" className="form-control"
                                   {...bind("brokerageName")}
                            />
                        </Input>

                        <Input
                            label="Brokerage Address"
                        >
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
                                types={['geocode']}
                                defaultValue={user['profiles']['brokerageAddress']['address']}
                            />
                        </Input>
                    </div>
                }

                <div className="form-group row">
                    {
                        (user.profiles.kindOfService == 0 || user.profiles.kindOfService == 1)
                        &&
                        <Input
                            label="Brokerage Phone Number"
                        >
                            <NumberFormat
                                format="##########"
                                mask="_"
                                className="form-control"
                                onValueChange={(values) => onChange({
                                    ...user,
                                    profiles: {...user.profiles, brokeragePhoneNumber: values.value}
                                })}
                                value={user.profiles.brokeragePhoneNumber}
                            />
                        </Input>

                    }
                    {
                        user.profiles.kindOfService == 4
                        &&
                        <Input
                            label="Which Bank do you work for?"
                        >
                            <select className="custom-select"
                                    {...bind("bank")}
                            >
                                <option value=""></option>
                                <option value="0">Royal Bank of Canada (RBC)</option>
                                <option value="1">Toronto-Dominion Bank (TD)</option>
                                <option value="2">Bank of Nova Scotia (Scotiabank)</option>
                                <option value="3">Bank of Montreal (BMO)</option>
                                <option value="4">Canadian Imperial Bank of Commerce (CIBC)</option>
                            </select>
                        </Input>
                    }
                </div>

                <div className="form-group row">
                    {
                        user.profiles.kindOfService == 1
                        &&
                        <Input
                            label="Which Lenders do you work with?"
                        >
                            <Select
                                // className="custom-select"
                                // options={[
                                //     {className: 'custom-select'}
                                // ]}
                                options={this.state.options}
                                multi={true}
                                value={this.state.value}
                                onChange={this.handleSelectChange.bind(this)}
                            />
                        </Input>

                    }
                    <Input
                        label="Years of Experience"
                    >
                        <input type="text" className="form-control"
                               {...bind("yearOfExperience")}
                        />
                    </Input>
                </div>

                <div className="form-group row">
                    <Input
                        label="Licence #"
                    >
                        <input type="text" className="form-control"
                               {...bind("licence")}
                        />
                        {
                            !formFields.licenceValid && <p className="error-text no-margin">is required</p>
                        }
                    </Input>

                    <Input
                        label="Are you Mobile?"
                    >
                        <select className="custom-select"
                                {...bind("areMobile")}
                        >
                            <option value=""></option>
                            <option value="0">I travel to my customers</option>
                            <option value="1">My customers travel to me</option>
                        </select>
                    </Input>
                </div>

                <div className="form-group row">
                    <Input
                        label="Do you provide your services ?"
                    >
                        <select className="custom-select"
                                {...bind("provideService")}
                        >
                            <option value=""></option>
                            <option value="0">Full Time</option>
                            <option value="1">Part Time</option>
                            <option value="3">Seasonal</option>
                        </select>
                    </Input>
                </div>
                <div className="profile-line"></div>
            </div>
        )
    }
}
