import React, {Component} from 'react';
import axios from 'axios';


class OMAccountManage extends Component {

    uploadFile() {
        const token = sessionStorage.getItem('access_token');
        let formData = new FormData();
        let file = document.getElementById('file').files;
        // var file = document.querySelector('input[type=file]').files;
        for (var i=0; i<file.length; i++) {
            console.log("file",file[i]);
            formData.append("file", file[i]);
        }
        // console.log("file",typeof file);
        console.log("data",formData);

        return axios.post('http://localhost:5505/api/overmind/fileupload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            }
        })
    }

    render(){
        return (
            <div className="contents">
               <form ref="uploadForm" className="uploader">
                   <input id="file" type="file" name="file" className="upload-file" multiple="multiple"/>
                   <input type="button" id="button" value="Upload" onClick={this.uploadFile} />
               </form>
            </div>
        );
    }
}

export default OMAccountManage;