import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../../actions/Creators'
import ProfileDetails from '../../components/requestDetails/ProfileDetails'
import PreferenceDetails from '../../components/requestDetails/PreferenceDetails'
import InfoDetails from '../../components/requestDetails/InfoDetails'

class RequestDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 'intake',
            navigate: 'profile'
        }
        this.goIntake = this.goIntake.bind(this)
        this.goInsights = this.goInsights.bind(this)
        this.goExperts = this.goExperts.bind(this)
        this.goReview = this.goReview.bind(this)
        this.goPreference = this.goPreference.bind(this)
        this.goProfile = this.goProfile.bind(this)
        this.goInfo = this.goInfo.bind(this)
        this.goFinance = this.goFinance.bind(this)
    }

    componentDidMount() {
        const {params} = this.props.match
        this.props.dispatch(Actions.getRequestById(params.id))
    }

    goIntake() {
        this.setState({
            screen: 'intake'
        })
    }

    goInsights() {
        this.setState({
            screen: 'insights'
        })
    }

    goExperts() {
        this.setState({
            screen: 'experts'
        })
    }

    goReview() {
        this.setState({
            screen: 'review'
        })
    }

    goProfile() {
        this.setState({
            navigate: 'profile'
        })
    }

    goPreference() {
        this.setState({
            navigate: 'preference'
        })
    }

    goInfo() {
        this.setState({
            navigate: 'info'
        })
    }

    goFinance() {
        this.setState({
            navigate: 'finance'
        })
    }

    renderRequestDetail() {
        if (this.state.navigate === 'profile')
            return (
                <ProfileDetails initData={this.props.requests}/>
            )
        if (this.state.navigate === 'preference')
            return (
                <PreferenceDetails initData={this.props.requests}/>
            )
        if (this.state.navigate === 'info')
            return (
                <InfoDetails initData={this.props.requests} user={this.props.user}/>
            )
    }

    render() {
        console.log(this)
        return (
            <div className="request-details">
                <div className="container-fluid">
                    <div className="d-flex justify-content-end top-wrapper">
                        <label className="label-header">My Request</label>
                        <div className="divider"></div>
                        <label className="mr-auto label-detail">Buy a new house, #233512</label>
                        <label className="status">Status: <strong>Draft</strong></label>
                        <button className="btn btn-submit">Submit Request</button>
                    </div>
                    <div className="container menu-wrapper">
                        <div className="d-flex" style={{marginLeft: '-15px'}}>
                            <div className="menu-item">
                                <label className={this.state.screen === 'intake' ? 'active' : ''}
                                       onClick={this.goIntake}
                                >
                                    Intake</label>
                            </div>
                            <div className="menu-item">
                                <label className={this.state.screen === 'insights' ? 'active' : ''}
                                       onClick={this.goInsights}
                                >
                                    Insights</label>
                            </div>
                            <div className="menu-item">
                                <label className={this.state.screen === 'experts' ? 'active' : ''}
                                       onClick={this.goExperts}
                                >Experts
                                </label>
                            </div>
                            <div className="menu-item">
                                <label className={this.state.screen === 'review' ? 'active' : ''}
                                       onClick={this.goReview}
                                >Review Close
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-line"></div>
                <div className="container"
                     style={this.state.screen === 'intake' ? {display: 'block'} : {display: 'none'}}>
                    <div className="row">
                        <div className="col-sm-3 col-12" style={{paddingLeft: '0'}}>
                            <div className="navigate">
                                <div className="d-flex flex-column">
                                    <div
                                        className={this.state.navigate === 'profile' ? 'navigate-item active' : 'navigate-item'}
                                        onClick={this.goProfile}
                                    >Profile
                                    </div>
                                    <div
                                        className={this.state.navigate === 'preference' ? 'navigate-item active' : 'navigate-item'}
                                        onClick={this.goPreference}
                                    >Preference
                                    </div>
                                    <div
                                        className={this.state.navigate === 'info' ? 'navigate-item active' : 'navigate-item'}
                                        onClick={this.goInfo}
                                    >Info
                                    </div>
                                    <div
                                        className={this.state.navigate === 'finance' ? 'navigate-item active' : 'navigate-item'}
                                        onClick={this.goFinance}
                                    >Finance
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 col-12">
                            {
                                this.props.isFetched ?
                                    this.renderRequestDetail() : <div></div>
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        requests: state.requests.current,
        isFetched: state.requests.detailFetched,
        user: state.auth.data.data
    }
};

export default connect(mapStateToProps)(RequestDetails)