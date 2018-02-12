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