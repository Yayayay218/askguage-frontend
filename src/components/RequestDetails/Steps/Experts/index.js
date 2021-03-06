import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../../../../actions/Creators'
import BidInfo from './BidInfo'

class ExpertsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            providerType: ''
        }
    }

    componentDidMount() {

    }

    render() {
        const {bids, bidFetched, isBid, request} = this.props
        let tmp = bids
        switch (this.state.providerType) {
            case '':
                break
            case '0':
                tmp = bids.filter(res => {
                    return res.provider.profiles.kindOfService == "1" || res.provider.profiles.kindOfService == "4"
                })
                break
            case '1':
                tmp = bids.filter(res => {
                    return res.provider.profiles.kindOfService != "1" && res.provider.profiles.kindOfService != "4"
                })
                break
        }
        if (tmp.length === 0)
            return (
                <div className="experts-view">
                    <p>
                        Waiting for response from experts
                        <br/>
                        <br/>
                        We have send your request to our service providers in your area and we are waiting on them to
                        respond. We will get you multiple quotes for each service category along with recommendations
                        for you to compare tailored to your situation and preference.
                    </p>
                </div>
            )
        return (
            <div className="experts-view">
                <select className="custom-select" style={{marginBottom: '15px'}}
                        value={this.state.providerType}
                        onChange={(e) => this.setState({providerType: e.target.value})}
                >
                    <option value="">---Select Provider---</option>
                    <option value="0">Mortgage Agent</option>
                    <option value="1">Real Estate Agent</option>
                </select>
                {
                    tmp.map(item =>
                        (
                            <BidInfo
                                bidFetched={bidFetched}
                                item={item}
                                key={item.id}
                                isBid={isBid}
                                request={request}
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