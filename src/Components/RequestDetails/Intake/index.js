import React from 'react'


const IntakeDetails = ({question, answer}) => {
    return (
        <div className="row intake-details">
            <div className="col-md-6 col-7 question">
                <label htmlFor="">{question}</label>
            </div>
            <div className="col-md-6 col-5 answer">
                <label htmlFor="">{answer}</label>
            </div>
            <div className="profile-line"></div>
        </div>
    )
}

export default IntakeDetails