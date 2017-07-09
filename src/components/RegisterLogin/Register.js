import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';
import $ from 'jquery';

class Register extends Component {

  register (userid, passwd, passwd2, email) {
    if (passwd !== passwd2) {
      console.log("Your password does not match. Please try again");
      return;
    }
    const jsonData = {"id": userid, "pw": passwd};
    return $.ajax({
      url:"https://api.frisk.rocks/signup",
      method:"post",
      data: jsonData
    }).done((res) => {
      if (res.e_msg.status === 200) {
        sessionStorage.setItem('id', userid);
        sessionStorage.setItem('access_token', res.access_token);
        sessionStorage.setItem('refresh_token', res.refresh_token);
        location.href = "/";
      } else {
        console.log("invalid ID or password. Please try again.");
      }
      return;
    });
  }


  render () {
    return (
      <div className="editPersonalInfoWrap">
      	<div className="bt-rlbox-close">
      		<Link to={ "#" + hashHistory.getCurrentLocation().pathname.replace("/register", "")}>
            <img src="/img/btn_close.png" width="60" height="60" alt="close" title="닫기" />
          </Link>
      	</div>

      	<div className="box-content-rl">
      		<div className="box-content">
      			<h1>회원가입</h1>
      			<div className="input-info-wrap">
      				<div className="input-newid">
      					<lable htmlFor="id">아이디</lable>
      					<input type="text" id="userid" aria-label="ID" autocomplete="id" name="ID" placeholder="ID" />
      				</div>
      				<div className="input-newpw">
      					<lable htmlFor="pw">비밀번호</lable>
      					<input type="password" id="passwd" aria-label="PASSWORD" autocomplete="password" name="password" placeholder="PASSWORD" />
      				</div>
      				<div className="input-newpwcheck">
      					<lable htmlFor="pwcheck">비밀번호 확인</lable>
      					<input type="password" id="pwcheck" aria-label="PASSWORD" autocomplete="password" name="password check" placeholder="PASSWORD AGAIN" />
      				</div>
      				<div className="input-newemail">
      					<lable htmlFor="email">이메일</lable>
      					<input type="text" id="email" aria-label="EMAIL" autocomplete="email" name="email" placeholder="EMAIL" />
      				</div>
      			</div>
      			<div className="btn-box-wrap submit-register-wrap">
      				<button className="btn-submit-register" type="submit"
              onClick={() => this.register(document.getElementById('userid').value,
                                        document.getElementById('passwd').value,
                                        document.getElementById('pwcheck').value,
                                        document.getElementById('email').value)}><div>가입하기</div></button>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Register;
