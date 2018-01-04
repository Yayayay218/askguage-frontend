import React from 'react'

const RequestLoading = () => {
    return (
        <div className="container">
            <div className='row customer'>
                <div className="col-sm-12">
                    <div className="request-item">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="dummy-title"></div>
                                <div className="dummy-post"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2 col-4">
                                <div className="d-flex flex-column">
                                    <div className="dummy-property"></div>
                                    <div className="dummy-property-text"></div>
                                </div>
                            </div>
                            <div className="col-sm-2 col-4">
                                <div className="d-flex flex-column">
                                    <div className="dummy-property"></div>
                                    <div className="dummy-property-text"></div>
                                </div>
                            </div>
                            <div className="col-sm-2 col-4">
                                <div className="d-flex flex-column">
                                    <div className="dummy-property"></div>
                                    <div className="dummy-property-text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-line-customer"></div>
            </div>
        </div>
    )
}

export default RequestLoading