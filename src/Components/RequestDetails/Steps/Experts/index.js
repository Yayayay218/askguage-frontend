import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../../../../Actions/Creators'
import BidInfo from './BidInfo'

class ExpertsContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        const {bids, bidFetched, isBid} = this.props
        return (
            <div className="experts-view">
                {
                    bids.map(item =>
                        (
                            <BidInfo
                                bidFetched={bidFetched}
                                item={item}
                                key={item.id}
                                isBid={isBid}
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

export default connect(mapStateToProps)(ExpertsContainer)