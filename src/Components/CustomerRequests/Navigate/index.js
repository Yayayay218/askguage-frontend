import React, {Component} from 'react'
import Layout from '../../../Containers/App'

class FlipWizard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentStepIndex: props.initStepIndex || 0
        };
    }

    render() {
        const {steps, user, history} = this.props;
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
                                >Contact Info
                                </div>
                                <div
                                    className={currentStepIndex === 1 ? 'navigate-item active' : 'navigate-item'}
                                    onClick={() => this.setState({currentStepIndex: 1})}
                                >Preference
                                </div>
                                {
                                    user.profiles.kindOfService == 1 &&
                                    <div
                                        className={currentStepIndex === 2 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 2})}
                                    >Occupation Info
                                    </div>
                                }
                                {
                                    user.profiles.kindOfService == 1 &&
                                    <div
                                        className={currentStepIndex === 3 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 3})}
                                    >Additional Info
                                    </div>
                                }

                                {
                                    user.profiles.kindOfService == 1 &&
                                    <div
                                        className={currentStepIndex === 4 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 4})}
                                    >Stated Financial Info
                                    </div>
                                }

                                {
                                    user.profiles.kindOfService == 1 &&
                                    <div
                                        className={currentStepIndex === 5 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 5})}
                                    >Calculated Values
                                    </div>
                                }
                                <div
                                    className={currentStepIndex === 6 ? 'navigate-item active' : 'navigate-item'}
                                    onClick={() => this.setState({currentStepIndex: 6})}
                                >Your Bid
                                </div>
                                {
                                    history.location.state.isCallback &&
                                    <div
                                        className={currentStepIndex === 7 ? 'navigate-item active' : 'navigate-item'}
                                        onClick={() => this.setState({currentStepIndex: 7})}
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