import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../../actions/Creators'
import Layout from '../../containers/App'


class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            oldPasswordValid: false,
            newPasswordValid: false,
            confirmPasswordValid: false,
            formValid: false,
            formErrors: {oldPassword: '', newPassword: '', confirmPassword: ''},
            error: ''
        }
        if (!props.token)
            props.history.push('/')
        this.doSave = this.doSave.bind(this)
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors
        let oldPasswordValid = this.state.oldPasswordValid;
        let newPasswordValid = this.state.newPasswordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'oldPassword':
                oldPasswordValid = value.length !== 0
                fieldValidationErrors.oldPassword = oldPasswordValid ? '' : 'This field is required'
                break;
            case 'newPassword':
                newPasswordValid = value.length >= 6;
                fieldValidationErrors.newPassword = newPasswordValid ? '' : 'Password must be more than 6 characters'
                break;
            case 'confirmPassword':
                confirmPasswordValid = value.length !== 0 && value === this.state.newPassword;
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : 'Confirm password is invalid'
                break;
            default:
                break;
        }
        this.setState({
            oldPasswordValid: oldPasswordValid,
            newPasswordValid: newPasswordValid,
            confirmPasswordValid: confirmPasswordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.oldPasswordValid && this.state.newPasswordValid && this.state.confirmPasswordValid});
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.token)
            this.props.history.push('/')
        if (newProps.error && newProps.error.message !== "Unexpected end of JSON input")
            this.setState({error: newProps.error})
        if (newProps.error && newProps.error.message === "Unexpected end of JSON input")
            this.props.history.push('/')
    }

    doSave() {
        const {oldPassword, newPassword} = this.state
        let data = {
            oldPassword: oldPassword,
            newPassword: newPassword
        }
        this.props.dispatch(Actions.changePassword(data))
    }

    render() {
        const {isFetching} = this.props.userActions
        const bind = (field) => ({
            value: this.state[field],
            onChange: (e) => this.setState({[field]: e.target.value}, this.validateField(field, e.target.value))
        })
        return (
            <Layout islanding={false}>
                <div className="container create-request-form">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="flip-panel">
                                <div className="request-intro">
                                    <h3>Change Password</h3>
                                </div>
                            </div>
                            <div className="form-group row first-row">
                                <label className="col-md-12 custom-label">Current Password</label>
                                <div className="col-md-12">
                                    <input type="password" className="form-control"
                                           {...bind('oldPassword')}
                                    />
                                    {
                                        this.state.formErrors.oldPassword !== '' &&
                                        <p className="error-text">{this.state.formErrors.oldPassword}</p>
                                    }
                                    {
                                        this.state.error !== '' &&
                                        <p className="error-text">{this.state.error.message}</p>
                                    }
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-12 custom-label">Password</label>
                                <div className="col-md-12">
                                    <input type="password" className="form-control"
                                           {...bind('newPassword')}
                                    />
                                    {
                                        this.state.formErrors.newPassword !== '' &&
                                        <p className="error-text">{this.state.formErrors.newPassword}</p>
                                    }
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-12 custom-label">Confirm Password</label>
                                <div className="col-md-12">
                                    <input type="password" className="form-control"
                                           {...bind('confirmPassword')}
                                    />
                                    {
                                        this.state.formErrors.confirmPassword !== '' &&
                                        <p className="error-text">{this.state.formErrors.confirmPassword}</p>
                                    }
                                </div>
                            </div>
                            {
                                isFetching ? <button className="btn btn-next sign-up m-progress"
                                                     disabled={true}
                                >save
                                </button> : <button className="btn btn-next sign-up"
                                                    onClick={this.doSave}
                                                    disabled={!this.state.formValid}
                                >save
                                </button>
                            }

                        </div>
                    </div>
                </div>

            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.data,
        token: state.auth.token,
        error: state.userActions.error,
        userActions: state.userActions
    }
}

export default connect(mapStateToProps)(ChangePassword)
