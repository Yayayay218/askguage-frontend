import React, {Component} from 'react'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="page-wrapper">
                    {this.props.children}
                </div>
                <Footer {...this.props}/>
            </div>
        )
    }
}

export default App
