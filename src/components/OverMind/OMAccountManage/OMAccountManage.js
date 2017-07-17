import React, {Component} from 'react';
import $ from "jquery";
import axios from 'axios';
import * as jQuery from "react/lib/ReactDOMFactories";

class OMAccountManage extends Component {

    uploadFile() {
        var formData = new FormData();
        var file = document.getElementById('file').files[0];
        var qurystringfile = jQuery.param(file);
        console.log("file",file);
        console.log("file",typeof file);

        formData.append("file", file);
        console.log("data",typeof formData);
        return axios.post('http://localhost:5505/api/overmind/fileupload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    render(){
        return (
            <div className="contents">
               <form ref="uploadForm" className="uploader">
                   <input id="file" type="file" name="file" className="upload-file"/>
                   <input type="button" id="button" value="Upload" onClick={this.uploadFile} />
               </form>
            </div>
        );
    }
}

export default OMAccountManage;