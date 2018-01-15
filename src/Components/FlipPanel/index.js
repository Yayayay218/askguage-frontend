import React, {Component} from 'react'
import FlipPanel from './FlipPanel'
// import StepLayout from '../RequestForm/Steps/StepLayout'

class FlipWizard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentStepIndex: props.initStepIndex || 0
        };
    }

    render() {
        const {steps, renderFinishButtons} = this.props;
        const {currentStepIndex} = this.state;

        let nextStep = steps[currentStepIndex + 1];
        let goBack = () => this.setState({currentStepIndex: currentStepIndex - 1});
        let goNext = () => this.setState({currentStepIndex: currentStepIndex + 1});
        let currentStep = steps[currentStepIndex];

        return (
            <div className="flip-wizard">
                <FlipPanel
                    className="step-panel"
                    selectedIndex={currentStepIndex}
                >
                    {currentStep.render({
                        onGoBack: goBack,
                        onGoNext: goNext,
                    })}
                </FlipPanel>
            </div>
        );
    }
}

export default FlipWizard