import React, {Component} from 'react'

class FlipPanel extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {children, selectedIndex} = this.props;

        return (
            <div
                className="flip-panel"
            >
                <div className="request-intro">
                    <h3>The Best Answers</h3>
                    <p>You need the potential to design something <br/> completely new and fresh.</p>
                </div>
                <div
                    className="flip-card"
                    key={selectedIndex}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export default FlipPanel