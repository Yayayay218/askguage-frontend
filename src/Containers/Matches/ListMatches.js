import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import {connect} from 'react-redux';
import Actions from '../../Actions/Creators'
import Match from '../../Components/Match'

class ListMatches extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(Actions.getMatches({
            id: null,
            type: this.props.matchType
        }))
    }

    render() {
        return (
            <div className="album text-muted">
                <div className="container">
                    <div className="row">
                        {
                            this.props.matches.map((match, key) => {
                                return (
                                    <div className="col-md-4" key={key}>
                                        <Match {...match}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

ListMatches.propTypes = {
    matches: PropTypes.array,
    matchType: PropTypes.string
};

ListMatches.defaultProps = {
    matches: [],
    matchType: '0'
};

// Maps state from Store to props
const mapStateToProps = (state, ownProps) => {
    return {
        matches: state.matches.data
    }
};

// Use connect to put them together
export default connect(mapStateToProps)(ListMatches);