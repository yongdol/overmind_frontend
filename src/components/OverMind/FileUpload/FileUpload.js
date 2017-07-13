import React, {Component} from 'react';
import $ from "jquery";


class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.validateForm = this.validateForm.bind(this);
        this.onLoad = this.onLoad.bind(this);
        // this.uploadFile = this.uploadFile.bind(this);
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

        //console.log("result",result)
    }

    // uploadFile() {
        // console.log('uploadfile');
        // const file = $("#FILE_TAG")[0].files[0];
        // const formData = new FormData();
        // formData.append('file_name',file.name);
        // formData.append('file_size',file.size);
        // $.ajax({
        //     url: 'http://localhost:5505/api/overmind/fileupload',
        //     processData: false,
        //     contentType: false,
        //     data: formData,
        //     type: 'POST',
        //     success: function (result) {
        //         alert("업로드 성공!!");
        //     }
        // });


    // }
    //         {/*<div>*/}
    //             {/*<form id="FILE_FORM" method="post" encType="multipart/form-data" action="">*/}
    //                 {/*<input type="file" id="FILE_TAG" name="FILE_TAG"/>*/}
    //                 {/*<button className="ui-shadow ui-btn ui-corner-all" type="button" onChange={() => this.uploadFile()}>전송</button>*/}
    //             {/*</form>*/}
    //         {/*</div>*/}

    render() {
        return (
            <div>
                <form target="frame" encType="multipart/form-data"
                      action="http://localhost:5505/api/overmind/fileupload" method="post"
                      onSubmit={this.onSubmit}>
                    <input name="name"/>
                    <input type="file" name="image"/>
                    <input type="submit" value="전송"/>
                    <iframe name="frame" style={{display: 'none', visibility: 'hidden'}} onLoad={this.onLoad}></iframe>
                </form>
            </div>
        )
    }
}

export default FileUpload;