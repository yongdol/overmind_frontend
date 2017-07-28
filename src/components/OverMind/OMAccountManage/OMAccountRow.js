import React, {Component} from 'react';
import BACKEND_URL from "../config"
import axios from 'axios';
import $ from "jquery";

class OMAccountRow extends Component {

    deleteRow() {
        const token = 'JWT' + sessionStorage.getItem('access_token');
        const index = $("input[type=radio][name=delete_check]:checked").val();
        const bank = document.getElementsByName("bank")[index].innerHTML;
        const acc_num = document.getElementsByName('acc_num')[index].innerHTML;
        let jsonData = {"acc_num": acc_num, "bank": bank};
        if (confirm("이 계좌를(" + acc_num + ") 삭제 하시겠습니까??")) {
            return axios.post(BACKEND_URL + "/acc_delete", jsonData, {
                headers: {
                    "Authorization": token
                }
            });
        } else {
            console.log("취소");
        }
    };

    render() {
        return (
            <tr>
                <td name="bank" value={this.props.bank}>{this.props.bank}</td>
                <td name="acc_num" value={this.props.acc_num}>{this.props.acc_num}</td>
                <td name="initial_date">{this.props.initial_date}</td>
                <td name="recent_date">{this.props.recent_date}</td>
                <td name="TIPS">{this.props.TIPS}</td>
                <td>
                    <input className="radio-check" type="radio" name="delete_check" value={this.props.index}/>
                    <button type="submit" onClick={this.deleteRow}>삭제
                    </button>
                </td>
            </tr>
        );
    }
}


export default OMAccountRow;
