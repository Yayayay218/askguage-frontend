import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import {connect} from 'react-redux';
import Actions from '../../actions/Creators'
import Match from '../../components/Match'

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

// const Home = () => {
//     return (
//         <div className="album text-muted">
//             <div className="container">
//
//                 <div className="row">
//                     <div className="col-sm-4">
//                         <div className="card">
//                             <img
//                                 src="https://cdn.vox-cdn.com/thumbor/HWOiS3cB4GWynA01A1Q7q3QY62g=/0x0:4136x2988/1200x800/filters:focal(2101x858:2761x1518)/cdn.vox-cdn.com/uploads/chorus_image/image/57429401/869096910.0.jpg"
//                                 style={{height: '280px'}}
//                             >
//                             </img>
//                             <p className="card-text">This is a wider card with supporting text below as a natural
//                                 lead-in to
//                                 additional content. This content is a little bit longer.</p>
//                         </div>
//                     </div>
//                     <div className="col-sm-4">
//                         <div className="card">
//                             <img
//                                 src="https://cdn.vox-cdn.com/thumbor/HWOiS3cB4GWynA01A1Q7q3QY62g=/0x0:4136x2988/1200x800/filters:focal(2101x858:2761x1518)/cdn.vox-cdn.com/uploads/chorus_image/image/57429401/869096910.0.jpg"
//                                 style={{height: '280px'}}
//                             >
//                             </img>
//                             <p className="card-text">This is a wider card with supporting text below as a natural
//                                 lead-in to
//                                 additional content. This content is a little bit longer.</p>
//                         </div>
//                     </div>
//
//                     <div className="col-sm-4">
//                         <div className="card">
//                             <img
//                                 src="https://cdn.vox-cdn.com/thumbor/HWOiS3cB4GWynA01A1Q7q3QY62g=/0x0:4136x2988/1200x800/filters:focal(2101x858:2761x1518)/cdn.vox-cdn.com/uploads/chorus_image/image/57429401/869096910.0.jpg"
//                                 style={{height: '280px'}}
//                             >
//                             </img>
//                             <p className="card-text">This is a wider card with supporting text below as a natural
//                                 lead-in to
//                                 additional content. This content is a little bit longer.</p>
//                         </div>
//                     </div>
//                 </div>
//
//             </div>
//         </div>
//     );
// };
// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        matches: state.matches.data
    }
};

// Use connect to put them together
export default connect(mapStateToProps)(ListMatches);