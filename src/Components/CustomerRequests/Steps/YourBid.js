import React, {Component} from 'react'
import Actions from '../../../Actions/Creators'
import {connect} from 'react-redux'
import Autocomplete from 'react-google-autocomplete'
import NumberFormat from 'react-number-format';

class YourBid extends Component {
    constructor(props) {
        super(props)
        this.addMoreOption = this.addMoreOption.bind(this)
        this.bindOption = this.bindOption.bind(this)
        this.doBid = this.doBid.bind(this)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.bids.isFetched)
            this.props.history.push('/')
        if (newProps.bids.error)
            this.setState({error: true})
    }

    addMoreOption() {
        const {user, _bid, onChange} = this.props
        let _options = _bid.options.push(user.profiles.kindOfService == 1 ?
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
        onChange({
            ..._bid,
            _options
        })
    }

    bindOption = (index, field) => (e) => {
        const {onChange} = this.props
        const {options} = this.props._bid
        options[index][field] = e.target.value
        onChange({...this.props._bid, options})
    }

    doBid = () => {
        const {user, request, _bid} = this.props
        // const {bid} = this.state
        let data = {
            ..._bid,
            providerId: user.id,
            requestId: request.id
        }
        this.props.dispatch(Actions.bidRequest(data))
    }

    render() {
        const {user, _bid, onChange} = this.props
        const {state} = this.props.history.location
        const bind = (field) => ({
            value: _bid[field],
            onChange: (e) => onChange({..._bid, [field]: e.target.value})
        })
        return (
            <div className="bid-form">
                <div className="row">
                    <div className="col-12">
                        <h4 style={{marginBottom: '30px'}}>
                            Based on customer's request, please provide your recommendation.
                        </h4>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-3 m-auto">
                                <label htmlFor=""
                                       className="col-form-label">{user.profiles.kindOfService == 0 ? 'Realtor Commission Fee' : 'Mortgage Amount'}</label>
                            </div>
                            <div className="col-md-9">
                                {
                                    user.profiles.kindOfService == 0 ?
                                        <NumberFormat
                                            thousandSeparator={true}
                                            suffix={'%'}
                                            value={2.5}
                                            className="form-control"
                                            disabled={true}
                                        />
                                        : <input type="text" className="form-control"
                                                 {...bind('mortgageAmount')}
                                        />
                                }

                            </div>
                        </div>
                    </div>
                </div>
                {
                    _bid.options.map((item, index) => {
                        return (
                            <RenderOption
                                serviceType={user.profiles.kindOfService}
                                item={item}
                                index={index}
                                bid={_bid}
                                key={index}
                                bindOption={this.bindOption}
                                _this={this}
                            />
                        )
                    })
                }
                {
                    _bid.error && <div className="col-12 offset-md-3">
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

function RenderOption({item, index, bid, bindOption, serviceType, _this}) {
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
                                <NumberFormat
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    className="form-control"
                                    value={bid.options[index].price}
                                    onValueChange={(values) => {
                                        const {options} = _this.props._bid
                                        options[index]["price"] = values.value
                                        _this.props.onChange({
                                            ..._this.props._bid,
                                            options
                                        })
                                    }}
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
                                           defaultChecked={item.mortgageType == 0}
                                           onClick={bindOption(index, 'mortgageType')}
                                    />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description custom-label">Variable</span>
                                </label>
                                <label className="col-md-6 custom-control custom-radio">
                                    <input type="radio" className="custom-control-input"
                                           value='1'
                                           name={index}
                                           defaultChecked={item.mortgageType == 1}
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