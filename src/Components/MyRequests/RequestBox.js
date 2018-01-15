import React, {Component} from 'react'
// import HomeBuyer, {Home} from '../MyRequestFields/HomeBuyer'
// import PropertyType from '../MyRequestFields/PropertyType'
// import Status from '../MyRequestFields/Status'
import {Link} from 'react-router-dom'
import moment from 'moment'

class RequestBox extends Component {
    constructor(props) {
        super(props)
    }

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

    render() {
        const {user, requests} = this.props
        return (
            <div>
                {
                    requests.map((item, key) => {
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
                                                    {/*<div className="col-sm-2">*/}
                                                    {/*<HomeBuyer source={item.profile.lookingTo}/>*/}
                                                    {/*<label className="label-header">Posted on Oct, 17, 2017</label>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="col-sm-2 offset-sm-8">*/}
                                                    {/*<button className="btn btn-bid" style={{cursor: 'pointer'}}>5 bids*/}
                                                    {/*received*/}
                                                    {/*</button>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="col-sm-2 col-4">*/}
                                                    {/*<div className="d-flex flex-column">*/}
                                                    {/*<label className="label-header">Property type</label>*/}
                                                    {/*<PropertyType source={item.preference.propertyType}/>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="col-sm-2 col-4">*/}
                                                    {/*<div className="d-flex flex-column">*/}
                                                    {/*<label className="label-header">Location</label>*/}
                                                    {/*<label*/}
                                                    {/*className="label-header content">{item.preference.whereBuy}</label>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="col-sm-2 col-4">*/}
                                                    {/*<div className="d-flex flex-column">*/}
                                                    {/*<label className="label-header">Status</label>*/}
                                                    {/*<Status source={item.status}/>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                </div>
                                                {/*<div className="col-sm-4 bid">*/}
                                                    {/*<button className="btn btn-bid" style={{cursor: 'pointer'}}>5 bids*/}
                                                        {/*received*/}
                                                    {/*</button>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="profile-line-customer"></div>
                                </div>

                                {/*<div className={user.role == 1 ? 'row provider' : 'row hidden-btn'} key={item._id}>*/}
                                {/*<div className="col-sm-12">*/}
                                {/*<div className="request-item" style={{marginBottom: '0'}}>*/}
                                {/*<div className="row">*/}
                                {/*<div className="col-sm-8 request-content">*/}
                                {/*<HomeBuyer source={item.profile.lookingTo}/>*/}
                                {/*<label className="label-header">Posted on Oct, 17, 2017</label>*/}
                                {/*<p className="content">Ask Gauge has identified you as a*/}
                                {/*match for this request and <strong*/}
                                {/*className="user-name">{item.user.firstName}</strong> is*/}
                                {/*looking*/}
                                {/*to <Home source={item.profile.lookingTo}/>*/}
                                {/*</p>*/}
                                {/*<label className="label-header">Status</label>*/}
                                {/*<p className="request-status-open">Open to receive bids</p>*/}
                                {/*</div>*/}

                                {/*<div className="col-sm-4 request-btn" style={{margin: 'auto 0'}}>*/}
                                {/*<button className="btn btn-place-bid">Place a bid</button>*/}
                                {/*<button className="btn btn-remove">Remove</button>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="profile-line-provider"></div>*/}
                                {/*</div>*/}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default RequestBox