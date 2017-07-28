import React, {Component} from 'react';
import axios from 'axios';
import BACKEND_URL from "../config";
import OMAccountRow from "./OMAccountRow";
import {FieldGroup} from "react-bootstrap";


class OMAccountGeneral extends Component {

    constructor(props) {
        super(props);
        this.state = {data:[]};
    }

    componentDidMount() {
        this.accountList().then((res) => this.setState({data:res.data.acc}));
    }


    accountList() {
        const token = 'JWT' + sessionStorage.getItem('access_token');
        return axios.get(BACKEND_URL + "/account", {
            headers: {
                Authorization: token
            }
        });
    };


    uploadFile() {
        const token = sessionStorage.getItem("access_token");
        let formData = new FormData();
        let file = document.getElementById("file").files;
        for (var i=0; i<file.length; i++) {
            formData.append("file", file[i]);
        }
        return axios.post(BACKEND_URL + "/fileupload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": token
            }
        });
    };


    renderTableRow (bank, acc_num, initial_date , recent_date, TIPS, key) {
        return (
            <OMAccountRow
                bank={bank}
                acc_num={acc_num}
                initial_date={initial_date}
                recent_date={recent_date}
                TIPS={TIPS}
                index={key}
            />
        );
    }

    render() {
        if (this.state.data.length > 0) {
            return (
                <div className="account-contents">
                    <div className="my-table-wrap">
                        <div className="account-general-list">
                            <h1 className="account-h2">일반계좌</h1>
                            <table>
                                <thead>
                                <tr>
                                    <th>은행</th>
                                    <th>계좌번호</th>
                                    <th>최초거래내역</th>
                                    <th>최근거래내역</th>
                                    <th>TIPS 계좌</th>
                                    <th>삭제</th>

                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.data.map((item, key) => {
                                        return this.renderTableRow(
                                            item.bank,
                                            item.acc_num,
                                            item.initial_date,
                                            item.recent_date,
                                            item.TIPS,
                                            key
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                            <form ref="uploadForm" className="account-file-upload">
                                <input type="file" id="file" name="file" multiple="multiple" className="file-picker"/>
                                <input type="button" id="button" value="Upload" className="btn-upload" onClick={this.uploadFile}/>
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="account-contents">
                    <div className="my-table-wrap">
                        <div className="account-general-list">
                            <h1 className="account-h2">일반계좌</h1>
                            <h1 className="account-h1">입력된 데이터가 없습니다. 아래 '파일선택'에서 파일을 추가해 주세요.</h1>
                            <form ref="uploadForm" className="account-file-upload">
                                <input type="file" id="file" name="file" multiple="multiple" className="file-picker"/>
                                <input type="button" id="button" value="Upload" className="btn-upload" onClick={this.uploadFile}/>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default OMAccountGeneral;