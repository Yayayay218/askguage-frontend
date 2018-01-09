import React, {Component} from 'react';
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import RequestBox from '../../components/MyRequests/RequestBox'
import RequestLoading from '../../components/loading/Request'
import RequestTop from '../../components/loading/RequestTop'
import Layout from '../../containers/App'

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
            mortgage: false
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        let query = 'filter[where][userId]=' + props.user.id + '&filter[order]=createdAt%20DESC'
        this.props.dispatch(Actions.getRequest(query))
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    componentDidMount() {
    }

    componentWillReceiveProps(newProps) {
        const {history} = this.props
        if (!newProps.token)
            history.push('/')
    }

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
                            <button
                                className={user.role === 0 ? 'btn btn-new-request' : 'btn btn-new-request hidden-btn'}
                                onClick={this.openModal}
                            >
                                New Request
                            </button>
                        </div>
                    </div>
                    <div className="profile-line" style={{marginTop: '23px', marginBottom: '14px'}}></div>
                    <div className="container">
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                            ariaHideApp={false}
                        >

                            {/*<button onClick={this.closeModal}>close</button>*/}
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
                </div>
            </Layout>
        )
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    return {
        user: state.auth.data,
        token: state.auth.token,
        requests: state.requests.data,
        isFetched: state.requests.isFetched
    }
};

export default connect(mapStateToProps)(MyRequest)
