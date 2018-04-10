import React, {Component} from 'react'

class FlipWizard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentStepIndex: props.initStepIndex || 0
        };
    }

    render() {
        const {steps, user, history, request} = this.props;
        const {currentStepIndex} = this.state;
        let currentStep = steps[currentStepIndex];
        return (
            <div className="row">
                <div className="col-md-3 col-12">
                    <div className="d-none d-md-block">
                        <div className="navigate">
                            <div className="d-flex flex-column">
                                <div
                                    className={currentStepIndex === 0 ? 'navigate-item active' : 'navigate-item'}
                                    onClick={() => this.setState({currentStepIndex: 0})}
                                >Profile
                                </div>
                                <div
                                    className={currentStepIndex === 1 ? 'navigate-item active' : 'navigate-item'}
                                    onClick={() => this.setState({currentStepIndex: 1})}
                                >{request.isEstate ? 'Preference' : 'Property Details'}
                                </div>

                                {
                                    user.profiles.kindOfService &&
                                    <div
                                        className={currentStepIndex === 2 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 2})}
                                    >Info
                                    </div>
                                }

                                {
                                    user.profiles.kindOfService &&
                                    <div
                                        className={currentStepIndex === 3 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 3})}
                                    >Finance
                                    </div>
                                }

                                <div
                                    className={currentStepIndex === 4 ? 'navigate-item active' : 'navigate-item'}
                                    onClick={() => this.setState({currentStepIndex: 4})}
                                >Provide a Quote
                                </div>
                                {
                                    history.location.state.isCallback &&
                                    <div
                                        className={currentStepIndex === 5 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 5})}
                                    >Callback
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-md-none">
                        <div className="navigate mobile">
                            <div className="d-flex flex-row">
                                <div
                                    className={currentStepIndex === 0 ? 'navigate-item active' : 'navigate-item'}
                                    onClick={() => this.setState({currentStepIndex: 0})}
                                >Profile
                                </div>
                                <div
                                    className={currentStepIndex === 1 ? 'navigate-item active' : 'navigate-item'}
                                    onClick={() => this.setState({currentStepIndex: 1})}
                                    style={{whiteSpace: 'nowrap'}}
                                >{request.isEstate ? 'Preference' : 'Property Details'}
                                </div>

                                {
                                    user.profiles.kindOfService &&
                                    <div
                                        className={currentStepIndex === 2 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 2})}
                                    >Info
                                    </div>
                                }

                                {
                                    user.profiles.kindOfService &&
                                    <div
                                        className={currentStepIndex === 3 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 3})}
                                    >Finance
                                    </div>
                                }

                                <div
                                    className={currentStepIndex === 4 ? 'navigate-item active' : 'navigate-item'}
                                    onClick={() => this.setState({currentStepIndex: 4})}
                                    style={{whiteSpace: 'nowrap'}}
                                >Provide a Quote
                                </div>
                                {
                                    history.location.state.isCallback &&
                                    <div
                                        className={currentStepIndex === 5 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 5})}
                                    >Callback
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-12">
                    <div>
                        {currentStep.render()}
                    </div>
                </div>
            </div>
        );
    }
}

export default FlipWizard