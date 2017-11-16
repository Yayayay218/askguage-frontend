import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import Api from '../../services/dataService'

class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobTitle: '',
            socialMedia: '',
            optIn: '',
            employer: '',
            lengthOfEmp: 0,
            industry: '',
            sex: 0,
            civilStatus: '',
            citizenship: '',
            address: ''
        }

        this.onChangeValue = this.onChangeValue.bind(this)
        this.onSave = this.onSave.bind(this)
    }

    onChangeValue(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
    }

    onSave() {
        const {state} = this;
        let data = {...state}
        console.log(data)
        this.props.dispatch(Actions.postProfile(data))
    }

    componentDidMount() {
        this.props.dispatch(Actions.getSetting());
        this.props.dispatch(Actions.getUser());
    }

    renderUserProfile() {
        if (this.props.data.role == 1)
            return (
                <div className="">
                    <div className="form-group row">
                        <label htmlFor="select1" className="col-md-2 col-form-label">What service do you
                            provide?</label>
                        <div className="col-md-4">
                            <select className="custom-select" id="select1" style={{width: '100%'}}
                                    name="services"
                                    onChange={this.onChangeValue}>
                                <option value="" defaultValue={''}></option>
                                {
                                    this.props.settings[0].services.map((service, key) => {
                                        return <option value={service._id} key={key} type={key}>{service.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2 col-form-label">Business Name</label>
                        <div className="col-md-4">
                            <input type="text"
                                   className="form-control"
                                   name="businessName"
                                   onChange={this.onChangeValue}
                            />
                        </div>
                        <label className="col-md-2 col-form-label">Business Address</label>
                        <div className="col-md-4">
                            <input type="text"
                                   className="form-control"
                                   name="businessAddress"
                                   onChange={this.onChangeValue}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2 col-form-label">Website</label>
                        <div className="col-md-4">
                            <input type="text"
                                   className="form-control"
                                   name="website"
                                   onChange={this.onChangeValue}
                            />
                        </div>
                        <label className="col-md-2 col-form-label">Business Email</label>
                        <div className="col-md-4">
                            <input type="text"
                                   className="form-control"
                                   name="businessEmail"
                                   onChange={this.onChangeValue}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-2 col-form-label">Business Phone Number</label>
                        <div className="col-md-4">
                            <input type="text"
                                   className="form-control"
                                   name="businessPhone"
                                   onChange={this.onChangeValue}
                            />
                        </div>
                    </div>
                    {this.state.services == '5a08f3ac65d8ef000ea590f0' || this.state.services == '5a08f3bd65d8ef000ea590f2' ?
                        <div className="">
                            <div className="form-group row">
                                <label className="col-md-2 col-form-label">Brokerage Name</label>
                                <div className="col-md-4">
                                    <input type="text"
                                           className="form-control"
                                           name="brokerageName"
                                           onChange={this.onChangeValue}
                                    />
                                </div>
                                <label className="col-md-2 col-form-label">Brokerage Address</label>
                                <div className="col-md-4">
                                    <input type="text"
                                           className="form-control"
                                           name="brokerageAddress"
                                           onChange={this.onChangeValue}
                                    />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label className="col-md-2 col-form-label">Brokerage Phone Number</label>
                                <div className="col-md-4">
                                    <input type="text"
                                           className="form-control"
                                           name="brokeragePhone"
                                           onChange={this.onChangeValue}
                                    />
                                </div>
                            </div>
                        </div> : <div></div>}

                    <div className="form-group">
                        {this.state.services == '5a08f3b565d8ef000ea590f1' ?
                            <div className="row">
                                <label className="col-md-2 col-form-label">Which Bank do you work for?</label>
                                <div className="col-md-4">
                                    <select className="custom-select" style={{width: '100%'}} name="banks" onChange={this.onChangeValue}>
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
                            : <div className=""></div>
                        }
                        {this.state.services == '5a08f3ac65d8ef000ea590f0' ?
                            <div className="row">
                                <label className="col-md-2 col-form-label">Which Lenders do you work with</label>
                                <div className="col-md-4">
                                    <select className="custom-select"
                                            style={{width: '100%'}}
                                            name="lenders"
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
                            : <div></div>
                        }
                    </div>

                    <div className="form-group row">
                        <label className="col-md-2 col-form-label">Year of Experience</label>
                        <div className="col-md-4">
                            <input type="number"
                                   className="form-control"
                                   name="yearOfExp"
                                   onChange={this.onChangeValue}
                            />
                        </div>
                        <label className="col-md-2 col-form-label">Licence #</label>
                        <div className="col-md-4">
                            <input type="text"
                                   className="form-control"
                                   name="licence"
                                   onChange={this.onChangeValue}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-2 col-form-label">Are you Mobile?</label>
                        <div className="col-md-4">
                            <select className="custom-select" style={{width: '100%'}} name="areMobile" onChange={this.onChangeValue}>
                                <option value="" defaultValue={''}></option>
                                <option value="1">I travel to my customers</option>
                                <option value="2">My customers travel to me</option>
                            </select>
                        </div>
                        <label className="col-md-2 col-form-label">Do you provide services?</label>
                        <div className="col-md-4">
                            <select className="custom-select" style={{width: '100%'}} name="time" onChange={this.onChangeValue}>
                                <option value="" defaultValue={''}></option>
                                <option value="1">Full Time</option>
                                <option value="2">Part Time</option>
                                <option value="3">Seasonal</option>
                            </select>
                        </div>
                    </div>
                </div>
            )
        else
            return (<div></div>)
    }

    render() {
        if (!this.props.isFetched) {
            return <div>Loading...</div>
        }

        return (
            <div className="container">
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-md-2 col-form-label">First Name</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" value={this.props.data.firstName}
                               disabled={true}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-md-2 col-form-label">Last Name</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" value={this.props.data.lastName}
                               disabled={true}/>
                    </div>
                </div>
                {this.renderUserProfile()}
                <div className="form-group row">
                    <label className="col-md-2 col-form-label">What languages do you speak?</label>
                    <div className="col-md-4">
                        <select className="custom-select" style={{width: '100%'}} name="languages" onChange={this.onChangeValue}>
                            {
                                this.props.settings[0].languages.map((language, key) => {
                                    return <option value={language._id} key={key} type={key}>{language.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <label className="col-md-2 col-form-label">Opt In</label>
                    <div className="col-md-4">
                        <input type="text"
                               className="form-control"
                               name="optIn"
                               value={this.state.optIn}
                               onChange={this.onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Connect us via social media?</label>
                    <div className="col-md-4">
                        <select className="custom-select"
                                style={{width: '100%'}}
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
                    <label className="col-md-2 col-form-label">Job Title</label>
                    <div className="col-md-4">
                        <input type="text"
                               className="form-control"
                               name="jobTitle"
                               value={this.state.jobTitle}
                               onChange={this.onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Employer</label>
                    <div className="col-md-4">
                        <input type="text"
                               className="form-control"
                               name="employer"
                               value={this.state.employer}
                               onChange={this.onChangeValue}
                        />
                    </div>
                    <label className="col-md-2 col-form-label">Length of Employer</label>
                    <div className="col-md-4">
                        <input type="text"
                               className="form-control"
                               name="lengthOfEmp"
                               value={this.state.lengthOfEmp}
                               onChange={this.onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Industry</label>
                    <div className="col-md-4">
                        <input type="text"
                               className="form-control"
                               name="industry"
                               value={this.state.industry}
                               onChange={this.onChangeValue}
                        />
                    </div>
                    <label className="col-md-2 col-form-label">DOB</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Sex</label>
                    <div className="col-md-4">
                        <input type="number"
                               className="form-control"
                               name="sex"
                               value={this.state.sex}
                               onChange={this.onChangeValue}
                        />
                    </div>
                    <label className="col-md-2 col-form-label">Civil Status</label>
                    <div className="col-md-4">
                        <input type="text"
                               className="form-control"
                               name="civilStatus"
                               value={this.state.civilStatus}
                               onChange={this.onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Citizenship</label>
                    <div className="col-md-4">
                        <input type="text"
                               className="form-control"
                               name="citizenship"
                               value={this.state.citizenship}
                               onChange={this.onChangeValue}
                        />
                    </div>
                    <label className="col-md-2 col-form-label">Address</label>
                    <div className="col-md-4">
                        <input type="text"
                               className="form-control"
                               name="address"
                               value={this.state.address}
                               onChange={this.onChangeValue}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                        <button className="btn btn-primary" onClick={this.onSave}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        data: state.auth.data,
        settings: state.settings.data,
        isFetched: state.settings.isFetched,
    }
}

export default connect(mapStateToProps)(Profiles)