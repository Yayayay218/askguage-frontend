import React, {Component} from 'react'
import Autocomplete from 'react-google-autocomplete'
import StepLayout from '../../StepLayout'

class LocateHome extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {onGoNext, onGoBack} = this.props

        return (
            <div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="">Where are you looking for a home?</label>
                    </div>
                    <div className="col-md-12">
                        <Autocomplete
                            className="form-control"
                            types={['(regions)']}
                        />
                    </div>
                </div>
                <StepLayout
                    onGoBack={onGoBack}
                    onGoNext={onGoNext}
                />

            </div>
        )
    }
}

export default LocateHome