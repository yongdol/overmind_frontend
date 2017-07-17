import React, {Component} from 'react';
import $ from "jquery";


class OMAccountManage extends Component {
    uploadFile(){

     function (e) {
        var fd = new FormData();
        fd.append('file', this.refs.file.getDOMNode().files[0]);

        $.ajax({
            url: 'http://localhost:5505/api/Values/UploadFile',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data){
                alert(data);
            }
        });
        e.preventDefault()
    }


    render(){
        return (
            <div className="contents">
               <form ref="uploadForm" className="uploader" encType="multipart/form-data" >
                   <input ref="file" type="file" name="file" className="upload-file"/>
                   <input type="button" ref="button" value="Upload" onClick={this.uploadFile} />
               </form>
            </div>
        );
    }
}

export default OMAccountManage;