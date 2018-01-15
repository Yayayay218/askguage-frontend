import React, {Component} from 'react'
import IntakeDetails from '../../Intake'
import moment from 'moment'
import {KindOfHome, BooleanType} from "../../Intake/TransferType"

class Intake extends Component {

    render() {
        // console.log(this)
        const {request, isFetched} = this.props
        return (
            <div className="row">
                <div className="col-md-3 col-12">
                    <div className="d-none d-md-block">
                        <div className="navigate">
                            <div className="d-flex flex-column">
                                <div
                                    className="navigate-item"
                                    // onClick={this.goProfile}
                                >Profile
                                </div>
                                <div
                                    className="navigate-item"
                                    // onClick={this.goPreference}
                                >Preference
                                </div>
                                <div
                                    className="navigate-item"
                                    // onClick={this.goInfo}
                                >Info
                                </div>
                                <div
                                    className="navigate-item"
                                    // onClick={this.goFinance}
                                >Finance
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-12">
                    <div style={{marginLeft: '-5px'}}>
                        {
                            isFetched ?
                                <div>
                                    <IntakeDetails
                                        question="What Kind of home are you looking for?"
                                        answer={KindOfHome(request.kindOfHome)}
                                    />
                                    <IntakeDetails
                                        question="Number of Bedroom"
                                        answer={request.numberOfBedRoom}
                                    />
                                    <IntakeDetails
                                        question="Square ft"
                                        answer={request.squareFT}
                                    />
                                    <IntakeDetails
                                        question="Where are you looking for a home?"
                                        answer={request.homeAddress.address}
                                    />
                                    <IntakeDetails
                                        question="Whats your budget?"
                                        answer={request.budget.min + '-' + request.budget.max}
                                    />
                                    <IntakeDetails
                                        question="Do you know if you are qualified for the amount above?"
                                        answer={BooleanType(request.areQualified)}
                                    />
                                    <IntakeDetails
                                        question="Is this a single or joint ownership?"
                                        answer={BooleanType(request.ownership)}
                                    />
                                    <IntakeDetails
                                        question="Occupation Type "
                                        answer={request.occupationType}
                                    />
                                    <IntakeDetails
                                        question="DOB"
                                        answer={moment.utc(request.birthDay).format('MMM Do YY')}
                                    />
                                    <IntakeDetails
                                        question="Canadian Citizen"
                                        answer={BooleanType(request.citizenType)}
                                    />
                                    <IntakeDetails
                                        question="Household Income"
                                        answer={request.houseHold}
                                    />
                                    <IntakeDetails
                                        question="Monthly Liability"
                                        answer={request.monthlyLiability}
                                    />
                                    <IntakeDetails
                                        question="Down Payment Amount"
                                        answer={request.downPayment}
                                    />
                                    <IntakeDetails
                                        question="Net Assets"
                                        answer={request.netAsset}
                                    />
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Intake