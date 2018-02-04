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
            user: props.user.profiles ? props.user : props.user.role === 0 ? {
                ...props.user,
                lastName: '',
                profiles: {
                    languages: [0],
                    optIn: '',
                    jobTitle: '',
                    employer: '',
                    lengthOfEmployment: '',
                    industry: '',
                    dob: moment(),
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
                lastName: '',
                profiles: {
                    languages: [0],
                    optIn: '',
                    jobTitle: '',
                    employer: '',
                    lengthOfEmployment: '',
                    industry: '',
                    dob: moment(),
                    sex: '',
                    civilStatus: '',
                    citizenship: '',
                    userAddress: {
                        address: '',
                        lat: '',
                        lng: ''
                    },
                    kindOfService: '',
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
            isUploading: false
        }
        this.doSave = this.doSave.bind(this)
        this.onChangeImage = this.onChangeImage.bind(this)
        if (!props.token)
            props.history.push('/')
    }

    componentDidMount() {
        // this.props.dispatch(Actions.getUser(this.props.user.id))
    }

    componentWillReceiveProps(newProps) {
        if (newProps.isPosted && this.props.user.role === 0) {
            this.props.history.push('/my-requests')
        }

        if (newProps.isPosted && this.props.user.role === 1) {
            this.props.history.push('/customer-requests')
        }
    }

    doSave() {
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
    }

    onChangeImage(file) {
        this.setState({file})
    }

    render() {
        const {user, isPosting} = this.state
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
                        />
                        {user.role === 1 && (
                            <ProviderInfo
                                user={user}
                                onChange={(user) => this.setState({user})}
                            />
                        )}

                        <AdvanceInfo
                            user={user}
                            onChange={(user) => this.setState({user})}
                            onChangeLanguage={onChangeLanguage}
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