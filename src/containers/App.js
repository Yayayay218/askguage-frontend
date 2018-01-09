import React, {Component} from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Header {...this.props}/>
                {this.props.children}
                <Footer {...this.props}/>
            </div>
        )
    }
}

export default App
