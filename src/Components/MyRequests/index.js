import React, {Component} from 'react';
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Actions from '../../Actions/Creators'
import RequestBox from '../MyRequests/RequestBox'
import RequestLoading from '../Loading/Request'
import RequestTop from '../Loading/RequestTop'
import Layout from '../../Containers/App'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class MyRequest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
            estate: false,
            mortgage: false,
            requestStatus: ''
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        console.log(props)
        if (props.user.role == 1 && !props.user.profiles.languages)
            props.history.push('/my-profiles')
        if (props.user.role == 0 && !props.user.profiles)
            props.history.push('/my-profiles')
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    componentDidMount() {
        if (this.props.user.role === 0 && this.props.user.profiles) {
            let query = 'filter[where][userId]=' + this.props.user.id + '&filter[order]=createdAt%20DESC'
            this.props.dispatch(Actions.getRequest(query))
        }

        if (this.props.user.role === 1 && this.props.user.profiles) {
            let subQuery = this.props.user.profiles.kindOfService === 0 ? '&filter[where][isEstate]=true' : ''
            let query = 'userId=' + this.props.user.id +
                '&filter[order]=createdAt%20DESC&filter[include]=user' + subQuery
            this.props.dispatch(Actions.matchRequest(query))
        }
    }

    componentWillReceiveProps(newProps) {
        const {history} = this.props
        let query = 'filter[where][userId]=' + this.props.user.id + '&filter[order]=createdAt%20DESC'

        if (this.props.isPosted !== newProps.isPosted) {
            this.props.dispatch(Actions.getRequest(query))
        }
        if (!newProps.token)
            history.push('/')
    }

    // componentWillUpdate(newsProps, newState) {
    //     let subQuery = this.props.user.profiles.kindOfService === 0 ? '&filter[where][isEstate]=true' : ''
    //     let query = ''
    //     if(newState.requestStatus !== this.state.requestStatus && this.props.user.role === 1) {
    //         if(newState.requestStatus == 0) {
    //             query = 'userId=' + this.props.user.id +
    //                 `&filter[order]=createdAt%20DESC&filter[include]=user&filter[where][and][0][status]=${newState.requestStatus}&filter[where][and][1][isBid]=false` + subQuery
    //         }
    //         if(newState.requestStatus == 1) {
    //             query = 'userId=' + this.props.user.id +
    //                 `&filter[order]=createdAt%20DESC&filter[include]=user&filter[where][bidStatus]=0` + subQuery
    //         }
    //         this.props.dispatch(Actions.matchRequest(query))
    //     }
    // }

    render() {
        const {user, history} = this.props
        const {estate, mortgage} = this.state
        let loading = [];
        for (let i = 0; i < 7; i++)
            loading.push(<RequestLoading key={i}/>)
        if (!this.props.isFetched)
            return (
                <div>
                    <RequestTop/>
                    {loading}
                </div>
            )
        return (
            <Layout isLanding={false}>
                <div className="my-request">
                    <div className="container-fluid">
                        <div className="top-wrapper">
                            <h1>{
                                user.role === 0 ? 'My Request' : 'Customer Requests'
                            }
                            </h1>
                            {
                                user.role === 1 &&
                                <select className="custom-select" style={{marginLeft: '15px'}}
                                        value={this.state.requestStatus}
                                        onChange={(e) => this.setState({requestStatus: e.target.value})}
                                >
                                    <option value="">---Select Status---</option>
                                    <option value="0">Open</option>
                                    <option value="1">Sent</option>
                                    <option value="2">Completed</option>
                                    <option value="3">Rejected</option>
                                    <option value="4">Selected</option>
                                    <option value="5">Closed</option>
                                </select>

                            }
                            <button
                                className={user.role === 0 ? 'btn btn-new-request' : 'btn btn-new-request hidden-btn'}
                                onClick={this.openModal}
                            >
                                New Request
                            </button>
                        </div>
                    </div>
                    <div className="profile-line" style={{marginTop: '23px', marginBottom: '14px'}}></div>
                    {user.role === 0 && (
                        <div className="container">
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                                ariaHideApp={false}
                            >

                                <div className="container">
                                    <div className="create-request-form">
                                        <div className="row">
                                            <label htmlFor="" className="col-12">Im looking to</label>
                                            <div className="col-6">
                                                {
                                                    estate ?
                                                        <div className="service-box detached detached-active"
                                                        >
                                                            <label htmlFor="">Buy a new home</label>
                                                        </div>
                                                        :
                                                        <div className="service-box detached"
                                                             onClick={() => {
                                                                 this.setState({estate: true, mortgage: false})
                                                             }}
                                                        >
                                                            <label htmlFor="">Buy a new home</label>
                                                        </div>
                                                }
                                            </div>
                                            <div className="col-6">
                                                {
                                                    mortgage ?
                                                        <div className="service-box other other-active"
                                                             style={{marginRight: 0}}
                                                        >
                                                            <label htmlFor="">Renew / Refinance mortgage</label>
                                                        </div>
                                                        :
                                                        <div className="service-box other"
                                                             style={{marginRight: 0}}
                                                             onClick={() => {
                                                                 this.setState({estate: false, mortgage: true})
                                                             }}
                                                        >
                                                            <label htmlFor="">Renew / Refinance mortgage</label>
                                                        </div>
                                                }
                                            </div>
                                            <div className="col-12">
                                                {
                                                    estate || mortgage ?
                                                        <button className="btn btn-next"
                                                                onClick={() => {
                                                                    this.props.dispatch(Actions.setRequestType(this.state))
                                                                    history.push('/create-request')
                                                                }}
                                                                style={{marginTop: 0}}
                                                        >Submit</button>
                                                        :
                                                        <button className="btn btn-next"
                                                                disabled={true}
                                                                style={{cursor: 'not-allowed', marginTop: 0}}

                                                        >Submit</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                            <RequestBox {...this.props}/>
                        </div>
                    )}
                    {user.role === 1 && (
                        <div className="container">
                            {
                                user.isApprove == 0 &&
                                <p>
                                    Thank you for signing up and completing your profile with Ask Gauge. Your
                                    professional verification is pending, once verification is complete and approved you
                                    will start to receve requests.
                                    <br/>
                                    <br/>
                                    Thank you,
                                    <br/>
                                    Ask Gauge Team.
                                </p>
                            }
                            <RequestBox
                                {...this.props}
                                requestStatus={this.state.requestStatus}
                            />
                        </div>
                    )}
                </div>
            </Layout>
        )
    }
}

// Maps state from Store to props
const mapStateToProps = (state) => {
    return {
        user: state.auth.data,
        token: state.auth.token,
        requests: state.requests.data,
        isFetched: state.requests.isFetched,
        isPosted: state.requests.isPosted
    }
};

export default connect(mapStateToProps)(MyRequest)
