import React, {Component} from 'react'
import {connect} from 'react-redux';
import moment from 'moment';
import {withRouter} from 'react-router'

import 'react-datepicker/dist/react-datepicker.css';
import FlipWizard from '../FlipPanel/index'
import Layout from '../../containers/App'
import PickHome from './Steps/Estate/PickHome'
import LocateHome from './Steps/Estate/LocateHome'
import Budget from './Steps/Estate/Budget'
import OwnerShip from './Steps/OwnerShip'
import InCome from './Steps/Income'
import AboutYou from './Steps/AboutYou'
import MortgagePickHome from './Steps/Mortgage/PickHome'
import MortgageBudget from './Steps/Mortgage/Budget'
import MortgageLocateHome from './Steps/Mortgage/LocateHome'

class CreateRequest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLanding: false,
            _request: {
                isEstate: (props.app.requestType.estate === true || props.location.search === '?type=0'),
                kindOfHome: -1,
                numberOfBedRoom: -1,
                squareFT: -1,
                homeAddress: {
                    address: '',
                    lat: '',
                    lng: ''
                },
                budget: {
                    min: '',
                    max: ''
                },
                bidCount: {
                    fromMortgage: 0,
                    fromEstate: 0
                },
                areQualified: '',
                ownership: '',
                houseHold: '',
                monthlyLiability: '',
                downPayment: '',
                netAsset: '',
                birthDay: moment("1993"),
                occupationType: '',
                citizenType: '',
                homeValue: '',
                mortgageAmount: '',
                needMore: '',
                mortgageType: ''
            }
        }
        if (props.app.requestType === -1 && props.location.search === '')
            props.history.push('/')
    }

    render() {
        const {app, history, location} = this.props
        const {_request} = this.state
        const estateSteps = [
            {
                render: ({onGoNext}) => (
                    <PickHome
                        onGoNext={onGoNext}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.kindOfHome != -1 && _request.numberOfBedRoom != -1 && _request.squareFT != -1}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <LocateHome
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.homeAddress.address !== ''}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <Budget
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.budget.min !== '' && _request.budget.max !== '' && _request.areQualified !== ''}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <OwnerShip
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.ownership !== ''}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <InCome
                        requestType={0}
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.houseHold !== '' && _request.downPayment !== '' && _request.monthlyLiability !== '' && _request.netAsset !== ''}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <AboutYou
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.birthDay !== '' && _request.citizenType !== '' && _request.occupationType}
                        history={history}
                    />
                )
            }
        ]
        const mortgageSteps = [
            {
                render: ({onGoNext}) => (
                    <MortgageBudget
                        onGoNext={onGoNext}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.homeValue !== '' && _request.mortgageAmount !== '' && _request.mortgageType !== ''}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <MortgagePickHome
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.kindOfHome != -1 && _request.numberOfBedRoom != -1 && _request.squareFT != -1}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <MortgageLocateHome
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.homeAddress.address !== ''}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <OwnerShip
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.ownership !== ''}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <InCome
                        requestType={1}
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.houseHold !== '' && _request.monthlyLiability !== '' && _request.netAsset !== ''}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <AboutYou
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                        _request={_request}
                        onChange={(_request) => {
                            this.setState({_request})
                        }}
                        isValid={_request.birthDay !== '' && _request.citizenType !== '' && _request.occupationType}
                        history={history}
                    />
                )
            }
        ]

        let steps = (app.requestType.estate || location.search === '?type=0') ? estateSteps : mortgageSteps
        return (
            <Layout {...this.state}>
                <div className="container create-request-form">
                    <div className="row">
                        <div className="col-md-8">
                            <FlipWizard
                                initStepIndex={0}
                                steps={steps}
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="d-none d-md-block">

                                <div className="flip-panel">
                                    <div className="request-intro">
                                        <h3>Need help</h3>
                                        <p>if you are having trouble or have some question, please <a
                                            href="https://askgauge.ca/contact-us/">contact us</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        app: state.app
    }

}

export default withRouter(connect(mapStateToProps)(CreateRequest))