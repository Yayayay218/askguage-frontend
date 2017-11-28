import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import {Link} from 'react-router-dom'

const Error = ({message}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    )
}
class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this)
    }

    renderCustomer() {
        return (
            <div>
               <p>Welcome to Customer Homepage</p>
                <Link to="/create-request">Create Customer Request</Link>
            </div>
        )
    }

    render() {
        return(
            <div className="container">
                {
                    this.props.user.role == 0 ? this.renderCustomer() : <div>Welcome to Provider Homepage</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.data.data
    }

}

export default connect(mapStateToProps)(Home)