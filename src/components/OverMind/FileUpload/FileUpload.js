import React, {Component} from 'react';


class FileUpload extends Component {

    constructor(props) {
        super(props)
        this.validateForm = this.validateForm.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validateForm() {
        //validate
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            e.target.submit();
        }
    }

    onLoad(e) {
        const iFrame = e.target;
        let iFrameBody;
        if (iFrame.contentDocument) { // FF
            iFrameBody = iFrame.contentDocument.getElementsByTagName('pre')[0];
        }
        else if (iFrame.contentWindow) { // IE
            iFrameBody = iFrame.contentWindow.document.getElementsByTagName('pre')[0];
        }

        const result = JSON.parse(iFrameBody.innerHTML);

        console.log(result)
    }

    render() {
        return (
            <div>
                <form target="frame" encType="multipart/form-data"
                      action="http://localhost:5505/api/overmind/fileupload" method="post"
                      onSubmit={this.onSubmit}>

                    <input name="name"/>
                    <input type="file" name="image"/>
                    <input type="submit" value="전송"/>

                    <iframe name="frame"
                            style={{display: 'none', visibility: 'hidden'}}
                            onLoad={this.onLoad}>
                    </iframe>
                </form>
            </div>)
    }
}

export default FileUpload;