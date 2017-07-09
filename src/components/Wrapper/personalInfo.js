import React, {Component} from 'react';
import {Link} from 'react-router-relative-link';
import {hashHistory} from 'react-router';
import $ from 'jquery';


class PasswordCheck extends Component {
  verify (passwd) {
    return $.ajax({
      url:"https://api.frisk.rocks/signin",
      method:"post",
      data: {"id": sessionStorage.getItem('id'), "pw": passwd}
    }).done((res) => {
        if (res.e_msg.status === 200) {
          location.href = "#" + hashHistory.getCurrentLocation().pathname.replace("passwordcheck", "changepassword");
        } else {
          console.log("invalid ID or password. Please try again.");
        }
    });
  }

  render () {
  console.log(hashHistory);
    return (
      <div className="editPersonalInfoWrap">
      	<div className="bt-rlbox-close">
      		<Link to=".."><img src="img/btn_close.png" width="60" height="60" alt="close" title="닫기" /></Link>
      	</div>
      	<div className="box-content-rl">
      		<div className="box-content">
      			<h1>회원정보 수정</h1>
      			<p>회원정보 수정을 위해 다시 한 번 비밀번호를 입력해주세요</p>
      			<div className="check-pw-wrap">
      						<input type="password" aria-label="PASSWORD" autocomplete="password" name="password" id="passwd" placeholder="PASSWORD" />
                  <button className="btn-check-pw" type="submit" onClick={() => this.verify(document.getElementById('passwd').value)}><div>확인</div></button>
    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
}

class ChangePassword extends Component {

  render () {
    return (
      <div className="editPersonalInfoWrap">
      	<div className="bt-rlbox-close">
      		<Link to=".."><img src="img/btn_close.png" width="60" height="60" alt="close" title="닫기" /></Link>
      	</div>

      	<div className="box-content-rl">
      		<div className="box-content">
      			<h1>회원정보 수정</h1>
      			<div className="input-info-wrap">
      				<div className="input-newpw">
      					<lable htmlFor="newpw">새로운 비밀번호</lable>
      					<input type="password" id="newpw" aria-label="PASSWORD" autocomplete="password" name="new password" placeholder="NEW PASSWORD" />
      				</div>
      				<div className="input-newpwcheck">
      					<lable htmlFor="newpwcheck">새로운 비밀번호 확인</lable>
      					<input type="password" id="newpwcheck" aria-label="PASSWORD" autocomplete="password" name="new password check" placeholder="NEW PASSWORD AGAIN" />
      				</div>
      				<div className="input-newemail">
      					<lable htmlFor="newemail">이메일</lable>
      					<input type="text" id="newemail" aria-label="EMAIL" autocomplete="email" name="email" placeholder="EMAIL" />
      				</div>
      			</div>
      			<div className="btn-box-wrap">
  				    <button className="btn-withdraw" type="submit">
                <Link to="../checkwithdrawal"><div>탈퇴하기</div></Link>
              </button>
              <button className="btn-save" type="submit">
                <Link to="."><div>저장하기</div></Link>
              </button>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

class CheckWithdrawal extends Component {
  render () {
    return (
      <div className="editPersonalInfoWrap">
      	<div className="bt-rlbox-close">
      		<Link to=".."><img src="img/btn_close.png" width="60" height="60" alt="close" title="닫기" /></Link>
      	</div>

      	<div className="box-content-rl">
      		<div className="box-content">
      			<h1>회원탈퇴</h1>
      			<div className="input-withdraw-reason-wrap">
      				<div className="input-withdraw-reason">
      					<lable>탈퇴사유</lable>
      					<textarea id="withdrawreason" name="withdrawreason" cols="77" rows="10"></textarea>
      				</div>

      			</div>
      			<div className="btn-box-wrap">
      				<p>회원탈퇴 시 더이상 보고서를 확인할 수 없습니다. 탈퇴하시겠습니까?</p>
				      <button className="btn-withdraw" type="submit">
                <Link to="."><div>탈퇴하기</div></Link>
              </button>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

class ChangePasswordFeedback extends Component {
  render () {
    return (
      <div className="editPersonalInfoWrap">
      	<div className="bt-rlbox-close">
      		<Link to=".."><img src="img/btn_close.png" width="60" height="60" alt="close" title="닫기" /></Link>
      	</div>
      	<div className="feedback">
      			<p>회원정보가 저장되었습니다</p>
      	</div>
      </div>
    );
  }
}

class WithdrawalFeedback extends Component {
  render () {
    sessionStorage.clear();
    return (
      <div className="editPersonalInfoWrap">
      	<div className="bt-rlbox-close">
      		<Link to="/"><img src="img/btn_close.png" width="60" height="60" alt="close" title="닫기" /></Link>
      	</div>
      	<div className="feedback">
      			<p>탈퇴가 완료되었습니다</p>
      	</div>
      </div>
    );
  }
}

export {
  PasswordCheck,
  ChangePassword,
  CheckWithdrawal,
  ChangePasswordFeedback,
  WithdrawalFeedback
};
