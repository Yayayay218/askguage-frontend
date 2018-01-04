import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import Api from '../../services/dataService'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Autocomplete from 'react-google-autocomplete'

class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: {
                languages: 0,
                dayOfBirth: moment()
            },
            // jobTitle: '',
            // socialMedia: '',
            // optIn: '',
            // employer: '',
            // lengthOfEmp: 0,
            // industry: '',
            // sex: 0,
            // civilStatus: '',
            // citizenship: '',
            // address: ''
        }

        this.onChangeValue = this.onChangeValue.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onChangeAddress = this.onChangeAddress.bind(this)
    }

    onChangeAddress(addr, field) {
        this.setState({
            profiles: {
                ...this.state.profiles,
                [field]: addr
            }
        })
    }

    onChangeValue(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {
                profiles: {
                    ...this.state.profiles,
                    [name]: value
                }
            })
    }

    onChangeDate(date) {
        this.setState({
            profiles: {
                ...this.state.profiles,
                dayOfBirth: date
            }
        })
    }

    onSave() {
        const {state} = this;
        let data = {...state}
        // console.log(data)
        this.props.dispatch(Actions.putProfile(data))

    }

    componentDidMount() {
        this.props.dispatch(Actions.getSetting());
        this.props.dispatch(Actions.getUser());
    }

    renderUserProfile() {
        if (this.props.user.role == 1)
            return (
                <div className="">
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label htmlFor="" className="col-sm-4 col-form-label">What service do you
                                provide? *</label>
                            <div className="col-sm-8">
                                <select className="custom-select"
                                        name="services"
                                        onChange={this.onChangeValue}>
                                    <option value="" defaultValue={''}></option>
                                    {
                                        this.props.settings[0].services.map((service, key) => {
                                            return <option value={service._id} key={key}
                                                           type={key}>{service.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Business Name *</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="businessName"
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Business Email Address *</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="businessEmail"
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Business Address *</label>
                            <div className="col-sm-8">
                                {/*<input type="text"*/}
                                       {/*className="form-control"*/}
                                       {/*name="businessAddress"*/}
                                       {/*onChange={this.onChangeValue}*/}
                                {/*/>*/}
                                <Autocomplete
                                    className="form-control"
                                    onPlaceSelected={(place) => {
                                        // console.log(place);
                                        this.onChangeAddress(place.formatted_address, 'businessAddress')
                                    }}
                                    types={['(regions)']}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Business Phone Number *</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="businessPhone"
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Website *</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="website"
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="profile-line"></div>

                    {this.state.profiles.services == '5a08f3ac65d8ef000ea590f0' || this.state.profiles.services == '5a08f3bd65d8ef000ea590f2' ?
                        <div className="">
                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label className="col-sm-4 col-form-label">Brokerage Name *</label>
                                    <div className="col-sm-8">
                                        <input type="text"
                                               className="form-control"
                                               name="brokerageName"
                                               onChange={this.onChangeValue}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="col-sm-4 col-form-label">Brokerage Address *</label>
                                    <div className="col-sm-8">
                                        {/*<input type="text"*/}
                                               {/*className="form-control"*/}
                                               {/*name="brokerageAddress"*/}
                                               {/*onChange={this.onChangeValue}*/}
                                        {/*/>*/}
                                        <Autocomplete
                                            className="form-control"
                                            onPlaceSelected={(place) => {
                                                // console.log(place);
                                                this.onChangeAddress(place.formatted_address, 'brokerageAddress')
                                            }}
                                            types={['(regions)']}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label className="col-sm-4 col-form-label">Brokerage Phone Number *</label>
                                    <div className="col-sm-8">
                                        <input type="text"
                                               className="form-control"
                                               name="brokeragePhone"
                                               onChange={this.onChangeValue}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="profile-line"></div>

                        </div> : <div></div>}

                    <div className="form-group">
                        {this.state.profiles.services == '5a08f3b565d8ef000ea590f1' ?
                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="col-sm-4 col-form-label">Which Bank do you work for? *</label>
                                    <div className="col-sm-8">
                                        <select className="custom-select"
                                                name="banks"
                                                onChange={this.onChangeValue}>
                                            <option value="" defaultValue={''}></option>
                                            {
                                                this.props.settings[0].banks.map((bank, key) => {
                                                    return <option value={bank._id} key={key}
                                                                   type={key}>{bank.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            : <div className=""></div>
                        }
                        {this.state.profiles.services == '5a08f3ac65d8ef000ea590f0' ?
                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="col-sm-4 col-form-label">Which Lenders do you work with *</label>
                                    <div className="col-sm-8">
                                        <select className="custom-select"
                                                name="lenders"
                                                onChange={this.onChangeValue}
                                        >
                                            <option value="" defaultValue={''}></option>
                                            {
                                                this.props.settings[0].lenders.map((lender, key) => {
                                                    return <option value={lender._id} key={key}
                                                                   type={key}>{lender.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                            </div>
                            : <div></div>
                        }
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Year of Experience *</label>
                            <div className="col-sm-8">
                                <input type="number"
                                       className="form-control"
                                       name="yearOfExp"
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Licence # *</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="licence"
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Are you Mobile? *</label>
                            <div className="col-sm-8">
                                <select className="custom-select"
                                        name="areMobile"
                                        onChange={this.onChangeValue}>
                                    <option value="" defaultValue={''}></option>
                                    <option value="1">I travel to my customers</option>
                                    <option value="2">My customers travel to me</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Do you provide services? *</label>
                            <div className="col-sm-8">
                                <select className="custom-select" name="time"
                                        onChange={this.onChangeValue}>
                                    <option value="" defaultValue={''}></option>
                                    <option value="1">Full Time</option>
                                    <option value="2">Part Time</option>
                                    <option value="3">Seasonal</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            )
        else
            return (<div></div>)
    }

    render() {
        console.log(this)
        if (!this.props.isFetched) {
            return <div>Loading...</div>
        }

        return (
            <div className="container user-profile">
                <div className="profile-header">
                    <h1 className="row justify-content-center">Please fill in the form below to
                        complete <br/> your profile as a {this.props.user.role == 0 ? 'customer' : 'service provider'}
                    </h1>
                </div>
                <div className="login-form">
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">First Name *</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" value={this.props.user.firstName}
                                       disabled={true}/>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Last Name *</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" value={this.props.user.lastName}
                                       disabled={true}/>
                            </div>
                        </div>

                    </div>

                    <div className="profile-line"></div>

                    {this.renderUserProfile()}
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">What languages do you speak?</label>
                            <div className="col-sm-8">
                                <select className="custom-select" name="languages"
                                        onChange={this.onChangeValue}>
                                    {/*{*/}
                                    {/*this.props.settings[0].languages.map((language, key) => {*/}
                                    {/*return <option value={language._id} key={key}*/}
                                    {/*type={key}>{language.name}</option>*/}
                                    {/*})*/}
                                    {/*}*/}
                                    <option value="0">English</option>
                                    <option value="1">French</option>
                                    <option value="2">Spanish</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Opt In</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="optIn"
                                       value={this.state.optIn}
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="profile-line"></div>

                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Connect us via social media?</label>
                            <div className="col-sm-8">
                                <select className="custom-select"
                                        name="socialMedia"
                                        value={this.state.socialMedia}
                                        onChange={this.onChangeValue}
                                >
                                    <option value="" defaultValue={''}></option>
                                    <option value="1">Facebook</option>
                                    <option value="2">Twitter</option>
                                    <option value="3">LinkedIn</option>
                                    <option value="3">Google</option>
                                    <option value="3">YouTube</option>
                                    <option value="3">Instagram</option>

                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Job Title</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="jobTitle"
                                       value={this.state.jobTitle}
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Employer</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="employer"
                                       value={this.state.employer}
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Length of Employer</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="lengthOfEmp"
                                       value={this.state.lengthOfEmp}
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Industry</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="industry"
                                       value={this.state.industry}
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">DOB *</label>
                            <div className="col-sm-8">
                                {/*<input type="text" className="form-control"*/}
                                {/*name="dayOfBirth"*/}
                                {/*value={this.state.dayOfBirth}*/}
                                {/*onChange={this.onChangeValue}*/}
                                {/*/>*/}
                                <DatePicker
                                    dateFormat="YYYY/MM/DD"
                                    selected={this.state.profiles.dayOfBirth}
                                    onChange={this.onChangeDate}
                                    className="form-control date"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Sex</label>
                            <div className="col-sm-8">
                                <select
                                    className="custom-select"
                                    name="sex"
                                    value={this.state.sex}
                                    onChange={this.onChangeValue}
                                >
                                    <option value=""></option>
                                    <option value="0">Male</option>
                                    <option value="1">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Civil Status</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="civilStatus"
                                       value={this.state.civilStatus}
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Citizenship</label>
                            <div className="col-sm-8">
                                <input type="text"
                                       className="form-control"
                                       name="citizenship"
                                       value={this.state.citizenship}
                                       onChange={this.onChangeValue}
                                />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label className="col-sm-4 col-form-label">Address</label>
                            <div className="col-sm-8">
                                {/*<input type="text"*/}
                                       {/*className="form-control"*/}
                                       {/*name="address"*/}
                                       {/*value={this.state.address}*/}
                                       {/*onChange={this.onChangeValue}*/}
                                {/*/>*/}
                                <Autocomplete
                                    className="form-control"
                                    onPlaceSelected={(place) => {
                                        // console.log(place);
                                        this.onChangeAddress(place.formatted_address, 'address')
                                    }}
                                    types={['(regions)']}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="profile-line"></div>

                    <div className="form-group row">
                        <div className="col-sm-6">
                            <div className="col-sm-4 offset-sm-4">
                                <button className="btn btn-save" onClick={this.onSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.data.data,
        isLogged: state.auth.isLogged,
        settings: state.settings.data,
        isFetched: state.settings.isFetched,
        // profiles: state.auth.data.data.profiles,
        // role: state.auth.data.data.role
    }
}

export default connect(mapStateToProps)(Profiles)