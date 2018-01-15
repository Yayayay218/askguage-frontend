import React, {Component} from 'react'

export default class BasicInfo extends Component {
    render() {
        const {user, onChange} = this.props
        const bind = (field) => ({
            value: user[field],
            onChange: (e) => onChange({...user, [field]: e.target.value})
        })
        return (
            <div>
                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">First Name *</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("firstName")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Last Name *</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("lastName")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Email</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       disabled={true}
                                       {...bind("email")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Phone Number</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("phoneNumber")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-line"></div>
            </div>
        )
    }
}
