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
        const {bids} = this.props
        return (
            <div className="experts-view">
                {
                    bids.map(item =>
                        (
                            <BidInfo
                                item={item}
                                key={item.id}
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