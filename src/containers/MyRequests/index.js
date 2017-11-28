import React from 'react';
import {Link} from 'react-router-dom'
const MyRequest = () => {
    return (
        <div className="my-request">
            <div className="container-fluid">
                <div className="top-wrapper">
                    <h1>My Requests</h1>
                    <Link to="/create-request">
                        <button className="btn btn-new-request">New Request</button>
                    </Link>
                </div>
            </div>
            <div className="profile-line" style={{marginTop: '23px'}}></div>
        </div>

    )
}

export default MyRequest
