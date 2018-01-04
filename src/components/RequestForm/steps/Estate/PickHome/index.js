import React, {Component} from 'react'
import StepLayout from '../../StepLayout'

class PickHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detached: false,
            semi: false,
            condo: false,
            other: false
        }
    }

    render() {
        const {onGoNext} = this.props
        const {detached, semi, condo, other} = this.state
        const bedRooms = [
            {
                id: 0,
                value: '1'
            },
            {
                id: 1,
                value: '2'
            },
            {
                id: 2,
                value: '3'
            },
            {
                id: 3,
                value: '4'
            },
            {
                id: 4,
                value: '5+'
            },
        ]
        const squareFTs = [
            {
                id: 0,
                value: '100-500'
            },
            {
                id: 1,
                value: '500-1000'
            },
            {
                id: 2,
                value: '1000-2000'
            },
            {
                id: 3,
                value: '2000-5000'
            },
            {
                id: 4,
                value: '5000+'
            }
        ]

        return (
            <div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="">What Kind of home are you looking for?</label>
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
                                            onClick={()=>{this.setState({detached: true, semi: false, condo: false, other: false})}}
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
                                             onClick={()=>{this.setState({detached: false, semi: true, condo: false, other: false})}}
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
                                             onClick={()=>{this.setState({detached: false, semi: false, condo: true, other: false})}}
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
                                             onClick={()=>{this.setState({detached: false, semi: false, condo: false, other: true})}}
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
                                    name="numberOfBedRoom"
                            >
                                <option value=""></option>
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
                                    name="numberOfBedRoom"
                            >
                                <option value=""></option>
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
                    onGoNext={onGoNext}
                />
            </div>
        )
    }
}

export default PickHome