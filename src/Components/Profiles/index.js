import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../../Actions/Creators'
import Layout from '../../Containers/App'
import BasicInfo from './BasicInfo'
import AdvanceInfo from './AdvanceInfo'
import ProviderInfo from './ProviderInfo'
import UploadImage from '../UploadImage'
import {uploadFile} from '../../Services/UploadService'
import moment from 'moment'

class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: props.user.profiles,
            user: (props.user.profiles && props.user.profiles.languages) ? props.user : props.user.role === 0 ? {
                ...props.user,
                lastName: props.user.lastName || '',
                profiles: {
                    languages: [0],
                    optIn: 1,
                    jobTitle: '',
                    employer: '',
                    lengthOfEmployment: '',
                    industry: '',
                    dob: '',
                    sex: '',
                    civilStatus: '',
                    citizenship: '',
                    userAddress: {
                        address: '',
                        lat: '',
                        lng: ''
                    }
                },
            } : {
                ...props.user,
                lastName: props.user.lastName || '',
                profiles: {
                    languages: [0],
                    optIn: 1,
                    jobTitle: '',
                    employer: '',
                    lengthOfEmployment: '',
                    industry: '',
                    dob: '',
                    sex: '',
                    civilStatus: '',
                    citizenship: '',
                    userAddress: {
                        address: '',
                        lat: '',
                        lng: ''
                    },
                    kindOfService: props.user.profiles.kindOfService || -1,
                    businessName: '',
                    website: '',
                    businessAddress: {
                        address: '',
                        lat: '',
                        lng: ''
                    },
                    businessEmail: '',
                    businessPhoneNumber: '',
                    brokerageName: '',
                    brokerageAddress: {
                        address: '',
                        lat: '',
                        lng: ''
                    },
                    brokeragePhoneNumber: '',
                    bank: '',
                    lenders: '',
                    yearOfExperience: '',
                    licence: '',
                    areMobile: '',
                    provideService: '',
                },
            },
            file: [],
            isUploading: false,
            basicInfoValid: {
                lastNameValid: true,
                firstNameValid: true,
                phoneValid: true
            },
            basicValid: false,
            advanceValid: false,
            advanceInfoValid: {
                addressValid: true,
                lengthOfEmpValid: true
            },
            providerValid: false,
            providerInfoValid: {
                businessNameValid: true,
                websiteValid: true,
                businessAddressValid: true,
                businessEmailValid: true,
                businessPhoneValid: true
            }
        }
        this.doSave = this.doSave.bind(this)
        this.onChangeImage = this.onChangeImage.bind(this)
        this.checkBasicInfoValid = this.checkBasicInfoValid.bind(this)
        this.checkAdvanceInfoValid = this.checkAdvanceInfoValid.bind(this)

        if (!props.token)
            props.history.push('/')
    }

    componentDidMount() {
    }

    responseFacebook = (response) => {
        this.props.dispatch(Actions.loginFacebook({accessToken: response.accessToken}))
    }

    componentWillReceiveProps(newProps) {
        if (newProps.isPosted && this.props.user.role === 0) {
            this.props.history.push('/my-requests')
        }

        if (newProps.isPosted && this.props.user.role === 1) {
            this.props.history.push('/customer-requests')
        }

        if (!newProps.token)
            this.props.history.push('/')
    }

    checkBasicInfoValid(info) {
        let firstNameValid = '';
        let lastNameValid = '';
        let phoneNumberValid = ''
        Object.entries(info).map(obj => {
            switch (obj[0]) {
                case 'firstName':
                    firstNameValid = obj[1] !== ''
                    break
                case 'lastName':
                    lastNameValid = obj[1] !== ''
                    break
                case 'phoneNumber':
                    phoneNumberValid = obj[1] !== ''
            }
        })
        this.setState({
            basicInfoValid: {
                firstNameValid: firstNameValid,
                lastNameValid: lastNameValid,
                phoneValid: phoneNumberValid
            }
        }, () => {
            this.setState({
                basicValid: this.state.basicInfoValid.firstNameValid && this.state.basicInfoValid.lastNameValid && this.state.basicInfoValid.phoneValid
            })
        })
    }

    checkAdvanceInfoValid(info) {
        let addressValid = '';
        let lengthOfEmpValid = '';
        Object.entries(info).map(obj => {
            switch (obj[0]) {
                case 'address':
                    addressValid = obj[1] !== ''
                    break
                case 'lengthOfEmployment':
                    lengthOfEmpValid = obj[1] !== ''
            }
        })
        this.setState({
            advanceInfoValid: {
                addressValid: addressValid,
                lengthOfEmpValid: lengthOfEmpValid,
            }
        }, () => {
            this.setState({
                advanceValid: this.state.advanceInfoValid.addressValid && this.state.basicInfoValid.lastNameValid && this.state.advanceInfoValid.lengthOfEmpValid
            })
        })
    }

    checkProviderInfoValid(info) {
        let businessNameValid = true;
        let websiteValid = true
        let businessAddressValid = true
        let businessEmailValid = true
        let businessPhoneValid = true

        Object.entries(info).map(obj => {
            switch (obj[0]) {
                case 'businessName':
                    businessNameValid = obj[1] !== ''
                    break
                case 'website':
                    websiteValid = obj[1] !== ''
                    break
                case 'businessAddress':
                    businessAddressValid = obj[1] !== ''
                    break
                case 'businessEmail':
                    businessEmailValid = obj[1] !== ''
                    break
                case 'businessPhone':
                    businessPhoneValid = obj[1] !== ''
            }
        })

        this.setState({
            providerInfoValid: {
                businessNameValid: businessNameValid,
                websiteValid: websiteValid,
                businessAddressValid: businessAddressValid,
                businessEmailValid: businessEmailValid,
                businessPhoneValid: businessPhoneValid
            }
        }, () => {
            this.setState({
                providerValid: this.state.providerInfoValid.businessNameValid && this.state.providerInfoValid.websiteValid
                && this.state.providerInfoValid.businessAddressValid && this.state.providerInfoValid.businessEmailValid && this.state.providerInfoValid.businessPhoneValid
            })
        })
    }

    doSave() {
        // const {basicValid, advanceValid} = this.state
        // const {lastName, firstName, phoneNumber} = this.state.user
        // const {userAddress, lengthOfEmployment} = this.state.user.profiles
        // let basicInfo = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     phoneNumber: phoneNumber
        // }
        // let advanceInfo = {
        //     address: userAddress.address,
        //     lengthOfEmployment: lengthOfEmployment
        // }
        // if (!basicValid || !advanceValid) {
        //     this.checkBasicInfoValid(basicInfo)
        //     this.checkAdvanceInfoValid(advanceInfo)
        // }
        // else {
        this.setState({isUploading: true})
        uploadFile(this.state.file)
            .then(params => {
                this.props.dispatch(Actions.putProfile({
                    id: this.props.user.id,
                    user: {
                        firstName: this.state.user.firstName,
                        lastName: this.state.user.lastName,
                        phoneNumber: this.state.user.phoneNumber,
                        profiles: {
                            ...this.state.user.profiles,
                            dob: moment.utc(this.state.user.profiles.dob).format()
                        },
                        avatarUrl: params.avatarUrl
                    }
                }))
            })
            .catch(err => console.log(err))
        // }
    }

    onChangeImage(file) {
        this.setState({file})
    }

    render() {
        const {user, isPosting, basicInfoValid, advanceInfoValid} = this.state
        // console.log('-------------', this)

        const {lastName, firstName, phoneNumber} = this.state.user
        const {userAddress, lengthOfEmployment} = this.state.user.profiles
        let onChangeLanguage = (e) => {
            if (user.profiles.languages.indexOf(e.target.value) === -1) {
                let newLanguages = user.profiles.languages.concat([e.target.value])
                this.setState({
                    user: {
                        ...user,
                        profiles: {
                            ...user.profiles,
                            languages: [...newLanguages]
                        }
                    }
                })
            }
            else {
                user.profiles.languages = user.profiles.languages.filter(item => item !== e.target.value)
                this.setState({user})
            }
        }
        return (
            <Layout islanding={false}>
                <div className="container user-profile">
                    <div className="profile-header">
                        <h1 className="row justify-content-center">Please fill in the form below to
                            complete <br/> your profile as
                            a {this.props.user.role === 0 ? 'customer' : 'service provider'}
                        </h1>
                    </div>

                    <div className="login-form">
                        <div className="form-group row">
                            <div className="col-md-6 col-12">
                                <div className="row">
                                    <div className="col-md-8 col-12 offset-md-4">
                                        <UploadImage
                                            file={this.state.file}
                                            onChange={this.onChangeImage}
                                            fileName={user.avatarUrl}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BasicInfo
                            user={user}
                            onChange={(user) => this.setState({user})}
                            formFields={basicInfoValid}

                        />
                        {user.role === 1 && (
                            <ProviderInfo
                                user={user}
                                onChange={(user) => this.setState({user})}
                                disabled={this.state.disabled}
                            />
                        )}

                        <AdvanceInfo
                            user={user}
                            onChange={(user) => this.setState({user})}
                            onChangeLanguage={onChangeLanguage}
                            formFields={advanceInfoValid}
                        />
                        <div className="profile-line"></div>

                        <div className="form-group row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-8 col-12 offset-md-4">
                                        {
                                            isPosting ?
                                                <button className="btn btn-save m-progress">Save</button>
                                                :
                                                <button className="btn btn-save" onClick={this.doSave}>Save</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isUploading && <div className="loading">Loading&#8230;</div>}
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.data,
        token: state.auth.token,
        isPosted: state.auth.isPosted,
        isPosting: state.auth.isPosting
    }
}

export default connect(mapStateToProps)(Profiles)
