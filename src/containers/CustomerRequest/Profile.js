import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({onChangeValue, next, source}) => {
    const {profile, formErrors} = source
    return (
        <div className="container profile-request">
            <div className="form-group row">
                <label className="col-sm-3">Are you a first time home buyer?</label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='homeBuyer'
                           value='1'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Yes</span>
                </label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='homeBuyer'
                           value='0'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">No</span>
                </label>
            </div>

            <div className="form-group row"
                 style={profile.homeBuyer == 1 ?
                     {display: 'block'} : {display: 'none'}}
            >
                <label className="col-sm-3">Are you currently renting?</label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='currentlyRenting'
                           value='1'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Yes</span>
                </label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='currentlyRenting'
                           value='0'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">No</span>
                </label>
            </div>
            <div className="profile-line"></div>

            <div className="form-group row">
                <label className="col-sm-3">Are you looking to</label>
                <label className="col-sm-2 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='lookingTo'
                           value='0'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Buy a new home</span>
                </label>
                <label className="col-sm-2 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='lookingTo'
                           value='1'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Renew mortgage</span>
                </label>
                <label className="col-sm-3 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='lookingTo'
                           value='2'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Refinance mortgage</span>
                </label>
            </div>
            <div className="profile-line"></div>
            <div className="form-group row"
                 style={profile.homeBuyer == 1 || profile.lookingTo == 0 ?
                     {display: 'block'} : {display: 'none'}}
            >
                <label className="col-sm-3">Are you currently working with a Realtor?</label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='realtor'
                           value='1'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Yes</span>
                </label>

                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='realtor'
                           value='0'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">No</span>
                </label>
            </div>
            <div className="form-group row"
                 style={profile.realtor == 1 ?
                     {display: 'block'} : {display: 'none'}}
            >
                <label className="col-sm-3">Have you identified your new home?</label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='newHome'
                           value='1'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Yes</span>
                </label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='newHome'
                           value='0'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">No</span>
                </label>
            </div>

            <div className="form-group row"
                 style={profile.newHome == 1 && profile.realtor == 1 ?
                     {display: 'block'} : {display: 'none'}}>
                <label className="col-sm-3">Do you have a purchase agreement for this
                    property?</label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='purchaseAgreement'
                           value='1'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Yes</span>
                </label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='purchaseAgreement'
                           value='0'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">No</span>
                </label>
            </div>
            <div className="profile-line" style={profile.homeBuyer == 1 || profile.lookingTo == 0 ?
                {display: 'block'} : {display: 'none'}}></div>
            <div className="form-group row">
                <label className="col-sm-3">Is this a single or joint ownership?</label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='ownership'
                           value='1'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Single</span>
                </label>
                <label className="col-sm-1 custom-control custom-radio">
                    <input type="radio" className="custom-control-input"
                           name='ownership'
                           value='0'
                           onChange={onChangeValue}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Joint</span>
                </label>
            </div>
            {
                formErrors ? <div style={{color: 'red'}}>Please check all fields</div> : <div></div>
            }
            <div className="form-group row">
                <div className="col-sm-6">
                    <button className="btn btn-primary" onClick={next}>Next</button>
                </div>
            </div>
        </div>
    )
}

Profile.propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
}
export default Profile