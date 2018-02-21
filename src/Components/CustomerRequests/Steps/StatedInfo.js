import React, {Component} from 'react'
import Intake from '../../RequestDetails/Intake'
import {BooleanType} from '../../RequestDetails/Intake/TransferType'
import NumberFormat from 'react-number-format';

class StatedInfo extends Component {
    render() {
        const {request} = this.props
        console.log(request)
        return (
            <div>
                {
                    request.budget.min !== '' && <div className="row intake-details">
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
                }

                <Intake
                    question="Do you know if you are qualified for the amount above?"
                    answer={BooleanType(request.areQualified)}
                />

                <Intake
                    question="Down Payment"
                    answer={request.downPayment}
                    isCurrency={true}
                />

                <Intake
                    question="Estimated Affordability"
                    answer={request.monthlyLiability / request.houseHold}
                    isCurrency={true}
                    isTooltip={true}
                />
            </div>
        )
    }
}

export default StatedInfo