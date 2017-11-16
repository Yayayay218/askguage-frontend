import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'

class MatchDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(Actions.getMatches({
            id: this.props.match.params._id,
        }))
    }

    render() {
        return (
            <div>
                {this.props.matches.map((match, key) => {
                    return (
                        <iframe key={key} frameBorder="0" marginHeight="50%" marginWidth="0" scrolling="no" allowFullScreen="true"
                                webkitallowfullscreen="true" mozallowfullscreen="true"
                                sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin allow-presentation"
                                src={match.url}
                                width="100%" height="432">

                        </iframe>
                    )
                })}
            </div>
        )
        // {/*<iframe src={this.props.matches.url} sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin allow-presentation" allowFullScreen></iframe>*/
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        matches: state.matches.data,
    }
};

MatchDetail.propTypes = {
    matches: PropTypes.array
}

MatchDetail.defaultProps = {
    matches: []
}
export default connect(mapStateToProps)(MatchDetail)