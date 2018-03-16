import React from 'react'
import IntakeDetails from '../../../Intake'
import NumberFormat from "react-number-format";
import {BooleanType} from "../../../Intake/TransferType";


const Info = ({request}) => {
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

            <IntakeDetails
                question="Do you know if you are qualified for the amount above?"
                answer={BooleanType(request.areQualified)}
            />

            {
                request.isEstate && <IntakeDetails
                    question="Down Payment"
                    answer={request.downPayment}
                    isCurrency={true}
                />
            }
            {
                !request.isEstate &&
                <IntakeDetails
                    question="Value of Home"
                    answer={request.homeValue}
                    isCurrency={true}
                />
            }

            <IntakeDetails
                question="Monthly Liability"
                answer={request.monthlyLiability}
                isCurrency={true}
            />

            <IntakeDetails
                question="Net Asset"
                answer={request.netAsset}
                isCurrency={true}
            />
            <IntakeDetails
                question="Your / HouseHold Income"
                answer={request.houseHold}
                isCurrency={true}
            />
            {
                !request.isEstate &&
                    <div>
                        <IntakeDetails
                            question="Current Mortgage Amount "
                            answer={request.mortgageAmount}
                            isCurrency={true}
                        />

                        {
                            request.needMore !== '' &&
                            <IntakeDetails
                                question="Additional Amount"
                                answer={request.needMore}
                                isCurrency={true}
                            />
                        }
                    </div>
            }
        </div>
    )
}

export default Info