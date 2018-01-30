import React from 'react'

import Config from '../../../../Configs/AppSetting'
import Rating from 'react-rating'
import StarEmpty from '../../../../Assets/images/icons/star-empty.svg'
import StarFull from '../../../../Assets/images/icons/star-full.svg'

function MortgageView({item}) {
    return (
        <div className="bid-details">
            <p>
                Based on your stated Income and liabilities,
                <b> {item.provider.firstName}</b> provided the following quote:
            </p>
            <div className="options">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <p className="title">Mortgage Amount:</p>
                    </div>
                    <div className="col-md-9 col-6">
                        <p className="description">${item.mortgageAmount}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-6">
                        <p className="title">Interest Rate:</p>
                    </div>
                    <div className="col-md-9 col-6">
                        {
                            item.options.map((opt, i) => (
                                <p className="description" key={i}>{<CheckMortgageTerm item={opt.mortgageTerm}/>}
                                    &nbsp;Years {opt.mortgageType === 0 ? 'Variable' : 'Fixed'}
                                    &nbsp;Term Mortgage for {opt.interestRate} %</p>
                            ))
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-6">
                        <p className="title">Amortization:</p>
                    </div>
                    <div className="col-md-9 col-6">
                        {
                            item.options.map((opt, i) => (
                                <p className="description" key={i}>{<CheckArmo item={opt.amortization}/>} Years</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function CheckMortgageTerm({item}) {
    if (item == 0)
        item = 1
    if (item == 1)
        item = 3
    if (item == 2)
        item = 5
    return <span>{item}</span>
}

function CheckArmo({item}) {
    if (item == 0)
        item = 10
    if (item == 1)
        item = 15
    if (item == 2)
        item = 20
    if (item == 3)
        item = 25
    return <span>{item}</span>
}

const BidInfo = ({item, submit, reject}) => {
    console.log(item)
    return (
        <div className="row">
            <div className="col-md-2">
                <img src={Config.URL + `/containers/images/download/${item.provider.avatarUrl}`}
                     alt=""
                     className="provider-avatar"
                />
            </div>
            <div className="col-md-7">
                <div className="provider-info">
                    <p className="intro">Bid from <b>{item.provider.firstName}</b></p>
                    <div className="details">
                        <div style={{display: 'inline'}}>
                                                <span className="rating-count">
                                                    <p style={{marginTop: '3px'}}>3.5</p>
                                                </span>
                            <div style={{display: 'inline-block', position: 'absolute', top: '25px'}}>
                                <Rating
                                    fullSymbol={<img src={StarFull} alt=""/>}
                                    emptySymbol={<img src={StarEmpty} alt=""/>}
                                    fractions={2}
                                    initialRating={3.5}
                                    readonly={true}
                                />
                            </div>
                            <span
                                style={{position: 'absolute', left: '131px'}}>({item.provider.profiles.yearOfExperience}
                                &nbsp;years of experience)</span>
                        </div>
                        <p>{item.provider.profiles.kindOfService == 0 ? 'Estate Agent' : 'Mortgage Advisor'}</p>
                    </div>
                </div>
                {<MortgageView
                    item={item}
                />}
            </div>

            <div className="col-md-3">
                <div className="callback">
                    <p htmlFor="">Select call back preference</p>
                    <div className="row">
                        <div className="col-6">
                            <select className="custom-select"
                            >
                                <option value=""></option>
                                <option value="0">Weekday</option>
                                <option value="1">Weekend</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <select className="custom-select"
                            >
                                <option value=""></option>
                                <option value="0">Morning</option>
                                <option value="1">Afternoon</option>
                                <option value="2">Evening</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-submit">Submit for call back</button>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-reject">Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BidInfo