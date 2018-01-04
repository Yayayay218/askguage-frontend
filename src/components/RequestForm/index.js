import React, {Component} from 'react'
import {connect} from 'react-redux';

import FlipWizard from '../FlipPanel/index'
import Layout from '../../containers/App'
import PickHome from './steps/Estate/PickHome'
import LocateHome from './steps/Estate/LocateHome'
import Budget from './steps/Estate/Budget'
import OwnerShip from './steps/OwnerShip'
import InCome from './steps/Income'
import AboutYou from './steps/AboutYou'
import MortgagePickHome from './steps/Mortgage/PickHome'
import MortgageBudget from './steps/Mortgage/Budget'
import MortgageLocateHome from './steps/Mortgage/LocateHome'

class CreateRequest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLanding: false
        }
    }

    render() {
        const estateSteps = [
            {
                render: ({onGoNext}) => (
                    <PickHome
                        onGoNext={onGoNext}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <LocateHome
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <Budget
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <OwnerShip
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <InCome
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <AboutYou
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                    />
                )
            }
        ]
        const mortgageSteps = [
            {
                render: ({onGoNext}) => (
                    <MortgageBudget
                        onGoNext={onGoNext}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <MortgagePickHome
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <MortgageLocateHome
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <OwnerShip
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <InCome
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                    />
                )
            },
            {
                render: ({onGoNext, onGoBack}) => (
                    <AboutYou
                        onGoNext={onGoNext}
                        onGoBack={onGoBack}
                    />
                )
            }
        ]
        const {app} = this.props

        let steps = app.requestType.estate ? estateSteps : mortgageSteps
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
                            <div className="flip-panel">
                                <div className="request-intro">
                                    <h3>Need helps</h3>
                                    <p>You need the potential to <br/> design something completely new and fresh.</p>
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
export default connect(mapStateToProps)(CreateRequest)