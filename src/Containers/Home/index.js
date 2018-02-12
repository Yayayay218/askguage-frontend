import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../Actions/Creators'
import {Link} from 'react-router-dom'
import Layout from '../App'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLanding: true,
            estate: false,
            mortgage: false
        }
    }

    componentWillReceiveProps(newProps) {

    }

    componentDidMount() {
        const {history} = this.props
        if (this.props.token && this.props.user.role === 0)
            history.push('/my-requests')
        if (this.props.token && this.props.user.role === 1)
            history.push('/customer-requests')
    }

    render() {
        const {history} = this.props
        const {estate, mortgage} = this.state
        return (
            <div className="content">
                <Layout {...this.state}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7" style={{height: '80vh'}}>
                                <div className="left-wrapper">
                                    <div className="txt-1">
                                        growing old
                                    </div>
                                    <div className="txt-2">
                                        The Store Where Generous <br/> Matter More
                                    </div>
                                    <div className="txt-3">
                                        The store where generous deeds buys
                                    </div>
                                    <button className="btn btn-learn">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-5" style={{height: '80vh'}}>
                                <div className="right-wrapper">
                                    <div className="txt-1">
                                        Start your Journey.
                                    </div>
                                    <div className="txt-2">
                                        We will analyze your request, connect you with real estate experts in the area
                                        with their quotes while providing you valuable insights.
                                    </div>
                                    <div className="txt-3">
                                        i’m looking to
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            {
                                                estate ?
                                                    <div className="service-box estate estate-active"
                                                    >
                                                        <label htmlFor="">Buy a new home</label>
                                                    </div>
                                                    :
                                                    <div className="service-box estate"
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
                                                    <div className="service-box mortgage mortgage-active"
                                                         style={{marginRight: 0}}
                                                    >
                                                        <label htmlFor="">Renew / Refinance mortgage</label>
                                                    </div>
                                                    :
                                                    <div className="service-box mortgage"
                                                         style={{marginRight: 0}}
                                                         onClick={() => {
                                                             this.setState({estate: false, mortgage: true})
                                                         }}
                                                    >
                                                        <label htmlFor="">Renew / Refinance mortgage</label>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                    {
                                        estate || mortgage ?
                                            <button className="btn btn-submit"
                                                    onClick={() => {
                                                        this.props.dispatch(Actions.setRequestType(this.state))
                                                        history.push('/create-request')
                                                    }}
                                            >Submit</button>
                                            :
                                            <button className="btn btn-submit"
                                                    disabled={true}
                                                    style={{cursor: 'not-allowed'}}
                                            >Submit</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.data,
        token: state.auth.token,
    }
}

export default connect(mapStateToProps)(Home)