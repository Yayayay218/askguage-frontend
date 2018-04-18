import React, {Component} from 'react'
import Layout from '../../../containers/App'

function RequestStatus({status}) {
    let statusClass = 'open'
    if (status == 0)
        status = 'Open to receive quotes'
    if (status == 1) {
        status = 'Quotes received enough from Mortgage Agents'
        statusClass = 'enoughMortgage'
    }
    if (status == 2) {
        status = 'Quotes received enough from Real Estate Agents'
        statusClass = 'enoughEstate'
    }
    if (status == 3) {
        status = 'Quotes received enough'
        statusClass = 'enough'
    }
    if (status == 4) {
        status = 'The request was closed'
        statusClass = 'completed'
    }
    return <strong className={`label-header content1 ${statusClass}`}>{status}</strong>

}

class FlipWizard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentStepIndex: props.initStepIndex || 0
        };
    }

    render() {
        const {steps, request, isFetched} = this.props;
        const {currentStepIndex} = this.state;
        let currentStep = steps[currentStepIndex];

        if (!isFetched) return null
        return (
            <Layout isLanding={false}>
                <div className="request-details">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-end top-wrapper">
                            <label className="label-header">My Request</label>
                            <div className="divider"></div>
                            <RenderStatus
                                status={request.isEstate ? 0 : request.mortgageType === 0 ? 1 : 2}
                            />
                            <label className="status">Status: <RequestStatus status={request.status}/>
                            </label>
                            {/*<button className="btn btn-cancel">Cancel This Request</button>*/}
                        </div>
                        <div className="container menu-wrapper">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="menu-item">
                                            <label className={this.state.currentStepIndex === 0 ? 'active' : ''}
                                                   onClick={() => this.setState({currentStepIndex: 0})}
                                            >
                                                Intake</label>
                                        </div>
                                        {/*<div className="menu-item">*/}
                                        {/*<label className={this.state.currentStepIndex === 1 ? 'active' : ''}*/}
                                        {/*onClick={() => this.setState({currentStepIndex: 1})}*/}

                                        {/*>*/}
                                        {/*Insights</label>*/}
                                        {/*</div>*/}
                                        <div className="menu-item">
                                            <label className={this.state.currentStepIndex === 1 ? 'active' : ''}
                                                   onClick={() => this.setState({currentStepIndex: 1})}

                                            >Experts
                                            </label>
                                        </div>
                                        <div className="menu-item">
                                            <label className={this.state.currentStepIndex === 2 ? 'active' : ''}
                                                   onClick={() => this.setState({currentStepIndex: 2})}
                                            >Review & Close
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-line"></div>
                    <div className="container">
                        {currentStep.render({})}
                    </div>
                </div>
            </Layout>
        );
    }
}

function RenderStatus({status}) {
    if (status === 0)
        status = 'Buy a new house'
    if (status === 1)
        status = 'Renew Mortgage'
    if (status === 2)
        status = 'Refinance Mortgage'
    return <label className="mr-auto label-detail">
        {status}
    </label>
}


export default FlipWizard