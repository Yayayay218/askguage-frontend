import React, {Component} from 'react'
import Autocomplete from 'react-google-autocomplete'
import StepLayout from '../../StepLayout'
import _ from 'lodash';
function reducePlaces(memo, item) {
    return {
        ...memo,
        [item.types[0]]: {
            long_name: item.long_name,
            short_name: item.short_name
        }
    };
}

class LocateHome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {onGoNext, onGoBack, _request, onChange, isValid} = this.props

        return (
            <div>
                <div className="request-intro">
                    <h3>Location</h3>
                    <p>Let us know where you currently live, so that we can serve you better.</p>
                </div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="">Whats your current address?</label>
                    </div>
                    <div className="col-md-12">
                        <Autocomplete
                            className="form-control"
                            onPlaceSelected={(place) => {
                                onChange({
                                    ..._request,
                                    homeAddress: {
                                        address: place.formatted_address,
                                        lat: place.geometry.location.lat(),
                                        lng: place.geometry.location.lng()
                                    }
                                })
                            }}
                            types={['geocode']}
                            defaultValue={_request['homeAddress']['address']}
                        />
                    </div>
                </div>
                <StepLayout
                    onGoBack={onGoBack}
                    onGoNext={onGoNext}
                    isValid={isValid}
                />

            </div>
        )
    }
}

export default LocateHome