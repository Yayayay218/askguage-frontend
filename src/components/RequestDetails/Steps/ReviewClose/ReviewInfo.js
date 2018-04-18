import React, {Component} from 'react'
import axios from 'axios'

import Modal from 'react-modal'

import Config from '../../../../configs/AppSetting'
import Rating from 'react-rating'
import StarEmpty from '../../../../assets/images/icons/star-empty.svg'
import StarFull from '../../../../assets/images/icons/star-full.svg'
import Icon from '../../../../assets/images/avatar.svg'

import Actions from "../../../../actions/Creators";

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

function EstateView({item}) {
    return (
        <div className="bid-details">
            <p>
                Based on your stated Income and liabilities,
                <b> {item.provider.firstName}</b> provided the following quote:
            </p>
            <div className="options">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <p className="title">Commission Fee:</p>
                    </div>
                    <div className="col-md-9 col-6">
                        <p className="description">${item.commissionFee}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-6">
                        <p className="title">Property Type:</p>
                    </div>
                    <div className="col-md-9 col-6">
                        {
                            item.options.map((opt, i) => (
                                <p className="description" key={i}><CheckPropertyType item={opt.propertyType}/></p>
                            ))
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-6">
                        <p className="title">Square Ft:</p>
                    </div>
                    <div className="col-md-9 col-6">
                        {
                            item.options.map((opt, i) => (
                                <p className="description" key={i}>{opt.squareFT}</p>
                            ))
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-6">
                        <p className="title">Price:</p>
                    </div>
                    <div className="col-md-9 col-6">
                        {
                            item.options.map((opt, i) => (
                                <p className="description" key={i}>{opt.price}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function CheckPropertyType({item}) {
    if (item == 0)
        item = 'Detached House'
    if (item == 1)
        item = 'Semi TownHouse'
    if (item == 2)
        item = 'Condo'
    if (item == 3)
        item = 'other'
    return <span>{item}</span>
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

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '830px',
        height: '410px'
    }
};

class ReviewInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isBiding: true,
            isError: false,
            modalIsOpen: false,
            review: {
                comment: '',
                rating: 5,
                reviewerId: props.user.id
            }
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    doSubmit(item, review, isBid) {
        let data = {
            ...review,
            bidId: item.id
        }
        this.setState({modalIsOpen: false});
        axios.post(Config.URL + `/reviews`, data)
            .then((res) => {
                isBid({isBid: true})
            })
    }

    render() {
        const {item, isBid} = this.props
        return (
            <div className="row">
                {
                    !this.props.bidFetched && <div className="loading">Loading&#8230;</div>
                }
                <div className="col-md-2">
                    <img
                        src={item.provider.avatarUrl ? Config.URL + `/containers/images/download/${item.provider.avatarUrl}` : Icon}
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
                                    style={{
                                        position: 'absolute',
                                        left: '131px'
                                    }}>({item.provider.profiles.yearOfExperience}
                                    &nbsp;years of experience)</span>
                            </div>
                            <p>{item.provider.profiles.kindOfService == 0 ? 'Estate Agent' : 'Mortgage Advisor'}</p>
                            <div className='completed-bid'><p style={{paddingTop: '5px'}}>Completed</p></div>
                        </div>
                    </div>
                    {
                        item.provider.profiles.kindOfService == 0 ? <EstateView item={item}/>
                            : <MortgageView
                                item={item}
                            />
                    }
                </div>

                <div className="col-md-3">
                    <div className="callback">
                        <div>
                            {
                                !item.review && <CallBackActions
                                    onClick={this.openModal}
                                />
                            }

                            {
                                item.review && <div>
                                    <p style={{marginBottom: '0'}}>Review</p>
                                    <Rating
                                        fullSymbol={<img src={StarFull} alt=""/>}
                                        emptySymbol={<img src={StarEmpty} alt=""/>}
                                        fractions={2}
                                        initialRating={item.review.rating}
                                        readonly={true}
                                    />
                                    <p className="review-comment">{item.review.comment}</p>
                                </div>
                            }

                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="line"></div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >

                    <div className="container">
                        <div className="review-box">
                            <div className="row">
                                <label htmlFor="" className="col-12">Rate for this service provider</label>
                                <div className="x-icon"
                                     onClick={this.closeModal}
                                ></div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <img src={Config.URL + `/containers/images/download/${item.provider.avatarUrl}`}
                                         alt=""
                                         className="provider-avatar"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Rating
                                        fullSymbol={<img src={StarFull} alt=""/>}
                                        emptySymbol={<img src={StarEmpty} alt=""/>}
                                        fractions={2}
                                        initialRating={this.state.review.rating}
                                        readonly={false}
                                        onChange={(rate) => this.setState({
                                            review: {
                                                ...this.state.review,
                                                rating: rate
                                            }
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '10px'}}>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label style={{fontSize: '0.9375rem'}}>Write your review</label>
                                        <textarea className="form-control" rows="3"
                                                  onChange={(e) => this.setState({
                                                      review: {
                                                          ...this.state.review,
                                                          comment: e.target.value
                                                      }
                                                  })}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '15px'}}>
                                <div className="col-12">
                                    <button className="btn btn-reject"
                                            onClick={this.closeModal}
                                    >Cancel
                                    </button>
                                    <button className="btn btn-submit"
                                            onClick={this.doSubmit.bind(this, item, this.state.review, isBid)}
                                    >Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>

            </div>
        )
    }
}

function CallBackActions({onClick}) {
    return (
        <div className="row">
            <div className="col-12">
                <button className="btn btn-reject"
                        onClick={onClick}
                >Write A Review
                </button>
            </div>
        </div>
    )
}


export default ReviewInfo