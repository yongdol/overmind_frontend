import React, {Component} from 'react';
import {Link} from 'react-router-relative-link';
import {hashHistory} from 'react-router';
import $ from 'jquery';

class Login extends Component {

  login (userid, passwd) {
    const jsonData = {"id": userid, "pw": passwd};

    return $.ajax({
      url:"https://api.frisk.rocks/signin",
      method:"post",
      data: jsonData
    }).done((res) => {
        if (res.e_msg.status === 200) {
          sessionStorage.setItem('id', userid);
          sessionStorage.setItem('access_token', res.access_token);
          sessionStorage.setItem('refresh_token', res.refresh_token);
          location.href = "#" + hashHistory.getCurrentLocation().pathname.replace("/login", "");
        } else {
          console.log("invalid ID or password. Please try again.");
        }
    });
  }

  render () {
    return (
      <div className="registerloginWrap">
      	<div className="bt-rlbox-close">
      		<Link to="." onClick={hashHistory.goBack}>
            <img src="/img/btn_close.png" width="60" height="60" alt="close" title="닫기" />
          </Link>
      	</div>
      	<div className="box-content-rl">
      		<div className="box-content">
      			<h1>Welcome Back</h1>
      			<div className="loginWrap">
      				<div className="login-field-wrap">
      					<div className="ib-wrap">
      						<input type="text" aria-label="ID" autoComplete="username" name="id" id="userid" placeholder="ID" />
      						<input type="password" aria-label="PASSWORD" autoComplete="password" name="password" id="passwd" placeholder="PASSWORD" />
      					</div>
      					<div className="bt-login">
      						<button className="frisk-login" type="submit"
                    onClick={() => this.login(document.getElementById('userid').value,
                                              document.getElementById('passwd').value)}>
                    <div>로그인</div>
                  </button>
      					</div>
      				</div>
      				<div className="etc-login">
      					<div className="chk-login-wrap">
      						<input type="checkbox" id="login_chk" name="chk_long" value="off" />
      						<label htmlFor="login_chk" id="label_login_chk">로그인 상태 유지하기</label>
      					</div>
      					<div className="find-id">
      						<a href="#">아이디 찾기</a>
      						<span className="bar">|</span>
      						<a href="#">비밀번호 찾기</a>
      					</div>
      				</div>
      			</div>
      			<div className="registertxtWrap">
      				<p>혹시 회원이 아니신가요?</p>
              <Link to="../register">
      				  <div className="bt-join">가입하기</div>
              </Link>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Login;
