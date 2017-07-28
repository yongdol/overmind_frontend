import React, {Component} from 'react';
import axios from 'axios';
import BACKEND_URL from "../config"
import {Form, FormControl, FormGroup} from "react-bootstrap";
import OMAccountTipsRow from "./OMAccountTipsRow";
import $ from 'jquery';


class OMAccountTips extends Component {

    constructor(props) {
        super(props);
        this.state = {data:[], tips_data:[]};
        this.accountList().then((res) => this.setState({data:res.data.acc}));
    }

    componentDidMount() {
        this.accountListTips().then((res) => this.setState({tips_data:res.data.tips_acc}));
    }


    accountList() {
        const token = 'JWT' + sessionStorage.getItem('access_token');
        return axios.get(BACKEND_URL + "/account", {
            headers: {
                Authorization: token
            }
        });
    };

    accountListTips() {
        const token = 'JWT' + sessionStorage.getItem('access_token');
        return axios.get(BACKEND_URL + "/tips_account", {
            headers: {
                Authorization: token
            }
        });
    }

    saveTipsAccount() {
        const token = 'JWT' + sessionStorage.getItem('access_token');
        let bank = document.getElementsByName("tips_save_bank")[0].value;
        let acc_num = document.getElementsByName("tips_save_acc_num")[0].value;
        let acc_type = document.getElementsByName("tips_save_acc_type")[0].value;
        let deposit = document.getElementsByName("tips_save_deposit")[0].value;
        let start = document.getElementsByName("tips_save_start")[0].value;
        let end = document.getElementsByName("tips_save_end")[0].value;
        // console.log("index", index);
        const jsonData = {"bank": bank, "acc_num": acc_num, "acc_type": acc_type, "deposit": deposit, "start": start, "end": end};
        // console.log("data", jsonData);
        return axios.post(BACKEND_URL + "/tips_upload", jsonData, {
            headers: {
                Authorization: token
            }
        });
    };


    renderTableRow (bank, acc_num, deposit, start , end, key) {
        return (
            <OMAccountTipsRow
                key={acc_num}
                bank={bank}
                acc_num={acc_num}
                deposit={deposit}
                start={start}
                end={end}
                index={key}
            />
        );
    }

    render() {
        if (this.state.tips_data.length > 0) {
            return (
                <div className="account-contents">
                    <div className="my-tips-table-wrap">
                        <div className="account-tips-list">
                            <h1 className="account-h2">TIPS계좌</h1>
                            <table>
                                <thead>
                                <tr>
                                    <th>은행</th>
                                    <th>계좌번호</th>
                                    <th>TIPS 자금규모(억원)</th>
                                    <th>TIPS 시작일</th>
                                    <th>TIPS 종료일</th>
                                    <th>TIPS 해제</th>

                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.tips_data.map((item, key) => {
                                        return this.renderTableRow(
                                            item.bank,
                                            item.acc_num,
                                            item.deposit,
                                            item.start,
                                            item.end,
                                            key
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                            <Form inline>
                                <FormGroup className="dropdown-menu-wrapper" controlId="formControlsSelect">
                                    <FormControl componentClass="select" name="tips_save_bank">
                                        {this.state.data.map((item) => {
                                            return (
                                                <option value={item.bank}>{item.bank}</option>
                                            )
                                        })}
                                    </FormControl>
                                    <FormControl componentClass="select" name="tips_save_acc_num">
                                        {this.state.data.map((item) => {
                                            return (
                                                <option value={item.acc_num}>{item.acc_num}</option>
                                            )
                                        })}
                                    </FormControl>
                                    <FormControl componentClass="select" name="tips_save_acc_type">
                                        <option value="TIPS">TIPS</option>
                                        <option value="TIPS KISED">TIPS KISED</option>
                                    </FormControl>
                                    <FormControl type="text" placeholder="억원" name="tips_save_deposit"/>
                                    <FormControl type="text" placeholder="시작일 ex)2017-01-01" name="tips_save_start"/>
                                    <FormControl type="text" placeholder="종료일 ex)2017-0101" name="tips_save_end"/>
                                    <input type="button" id="button" value="저장" className="btn-tips-upload"
                                           onClick={this.saveTipsAccount}/>
                                </FormGroup>

                            </Form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="account-contents">
                    <div className="my-tips-table-wrap">
                        <div className="account-tips-list">
                            <h1 className="account-h2">TIPS계좌</h1>
                            <h1 className="account-h1">입력된 데이터가 없습니다. 아래에서 계좌정보를 입력해 주세요</h1>
                            <Form inline>
                                <FormGroup className="dropdown-menu-wrapper" controlId="formControlsSelect">
                                    <FormControl componentClass="select" name="tips_save_bank">
                                        {this.state.data.map((item) => {
                                            return (
                                                <option value={item.bank}>{item.bank}</option>
                                            )
                                        })}
                                    </FormControl>
                                    <FormControl componentClass="select" name="tips_save_acc_num">
                                        {this.state.data.map((item) => {
                                            return (
                                                <option value={item.acc_num}>{item.acc_num}</option>
                                            )
                                        })}
                                    </FormControl>
                                    <FormControl componentClass="select" name="tips_save_acc_type">
                                        <option value="TIPS">TIPS</option>
                                        <option value="TIPS KISED">TIPS KISED</option>
                                    </FormControl>
                                    <FormControl type="text" placeholder="억원" name="tips_save_deposit"/>
                                    <FormControl type="text" placeholder="시작일 ex)2017-01-01" name="tips_save_start"/>
                                    <FormControl type="text" placeholder="종료일 ex)2017-0101" name="tips_save_end"/>
                                    <input type="button" id="button" value="저장" className="btn-tips-upload"
                                           onClick={this.saveTipsAccount}/>
                                </FormGroup>

                            </Form>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default OMAccountTips;