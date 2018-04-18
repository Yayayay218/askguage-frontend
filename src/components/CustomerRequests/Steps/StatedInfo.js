import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'
import {BooleanType} from '../../RequestDetails/Intake/TransferType'
import NumberFormat from 'react-number-format';
import {estimateAfford} from '../../../Utils/Calculate'

class StatedInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            afford: 0
        }
    }
    componentDidMount() {
        const {downPayment, houseHold, monthlyLiability} = this.props.request
        estimateAfford(houseHold, monthlyLiability, downPayment)
            .then(res => this.setState({afford: res}))
    }

    render() {
        // console.log(estimateAfford(100000, 400, 70000))

        const {user, request} = this.props
        return (
            <div>
                {
                    request.isEstate &&
                    <div>
                        <div className="row intake-details">
                            <div className="col-md-6 col-7 question">
                                <label htmlFor="">Budget (Min - Max)</label>
                            </div>
                            <div className="col-md-6 col-5 answer">
                                <label htmlFor="">
                                    <NumberFormat
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                        value={request.budget.min}
                                    />
                                    <span> to </span>
                                    <NumberFormat
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                        value={request.budget.max}
                                    />
                                </label>

                            </div>
                            <div className="profile-line"></div>
                        </div>
                        <Intake
                            question="Do you know if you are qualified for the amount above?"
                            answer={BooleanType(request.areQualified)}
                        />
                        <Intake
                            question="Down Payment"
                            answer={request.downPayment}
                            isCurrency={true}
                        />
                    </div>

                }

                {
                    (user.profiles.kindOfService == 1 || user.profiles.kindOfService == 4)
                    &&
                    <div>
                        {
                            !request.isEstate &&
                            <div>
                                <Intake
                                    question="Current Mortgage Amount "
                                    answer={request.mortgageAmount}
                                    isCurrency={true}
                                />

                                {
                                    request.needMore !== '' &&
                                    <Intake
                                        question="Additional Amount"
                                        answer={request.needMore}
                                        isCurrency={true}
                                    />
                                }
                            </div>
                        }

                        <Intake
                            question="Your / Household income"
                            answer={request.houseHold}
                            isCurrency={true}
                        />

                        <Intake
                            question="Monthly Liability"
                            answer={request.monthlyLiability}
                            isCurrency={true}
                        />

                        <Intake
                            question="Net Assets"
                            answer={request.netAsset}
                            isCurrency={true}
                        />

                        {
                            (user.profiles.kindOfService == 1 || user.profiles.kindOfService == 4)
                            && request.isEstate
                            &&
                            <Intake
                                question="Estimated Affordability"
                                answer={this.state.afford}
                                isCurrency={true}
                            />
                        }
                    </div>
                }
            </div>
        )
    }
}

export default StatedInfo