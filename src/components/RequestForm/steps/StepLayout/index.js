import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../../../../actions/Creators'
import moment from 'moment'

// import createHistory from 'history/createBrowserHistory'
//
// const history = createHistory({
//     forceRefresh: true
// });

class StepLayout extends Component {
    constructor(props, context) {
        super(props, context)

        this.doNext = this.doNext.bind(this)
    }

    doNext() {
        const {done, token, _request, history, user, onGoNext, data} = this.props
        if (done && token) {
            this.props.dispatch(Actions.postRequest({
                ..._request,
                userId: user.id,
                birthDay: moment.utc(_request.birthDay).format()
            }))
            history.push('/my-requests')
        }

        if (done && !token) {
            this.props.dispatch(Actions.setRequestTmp(data))
            history.push('/signup/customer')
        }

        if (!done)
            onGoNext()
    }

    render() {
        const {onGoNext, onGoBack, done, isValid, data, history} = this.props
        console.log(this)
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
                                disabled={!isValid}
                                onClick={this.doNext}
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

export default connect()(StepLayout)