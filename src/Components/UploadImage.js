import React, {Component, PropTypes} from 'react'
import Dropzone from 'react-dropzone'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCancel from 'material-ui/svg-icons/content/clear';

export default class UploadImage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {file, onChange} = this.props
        return (
            <section>
                <div className="dropzone">
                    <Dropzone onDrop={onChange}>
                        <img src={file[0] ? file[0].preview : null} style={{width: '100%', height:'100%'}} alt=""/>
                    </Dropzone>
                </div>
            </section>
        );
    }
}

