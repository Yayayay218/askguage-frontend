import React, {Component} from 'react'
import NumberFormat from 'react-number-format'

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

export default class BasicInfo extends Component {
    render() {
        // console.log(this.props)
        const {user, onChange, formFields} = this.props
        const bind = (field) => ({
            value: user[field],
            onChange: (e) => onChange({...user, [field]: e.target.value})
        })
        return (
            <div>
                <div className="form-group row">
                    <Input
                        label="First Name *"
                    >
                        <input type="text" className="form-control"
                               {...bind("firstName")}
                        />
                        {
                            !formFields.firstNameValid && <p className="error-text no-margin">is required</p>
                        }
                    </Input>

                    <Input
                        label="Last Name *"
                    >
                        <input type="text" className="form-control"
                               {...bind("lastName")}
                        />
                        {
                            !formFields.lastNameValid && <p className="error-text no-margin">is required</p>
                        }
                    </Input>
                </div>

                <div className="form-group row">
                    <Input
                        label="Email *"
                    >
                        <input type="text" className="form-control"
                               disabled={true}
                               {...bind("email")}
                        />
                    </Input>

                    <Input
                        label="Phone Number *"
                    >
                        <NumberFormat
                            format="##########"
                            mask="_"
                            className="form-control"
                            onValueChange={(values) => onChange({...user, phoneNumber: values.value})}
                            value={user.phoneNumber}
                        />
                        {
                            !formFields.phoneValid && <p className="error-text no-margin">is required</p>
                        }
                    </Input>
                </div>

                <div className="profile-line"></div>
            </div>
        )
    }
}
