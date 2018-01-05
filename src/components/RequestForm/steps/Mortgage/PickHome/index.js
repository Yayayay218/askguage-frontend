import React, {Component} from 'react'
import StepLayout from '../../StepLayout'

class PickHome extends Component {
    constructor(props) {
        super(props)
        const {_request} = props
        this.state = {
            detached: _request.kindOfHome === 0,
            semi: _request.kindOfHome === 1,
            condo: _request.kindOfHome === 2,
            other: _request.kindOfHome === 3
        }
    }

    render() {
        const {onGoNext, onGoBack, _request, onChange, isValid} = this.props
        const {detached, semi, condo, other} = this.state
        const bedRooms = [
            {
                id: '1',
                value: '1'
            },
            {
                id: '2',
                value: '2'
            },
            {
                id: '3',
                value: '3'
            },
            {
                id: '4',
                value: '4'
            },
            {
                id: '5+',
                value: '5+'
            },
        ]
        const squareFTs = [
            {
                id: '100-500',
                value: '100-500'
            },
            {
                id: '500-1000',
                value: '500-1000'
            },
            {
                id: '1000-2000',
                value: '1000-2000'
            },
            {
                id: '2000-5000',
                value: '2000-5000'
            },
            {
                id: '5000+',
                value: '5000+'
            }
        ]

        const bind = (field) => ({
            value: _request[field],
            onChange: (e) => onChange({..._request, [field]: e.target.value}),
        });

        return (
            <div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="">What Kind of home do you live in?</label>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3 col-12">
                                {
                                    detached ? (
                                        <div className="service-box detached detached-active">
                                            <label htmlFor="">Detached House</label>
                                        </div>
                                    ) : (
                                        <div className="service-box detached"
                                             onClick={
                                                 () => {
                                                     this.setState({
                                                         detached: true,
                                                         semi: false,
                                                         condo: false,
                                                         other: false
                                                     })
                                                     onChange({..._request, kindOfHome: 0})
                                                 }
                                             }
                                        >
                                            <label htmlFor="">Detached House</label>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="col-md-3 col-12">
                                {
                                    semi ? (
                                        <div className="service-box semi semi-active">
                                            <label htmlFor="">Semi TownHouse</label>
                                        </div>
                                    ) : (
                                        <div className="service-box semi"
                                             onClick={() => {
                                                 this.setState({
                                                     detached: false,
                                                     semi: true,
                                                     condo: false,
                                                     other: false
                                                 })
                                                 onChange({..._request, kindOfHome: 1})

                                             }}
                                        >
                                            <label htmlFor="">Semi TownHouse</label>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="col-md-3 col-12">
                                {
                                    condo ? (
                                        <div className="service-box condo condo-active">
                                            <label htmlFor="">Condo Apartment</label>
                                        </div>
                                    ) : (
                                        <div className="service-box condo"
                                             onClick={() => {
                                                 this.setState({
                                                     detached: false,
                                                     semi: false,
                                                     condo: true,
                                                     other: false
                                                 })
                                                 onChange({..._request, kindOfHome: 2})

                                             }}
                                        >
                                            <label htmlFor="">Condo Apartment</label>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="col-md-3 col-12">
                                {
                                    other ? (
                                        <div className="service-box condo other-active">
                                            <label htmlFor="">Other Type</label>
                                        </div>
                                    ) : (
                                        <div className="service-box other"
                                             onClick={() => {
                                                 this.setState({
                                                     detached: false,
                                                     semi: false,
                                                     condo: false,
                                                     other: true
                                                 })
                                                 onChange({..._request, kindOfHome: 3})

                                             }}
                                        >
                                            <label htmlFor="">Other Type</label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label className="col-md-12 custom-label no-padding">
                            Number of Bedroom
                        </label>
                        <div className="col-md-12 no-padding">
                            <select type="select" className="custom-select"
                                    {...bind("numberOfBedRoom")}
                            >
                                <option value="-1"></option>
                                {
                                    bedRooms.map(bedRoom => (
                                        <option value={bedRoom.id} key={bedRoom.id}>{bedRoom.value}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="col-md-12 custom-label no-padding">
                            Square ft
                        </label>

                        <div className="col-md-12 no-padding">
                            <select type="select" className="custom-select"
                                    {...bind("squareFT")}

                            >
                                <option value="-1"></option>
                                {
                                    squareFTs.map(square => (
                                        <option value={square.id} key={square.id}>{square.value}</option>
                                    ))
                                }
                            </select>
                        </div>
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

export default PickHome