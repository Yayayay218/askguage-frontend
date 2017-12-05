import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import RequestBox from '../../containers/MyRequests/RequestBox'

class MyRequest extends Component {

    componentDidMount() {
        this.props.dispatch(Actions.getRequest(this.props))
    }

    render() {
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
                <div className="container">
                    {
                        this.props.isFetched ?
                            <RequestBox {...this.props}/> : <div></div>
                    }
                </div>
            </div>

        )
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.data.data,
        requests: state.requests.data,
        isFetched: state.requests.isFetched
    }
};

export default connect(mapStateToProps)(MyRequest)
