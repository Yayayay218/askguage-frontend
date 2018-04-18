import React, {Component, PropTypes} from 'react'
import Dropzone from 'react-dropzone'
import Config from '../configs/AppSetting'
import Icon from '../assets/images/avatar.svg'

export default class UploadImage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {file, onChange, fileName} = this.props
        let imageUrl = fileName && fileName.indexOf('https') !== -1 ? fileName : Config.URL+'/containers/images/download/'+fileName
        return (
            <section>
                <div className="dropzone">
                    <Dropzone onDrop={onChange}>
                        <img src={file[0] ? file[0].preview : fileName ? imageUrl : Icon} style={{width: '100%', height:'100%'}} alt=""/>
                    </Dropzone>
                </div>
            </section>
        );
    }
}

