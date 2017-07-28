import React, {Component} from 'react';
import BACKEND_URL from "../config"
import axios from 'axios';
import $ from 'jquery';


class OMAccountTipsRow extends Component {

    deleteTipsRow() {
        const token = 'JWT' + sessionStorage.getItem('access_token');
        const index = $("input[type=radio][name=delete_check]:checked").val();
        const bank = document.getElementsByName("tips_table_bank")[index].innerHTML;
        const acc_num = document.getElementsByName('tips_table_acc_num')[index].innerHTML;
        let jsonData = {"acc_num": acc_num, "bank": bank};
        // console.log("data", jsonData);
        if (confirm("이 계좌를(" + acc_num + ") 해제 하시겠습니까??")) {
            // console.log("yes");
            return axios.post(BACKEND_URL + "/tips_delete", jsonData, {
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
                <td name="tips_table_bank" value={this.props.bank}>{this.props.bank}</td>
                <td name="tips_table_acc_num" value={this.props.acc_num}>{this.props.acc_num}</td>
                <td name="tips_table_deposit">{this.props.deposit}</td>
                <td name="tips_table_start">{this.props.start}</td>
                <td name="tips_table_end">{this.props.end}</td>
                <td>
                    <input className="radio-check" type="radio" name="delete_check" value={this.props.index}/>
                    <button type="submit" onClick={this.deleteTipsRow}>팁스해제</button>
                </td>
            </tr>
        );
    }
}


export default OMAccountTipsRow;
