import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../../../../actions/Creators'
import ReviewInfo from './ReviewInfo'

class ReviewClose extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        const {bids, bidFetched, isBid, user} = this.props
        return (
            <div className="experts-view">
                {
                    bids.map(item =>
                        (
                            item.status === 3 && <ReviewInfo
                                bidFetched={bidFetched}
                                item={item}
                                key={item.id}
                                isBid={isBid}
                                user={user}
                            />
                        )
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(ReviewClose)