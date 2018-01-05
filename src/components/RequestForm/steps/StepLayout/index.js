import React, {Component} from 'react'

class StepLayout extends Component {
    render() {
        const {onGoNext, onGoBack, done, isValid} = this.props
        if (onGoBack)
            return (
                <div>
                    <div className="form-group row">
                        <div className="col-md-6 col-6">
                            <button
                                className="btn btn-next btn-back"
                                onClick={onGoBack}
                            >Previous
                            </button>
                        </div>
                        <div className="col-md-6 col-6">
                            <button
                                className="btn btn-next"
                                disabled={done || !isValid}
                                onClick={onGoNext}
                            >Next
                            </button>
                        </div>
                    </div>
                </div>
            )
        return (
            <button
                className="btn btn-next"
                disabled={!isValid}
                onClick={onGoNext}
            >Next
            </button>
        )
    }
}

export default StepLayout