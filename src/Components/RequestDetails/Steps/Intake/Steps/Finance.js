import React from 'react'
import IntakeDetails from '../../../Intake'
import NumberFormat from "react-number-format";
import {BooleanType} from "../../../Intake/TransferType";


const Info = ({request}) => {
    return(
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

            <IntakeDetails
                question="Down Payment"
                answer={request.downPayment}
                isCurrency={true}
            />

            <IntakeDetails
                question="Estimated Affordability"
                answer={request.monthlyLiability / request.houseHold}
                isCurrency={true}
                isTooltip={true}
            />
        </div>
    )
}

export default Info