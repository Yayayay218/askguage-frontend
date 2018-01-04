import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import RequestBox from '../../containers/MyRequests/RequestBox'
import RequestLoading from '../../components/loading/Request'
import RequestTop from '../../components/loading/RequestTop'


class MyRequest extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.dispatch(Actions.getRequest())
    }

    render() {
        let loading = [];
        for (let i = 0; i < 7; i++)
            loading.push(<RequestLoading key={i}/>)
        if (!this.props.isFetched)
            return (
                <div>
                    <RequestTop/>
                    {loading}
                </div>
            )
        return (
            <div className="my-request">
                <div className="container-fluid">
                    <div className="top-wrapper">
                        <h1>{
                            this.props.user.role == 0 ? 'My Request' : 'Customer Requests'
                        }
                        </h1>
                        <Link to="/create-request">
                            <button
                                className={this.props.user.role == 0 ? 'btn btn-new-request' : 'btn btn-new-request hidden-btn'}>
                                New Request
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="profile-line" style={{marginTop: '23px', marginBottom: '14px'}}></div>
                <div className="container">
                    <RequestBox {...this.props}/>
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
