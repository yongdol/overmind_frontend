import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';
import $ from 'jquery';

class OMRegister extends Component {

    register(firm_name, firmid, userid, passwd, passwd2, email) {

        const member_type = $("input[type=radio][name=membertype]:checked").val();

        if (passwd !== passwd2) {
            console.log("Your password does not match. Please try again");
            return;
        }
        const jsonData = {"member_type": member_type,"firm_name": firm_name, "firm_id": firmid, "id": userid, "pw": passwd};


        return $.ajax({
            url: "http://localhost:5505/api/overmind/signup",
            method: "post",
            data: jsonData
        }).done((res) => {
            if (res.e_msg.status === 200) {
                sessionStorage.setItem('id', userid);
                sessionStorage.setItem('access_token', res.access_token);
                sessionStorage.setItem('refresh_token', res.refresh_token);
                sessionStorage.setItem('member_type', member_type);
                location.href = "#" + hashHistory.getCurrentLocation().pathname.replace("/register", "");
            } else {
                console.log("invalid ID or password. Please try again.");
            }
            return;
        });
    }


    render() {
        return (
            <div className="editPersonalInfoWrap">
                <div className="bt-rlbox-close">
                    <Link to={ "#" + hashHistory.getCurrentLocation().pathname.replace("/register", "")}>
                        <img src="/img/btn_close.png" width="60" height="60" alt="close" title="닫기"/>
                    </Link>
                </div>

                <div className="box-content-rl">
                    <div className="box-content">
                        <h1>회원가입</h1>
                        <div className="input-info-wrap">
                            <div className="input-member-type">
                                <lable htmlFor="membertype">회원유형</lable>
                                <input className="radio-check" type="radio" name="membertype" value="portco"/>기업회원(중소기업, 스타트업)
                                <input className="radio-check" type="radio" name="membertype" value="vc"/>기관회원(VC, 엑셀러레이터)
                            </div>
                            <div className="input-firm-name">
                                <lable htmlFor="firm_name">회사명</lable>
                                <input type="text" id="firm_name" aria-label="FIRMNAME" name="FIRMNAME" placeholder="회사명"/>
                            </div>
                            <div className="input-firm-id">
                                <lable htmlFor="firm_id">사업자 등록 번호</lable>
                                <input type="text" id="firm_id" aria-label="FIRMID" name="FIRMID" placeholder="(-)없이 입력"/>
                            </div>
                            <div className="input-newid">
                                <lable htmlFor="id">아이디</lable>
                                <input type="text" id="userid" aria-label="ID" name="ID" placeholder="ID"/>
                            </div>
                            <div className="input-newpw">
                                <lable htmlFor="pw">비밀번호</lable>
                                <input type="password" id="passwd" aria-label="PASSWORD" name="password" placeholder="PASSWORD"/>
                            </div>
                            <div className="input-newpwcheck">
                                <lable htmlFor="pwcheck">비밀번호 확인</lable>
                                <input type="password" id="pwcheck" aria-label="PASSWORD" name="password check" placeholder="PASSWORD AGAIN"/>
                            </div>
                            <div className="input-newemail">
                                <lable htmlFor="email">이메일</lable>
                                <input type="text" id="email" aria-label="EMAIL" name="email" placeholder="EMAIL"/>
                            </div>
                        </div>
                        <div className="btn-box-wrap submit-register-wrap">
                            <button className="btn-submit-register" type="submit"
                                    onClick={() => this.register(
                                        document.getElementById('firm_name').value,
                                        document.getElementById('firm_id').value,
                                        document.getElementById('userid').value,
                                        document.getElementById('passwd').value,
                                        document.getElementById('pwcheck').value,
                                        document.getElementById('email').value)}>
                                <div>가입하기</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OMRegister;
