import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import Autocomplete from 'react-google-autocomplete'
import moment from 'moment'

export default class AdvanceInfo extends Component {
    render() {
        const {user, onChange, onChangeLanguage} = this.props
        const bind = (field) => ({
            value: user['profiles'][field],
            onChange: (e) => onChange({...user, profiles: {...user['profiles'], [field]: e.target.value}})
        })

        return (
            <div>
                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">What languages do you speak?</label>
                            </div>
                            <div className="col-md-8 m-auto">
                                <div className="group-check-boxes">
                                    <label className="col-md-4 custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                               value='0'
                                               name='languages'
                                               defaultChecked={true}
                                               disabled={true}

                                        />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description custom-label"
                                              style={{marginTop: '3px'}}>English</span>
                                    </label>
                                    <label className="col-md-4 custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                               value='1'
                                               name='languages'
                                               defaultChecked={user.profiles.languages.indexOf(1) !== -1}
                                               onChange={onChangeLanguage}
                                        />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description custom-label"
                                              style={{marginTop: '3px'}}>Spanish</span>
                                    </label>
                                    <label className="col-md-4 custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                               value='2'
                                               name='languages'
                                               defaultChecked={user.profiles.languages.indexOf(2) !== -1}
                                               onChange={onChangeLanguage}

                                        />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description custom-label"
                                              style={{marginTop: '3px'}}>French</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 m-auto">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Opt In</label>
                            </div>
                            <div className="col-md-8">
                                <div className="group-check-boxes">
                                    <label className="col-md-6 custom-control custom-radio">
                                        <input type="radio" className="custom-control-input"
                                               value='1'
                                               name='optIn'
                                               defaultChecked={user["profiles"]["optIn"] === 1 ? true : user["profiles"]["optIn"] !== 0}
                                               onChange={(e) => onChange({
                                                   ...user,
                                                   profiles: {...user.profiles, optIn: 1}
                                               })}
                                        />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description custom-label">Yes</span>
                                    </label>
                                    <label className="col-md-6 custom-control custom-radio">
                                        <input type="radio" className="custom-control-input"
                                               value='0'
                                               name='optIn'
                                               defaultChecked={user["profiles"]["optIn"] === 0}
                                               onChange={(e) => onChange({
                                                   ...user,
                                                   profiles: {...user.profiles, optIn: 0}
                                               })}
                                        />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description custom-label">No</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="form-group row">*/}
                    {/*<div className="col-md-6 col-12">*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-md-4 m-auto">*/}
                                {/*<label className="col-form-label">Job Title</label>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-8">*/}
                                {/*<input type="text" className="form-control"*/}
                                       {/*{...bind("jobTitle")}*/}
                                {/*/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6 col-12">*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-md-4 m-auto">*/}
                                {/*<label className="col-form-label">Employer</label>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-8">*/}
                                {/*<input type="text" className="form-control"*/}
                                       {/*{...bind("employer")}*/}
                                {/*/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                {/*</div>*/}
                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Length of Employment</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control"
                                       {...bind("lengthOfEmployment")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Address</label>
                            </div>
                            <div className="col-md-8">
                                <Autocomplete className="form-control"
                                              onPlaceSelected={(place) => {
                                                  onChange({
                                                      ...user,
                                                      profiles: {
                                                          ...user.profiles,
                                                          userAddress: {
                                                              address: place.formatted_address,
                                                              lat: place.geometry.location.lat(),
                                                              lng: place.geometry.location.lng()
                                                          }
                                                      },
                                                  })
                                              }}
                                              types={['(regions)']}
                                              defaultValue={user['profiles']['userAddress']['address']}
                                >
                                </Autocomplete>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-md-6 col-12">*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-md-4 m-auto">*/}
                                {/*<label className="col-form-label">Industry</label>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-8">*/}
                                {/*<input type="text" className="form-control"*/}
                                       {/*{...bind("industry")}*/}
                                {/*/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
                <div className="form-group row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Birthday</label>
                            </div>
                            <div className="col-md-8">
                                <DatePicker
                                    dateFormat="YYYY/MM/DD"
                                    className="form-control"
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    selected={moment(user["profiles"]["dob"])}
                                    onChange={(e) => onChange({...user, profiles: {...user.profiles, dob: e}})}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Gender</label>
                            </div>
                            <div className="col-md-8">
                                <select className="custom-select"
                                        {...bind("sex")}
                                >
                                    <option value=""></option>
                                    <option value="0">Male</option>
                                    <option value="1">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    {/*<div className="col-md-6 col-12">*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-md-4 m-auto">*/}
                                {/*<label className="col-form-label">Marital Status</label>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-8">*/}
                                {/*<select className="custom-select"*/}
                                        {/*{...bind("civilStatus")}*/}
                                {/*>*/}
                                    {/*<option value=""></option>*/}
                                    {/*<option value="0">Married</option>*/}
                                    {/*<option value="1">Common Law</option>*/}
                                    {/*<option value="2">Single</option>*/}
                                    {/*<option value="3">Separated</option>*/}
                                    {/*<option value="4">Divorced</option>*/}
                                    {/*<option value="5">Widowed</option>*/}
                                {/*</select>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <label className="col-form-label">Canadian Citizen</label>
                            </div>
                            <div className="col-md-8">
                                <select className="custom-select"
                                        {...bind("citizenship")}
                                >
                                    <option value=""></option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="form-group row">*/}
                    {/*<div className="col-md-6 col-12">*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-md-4 m-auto">*/}
                                {/*<label className="col-form-label">Address</label>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-8">*/}
                                {/*<Autocomplete className="form-control"*/}
                                              {/*onPlaceSelected={(place) => {*/}
                                                  {/*onChange({*/}
                                                      {/*...user,*/}
                                                      {/*profiles: {*/}
                                                          {/*...user.profiles,*/}
                                                          {/*userAddress: {*/}
                                                              {/*address: place.formatted_address,*/}
                                                              {/*lat: place.geometry.location.lat(),*/}
                                                              {/*lng: place.geometry.location.lng()*/}
                                                          {/*}*/}
                                                      {/*},*/}
                                                  {/*})*/}
                                              {/*}}*/}
                                              {/*types={['(geocode)']}*/}
                                              {/*defaultValue={user['profiles']['userAddress']['address']}*/}
                                {/*>*/}
                                {/*</Autocomplete>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                {/*</div>*/}

            </div>
        )
    }
}