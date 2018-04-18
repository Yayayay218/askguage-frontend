import React from 'react'
import NumberFormat from 'react-number-format';

const IntakeDetails = ({question, answer, isCurrency, isTooltip}) => {
    return (
        <div className="row intake-details">
            <div className="col-md-6 col-6 question">
                <label htmlFor="">{question}</label>
                {isTooltip && <span className="question-mark-icon"
                                    data-toggle="tooltip"
                                    title="Affordability is calculated based on Income and liability among other values stated by the customer"
                ></span>}
            </div>
            <div className="col-md-6 col-6 answer">
                {
                    isCurrency ?
                        <label htmlFor="">
                            <NumberFormat
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                value={answer}
                            />
                        </label>
                        : <label htmlFor="">{answer}</label>

                }
            </div>
            <div className="profile-line"></div>
        </div>
    )
}

export default IntakeDetails