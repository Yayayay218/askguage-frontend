import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Match = ({_id, coverPhoto, title, description}) => {
    return (
        <div className="match-list">
            <div className="card">
                <Link to={{
                    pathname: `/watch/${_id}`
                }} className="card-text" target="_blank">
                    <img
                        src={coverPhoto}
                        style={{height: '280px'}}
                    >
                    </img>
                    <div className="card-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
};

Match.propTypes = {
    // id: PropTypes.string.isRequired,
    coverPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

Match.defaultProps = {
    // id: '',
    coverPhoto: '',
    title: ''
};

export default Match