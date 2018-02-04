import React, {Component} from 'react'
import Actions from '../../../Actions/Creators'
import {connect} from 'react-redux'
import Autocomplete from 'react-google-autocomplete'

class YourBid extends Component {
    constructor(props) {
        super(props)
        const {_bid} = props.history.location.state
        this.state = {
            bid: {
                mortgageAmount: _bid.bidAmount || '',
                options: _bid.bidOptions ? _bid.bidOptions : props.user.profiles.kindOfService == 1 ? [{
                    mortgageType: 0,
                    mortgageTerm: '',
                    interestRate: '',
                    amortization: ''
                }] : [{
                    area: '',
                    propertyType: '',
                    squareFT: '',
                    price: ''
                }],
                commissionFee: _bid.bidCommission || '',
                comment: ''
            },
            error: false
        }
        this.addMoreOption = this.addMoreOption.bind(this)
        this.bindOption = this.bindOption.bind(this)
        this.bindAddress = this.bindAddress.bind(this)
        this.doBid = this.doBid.bind(this)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.bids.isFetched)
            this.props.history.push('/')
        if (newProps.bids.error)
            this.setState({error: true})
    }

    addMoreOption() {
        const {user} = this.props
        const {bid} = this.state
        let _options = this.state.bid.options.push(user.profiles.kindOfService == 1 ?
            {
                mortgageType: '',
                mortgageTerm: '',
                interestRate: '',
                amortization: ''
            } : {
                area: '',
                propertyType: '',
                squareFT: '',
                price: ''
            }
        )
        this.setState({
            bid: {
                ...bid,
                _options
            }
        })
    }

    bindOption = (index, field) => (e) => {
        const {options} = this.state.bid
        options[index][field] = e.target.value

        this.setState({
            bid: {
                ...this.state.bid,
                options
            }
        });
    }

    bindAddress = (index, field, place) => (e) => {
        console.log(place)
        const {options} = this.state.bid
        options[index][field] = place

        this.setState({
            bid: {
                ...this.state.bid,
                options
            }
        });
    }

    doBid = () => {
        const {user, request} = this.props
        const {bid} = this.state
        let data = {
            ...bid,
            providerId: user.id,
            requestId: request.id
        }
        this.props.dispatch(Actions.bidRequest(data))
    }

    render() {
        const {user} = this.props
        const {state} = this.props.history.location
        const {bid} = this.state
        const bind = (field) => ({
            value: bid[field],
            onChange: (e) => this.setState({
                bid: {
                    ...bid,
                    [field]: e.target.value
                }
            })
        })
        return (
            <div className="bid-form">
                <div className="form-group row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-3 m-auto">
                                <label htmlFor=""
                                       className="col-form-label">{user.profiles.kindOfService == 0 ? 'Commission Fee' : 'Mortgage Amount'}</label>
                            </div>
                            <div className="col-md-9">
                                <input type="text" className="form-control"
                                       {...bind(user.profiles.kindOfService == 0 ? 'commissionFee' : 'mortgageAmount')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    bid.options.map((item, index) => {
                        return (
                            <RenderOption
                                serviceType={user.profiles.kindOfService}
                                item={item}
                                index={index}
                                bid={bid}
                                key={index}
                                bindOption={this.bindOption}
                                bindAddress={this.bindAddress}
                            />
                        )
                    })
                }
                {
                    this.state.error && <div className="col-12 offset-md-3">
                        <p style={{color: 'red'}}>Cannot Bid</p>
                    </div>
                }
                {
                    typeof state === 'undefined' || !state._bid.isBid && <div className="form-group row">
                        <div className="col-md-9 offset-md-3">
                            <button className="btn btn-add" onClick={this.addMoreOption}>Add more options</button>
                            <button className="btn btn-submit" onClick={this.doBid}>Submit the bid</button>
                        </div>
                    </div>
                }

                {this.props.bids.isFetching && <div className="loading">Loading&#8230;</div>}
            </div>
        )
    }
}

function RenderOption({item, index, bid, bindOption, serviceType, bindAddress}) {
    if (serviceType == 0)
        return (
            <div>
                <h3 style={{marginLeft: '-2px'}}>Option {index + 1}</h3>

                <div className="form-group row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-3 m-auto">
                                <label htmlFor="" className="col-form-label">Property Type</label>
                            </div>
                            <div className="col-md-9">
                                <select className="custom-select"
                                        onChange={bindOption(index, 'propertyType')}
                                        value={bid.options[index].propertyType}
                                >
                                    <option value=""></option>
                                    <option value="0">Detached House</option>
                                    <option value="1">Semi TownHouse</option>
                                    <option value="2">Condo Apartment</option>
                                    <option value="3">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-3 m-auto">
                                <label htmlFor="" className="col-form-label">Square Feet</label>
                            </div>
                            <div className="col-md-9">
                                <input type="text" className="form-control"
                                       onChange={bindOption(index, 'squareFT')}
                                       value={bid.options[index].squareFT}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-3 m-auto">
                                <label htmlFor="" className="col-form-label">Price</label>
                            </div>
                            <div className="col-md-9">
                                <input type="text" className="form-control"
                                       onChange={bindOption(index, 'price')}
                                       value={bid.options[index].price}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    return (
        <div>
            <h3 style={{marginLeft: '-2px'}}>Option {index + 1}</h3>
            <div className="form-group row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="" className="col-form-label">Mortgage Type</label>
                        </div>
                        <div className="col-md-9">
                            <div style={{display: 'inline-flex', marginTop: '4px'}}>
                                <label className="col-md-6 custom-control custom-radio">
                                    <input type="radio" className="custom-control-input"
                                           value='0'
                                           name={index}
                                           defaultChecked={item.mortgageType === 0}
                                           onClick={bindOption(index, 'mortgageType')}
                                    />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description custom-label">Variable</span>
                                </label>
                                <label className="col-md-6 custom-control custom-radio">
                                    <input type="radio" className="custom-control-input"
                                           value='1'
                                           name={index}
                                           defaultChecked={item.mortgageType === 1}
                                           onClick={bindOption(index, 'mortgageType')}
                                    />
                                    <span className="custom-control-indicator"></span>
                                    <span
                                        className="custom-control-description custom-label">Fixed</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-3 m-auto">
                            <label htmlFor="" className="col-form-label">Mortgage Term</label>
                        </div>
                        <div className="col-md-9">
                            <select className="custom-select"
                                    onChange={bindOption(index, 'mortgageTerm')}
                                    value={bid.options[index].mortgageTerm}
                            >
                                <option value=""></option>
                                <option value="0">1 Year</option>
                                <option value="1">3 Years</option>
                                <option value="2">5 Years</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-3 m-auto">
                            <label htmlFor="" className="col-form-label">Interest Rate</label>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="form-control"
                                   onChange={bindOption(index, 'interestRate')}
                                   value={bid.options[index].interestRate}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-3 m-auto">
                            <label htmlFor="" className="col-form-label">Amortization</label>
                        </div>
                        <div className="col-md-9">
                            <select className="custom-select"
                                    onChange={bindOption(index, 'amortization')}
                                    value={bid.options[index].amortization}
                            >
                                <option value=""></option>
                                <option value="0">10 Years</option>
                                <option value="1">15 Years</option>
                                <option value="2">20 Years</option>
                                <option value="3">25 Years</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        bids: state.bids
    }
}

export default connect(mapStateToProps)(YourBid)