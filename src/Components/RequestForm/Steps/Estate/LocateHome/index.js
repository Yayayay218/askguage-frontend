import React, {Component} from 'react'
import Autocomplete from 'react-google-autocomplete'
import StepLayout from '../../StepLayout'
import Api from '../../../../../Services/dataService'
import AutoComplete from 'react-autocomplete';

class LocateHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addresses: [],
            value: ''
        }
    }

    componentDidMount() {
        const ParseApi = new Api(null);
        ParseApi.getAddresses()
            .then(res => this.setState({addresses: res}))
    }

    render() {
        const {onGoNext, onGoBack, _request, onChange, isValid} = this.props
        console.log(this)
        return (
            <div>
                <div className="request-intro">
                    <h3>Location</h3>
                    <p>Which city would you prefer? Quiet suburbs or a walk downtown.</p>
                </div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="">Where are you looking to buy a home?</label>
                    </div>
                    <div className="col-md-12">
                        <AutoComplete
                            getItemValue={(item) => item.place.formatted_address}
                            shouldItemRender={(item, value) => item.place.formatted_address.toLowerCase().indexOf(value.toLowerCase()) > -1}
                            items={this.state.addresses}
                            renderItem={(item, isHighlighted) =>
                                <div
                                    key={item.id}
                                    style={{background: isHighlighted ? 'lightgray' : 'white'}}>
                                    {item.place.formatted_address}
                                </div>
                            }
                            renderInput={props => <input {...props} className="form-control"/>}
                            value={_request['homeAddress']['address']}
                            onChange={(e) =>  onChange({
                                ..._request,
                                homeAddress: {
                                    address: e.target.value,
                                }
                            })}
                            onSelect={(value, item) => {
                                onChange({
                                    ..._request,
                                    homeAddress: {
                                        address: item.place.formatted_address,
                                        lat: item.place.geometry.location.lat,
                                        lng: item.place.geometry.location.lng
                                    }
                                })
                            }}
                            wrapperProps={{style: {width: '100%'}}}
                            menuStyle={{
                                borderRadius: '3px',
                                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                                background: 'rgba(255, 255, 255, 0.9)',
                                padding: '2px 0',
                                fontSize: '90%',
                                position: 'fixed',
                                overflow: 'auto',
                                maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
                                zIndex: "1"
                            }}
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