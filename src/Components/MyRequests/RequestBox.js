import React, {Component} from 'react'
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Axios from 'axios'
import Config from '../../Configs/AppSetting'

import {Link} from 'react-router-dom'
import moment from 'moment'

class RequestBox extends Component {
    // constructor(props) {
    //     super(props)
    // }

    displayTitle(requests) {
        if (requests.isEstate)
            return (
                <h2>Buy a new home</h2>
            )
        else {
            if (requests.mortgageType === 0)
                return (
                    <h2>Renew Mortgage</h2>
                )
            else
                return (
                    <h2>Refinance Mortgage</h2>
                )
        }
    }

    displayType(requests) {
        if (requests.isEstate)
            return (
                <strong className="user-name">Buy a new home</strong>
            )
        else {
            if (requests.mortgageType === 0)
                return (
                    <strong className="user-name">Renew Mortgage</strong>
                )
            else
                return (
                    <strong className="user-name">Refinance Mortgage</strong>
                )
        }
    }

    remove = (reqId) => {
        let _this = this
        const {user, history} = _this.props
        Axios.post(Config.URL + '/users/removeMatchingRequest', {
            userId: user.id,
            reqId: reqId
        }).then(() => history.push('/'))
            .catch((err) => console.log(err))
    }

    doRemove = (reqId) => {
        confirmAlert({
            title: 'Confirmation',                        // Title dialog
            message: 'Are you sure to remove this request.',               // Message dialog
            confirmLabel: 'Yes',                           // Text button confirm
            cancelLabel: 'No',                             // Text button cancel
            onConfirm: () => this.remove(reqId),    // Action after Confirm
            onCancel: () => {
                return null
            },      // Action after Cancel
        })
    };

    render() {
        const {user, requests} = this.props
        return (
            <div>
                {
                    requests.map((item, key) => {
                        if (user.role === 0)
                            return (
                                <div key={key}>
                                    <div className={user.role === 0 ? 'row customer' : 'row hidden-btn'}
                                         key={item.id + '1'}>
                                        <Link to={`/my-requests/${item.id}`} className="col-sm-12">
                                            <div className="request-item" style={{cursor: 'pointer'}}>
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        {
                                                            this.displayTitle(item)
                                                        }
                                                        <label className="label-header">Posted
                                                            on {moment(item.createdAt).format("MMM Do YY")}</label>
                                                        <div className="d-flex flex-row property">
                                                            <div className="d-flex flex-column col-4">
                                                                <label className="label-header">Property type</label>
                                                                <label className="label-header content">N/A</label>
                                                            </div>
                                                            <div className="d-flex flex-column col-4">
                                                                <label className="label-header">Location</label>
                                                                <label
                                                                    className="label-header content">{item.homeAddress.address}</label>
                                                            </div>
                                                            <div className="d-flex flex-column col-4">
                                                                <label className="label-header">Status</label>
                                                                <label className="label-header content">Open</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {
                                                        (item.bidCount.fromMortgage > 0 || item.bidCount.fromEstate > 0)
                                                        && <div className="col-sm-4 bid">
                                                            <button className="btn btn-bid" style={{cursor: 'pointer'}}>
                                                                {item.bidCount.fromMortgage + item.bidCount.fromEstate}
                                                                &nbsp;bids received
                                                            </button>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="profile-line-customer"></div>
                                    </div>
                                </div>
                            )
                        if (user.role === 1)
                            return (
                                <div className='row provider' key={key}>
                                    <div className="col-sm-12">
                                        <div className="request-item" style={{marginBottom: '0'}}>
                                            <div className="row">
                                                <div className="col-sm-8 request-content">
                                                    {
                                                        this.displayTitle(item)
                                                    }
                                                    <label className="label-header">Posted
                                                        on {moment(item.createdAt).format("MMM Do YY")}</label>
                                                    <p className="content">Ask Gauge has identified you as a
                                                        match for this request and <strong
                                                            className="user-name">{item.user.firstName}</strong> is
                                                        looking to {
                                                            this.displayType(item)
                                                        }
                                                    </p>
                                                    <label className="label-header">Status</label>
                                                    <p className="request-status-open">{item.isBid ? 'Your bid was sent to customer' : 'Open to receive bids'}</p>
                                                </div>

                                                <div className="col-sm-4 request-btn" style={{margin: 'auto 0'}}>
                                                    {
                                                        item.isBid ?
                                                            <button className="btn btn-remove"
                                                                    onClick={() => this.props.history.push(`/customer-requests/${item.id}`, {_bid: item})}
                                                            >View your bid
                                                            </button>
                                                            : <div>
                                                                <button className="btn btn-place-bid"
                                                                        onClick={() => this.props.history.push(`/customer-requests/${item.id}`, {_bid: item})}
                                                                >Place a bid
                                                                </button>
                                                                <button className="btn btn-remove"
                                                                        onClick={this.doRemove.bind(this, item.id)}
                                                                >Remove
                                                                </button>
                                                            </div>

                                                    }
                                                    {/*<button className="btn btn-place-bid"*/}
                                                    {/*onClick={() => this.props.history.push(`/customer-requests/${item.id}`)}*/}
                                                    {/*>Place a bid*/}
                                                    {/*</button>*/}
                                                    {/*<button className="btn btn-remove"*/}
                                                    {/*onClick={this.doRemove.bind(this, item.id)}*/}
                                                    {/*>Remove*/}
                                                    {/*</button>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-line-provider"></div>
                                </div>
                            )
                    })
                }
            </div>
        )
    }
}

export default RequestBox