import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {Link} from 'react-router-relative-link';
import axios from 'axios';

const TableRow = ({cred_value, credcol, dsource_id, expires, redirect, status}) => {
  if (status === "OK") {
    return (
      <tr>
        <td>{credcol}</td>
        <td>자동 연결 완료</td>
        <td>{expires}</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{credcol}</td>
        <td><a className="btngetauthen" href={redirect}>지금 연결</a></td>
        <td>{expires}</td>
      </tr>
    );
  }
}

const Btn = ({numneed}) => {
  if (numneed === 0) {
    return (
      <div>
        <div className="stepbox-caption">
          <p>* 데이터 입력이 모두 완료되었습니다</p>
        </div>
        <div className="stepbox-1-btn-wrap">
          <Link className="goback" to="." onClick={hashHistory.goBack}>뒤로가기</Link>
          <Link className="gotostep active-submit" to="../2" >서비스 신청</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="stepbox-caption">
          <p>* 현재 {numneed}개의 연결이 더 필요합니다. 지금 연결 버튼을 눌러 페이스북을 연결해주세요.</p>
          <p>* 연결이 완료되면 서비스 신청 버튼이 활성화됩니다.</p>
        </div>
        <div className="stepbox-1-btn-wrap">
          <Link className="goback" to="." onClick={hashHistory.goBack}>뒤로가기</Link>
          <Link className="gotostep inactive-submit" to=".">서비스 신청</Link>
        </div>
      </div>
    );
  }
}

class Step1 extends Component {

  componentWillMount() {
      this.authList()
        .then((res) => this.setState({data:res.data.data}))
        .catch((err) => {location.href = "#" + hashHistory.getCurrentLocation().pathname.replace("/purchase/1", "/login");});

      this.getServiceInfo()
        .then((res) => this.setState({title: res.data.data.dtext}));
  }

  getServiceInfo () {
    var token = 'JWT ' + sessionStorage.getItem('access_token');
    return axios.get("https://api.frisk.rocks/service/detail?service_id=" + this.props.sid,
                      {headers: {Authorization: token}});
  }

  authList() {
    const token = 'JWT ' + sessionStorage.getItem('access_token');
    return axios.get("https://api.frisk.rocks/order/checkout",
                    {headers: {Authorization: token},
                     params: {service_id: this.props.sid,
                              user_id: sessionStorage.getItem('id')}});
  }

  numOfAuthNeed () {
    return this.state.data
      .map((x) => (x.status === "OK" ? 0 : 1))
      .reduce((a, b) => (a + b));
  }


  render () {
    if (this.state) {
      if (this.state.data !== undefined && this.state.data.length) {
        return (
          <div className="contents">
          	<div className="wrap">
          		<div className="front-img-step-1-1">
          			<img className="frontImg-l" src="img/front-img-step-1-1.png" role="presentation"/>
          			<img className="frontImg-s" src="img/front-img-step-1-1-s.png" role="presentation"/>
          		</div>
          		<div className="current-step-noti">{'"' + this.state.title + '"'} 서비스를  시작합니다</div>
          		<div className="stepbox step1">
          			<div className="stepbox-title">
          				Step 01. 정확한 분석을 위해 아래의 데이터들을 입력해주세요
          			</div>
          			<div className="stepbox-wrap">
          				<table>
          					<thead>
          						<tr>
          							<th>필요 데이터</th>
          							<th>입력상태</th>
          							<th>만료일</th>
          						</tr>
          					</thead>
          					<tbody>
          						{

                          this.state.data.map((obj) => (
                            <TableRow
                            cred_value={obj.cred_value}
                            credcol={obj.credcol}
                            dsource_id={obj.dsource_id}
                            expires={obj.expires}
                            redirect={obj.redirect}
                            status={obj.status}
                            />
                          ))

                      }
          					</tbody>
          				</table>
                  <Btn numneed={this.numOfAuthNeed()} />
          			</div>
          		</div>
          	</div>
          </div>
        );
      } else {
        return (
          <div className="contents">
          	<div className="wrap">
          		<div className="front-img-step-1-1">
          			<img className="frontImg-l" src="img/front-img-step-1-1.png" role="presentation"/>
          			<img className="frontImg-s" src="img/front-img-step-1-1-s.png" role="presentation"/>
          		</div>
          		<div className="current-step-noti">{'"' + this.state.title + '"'} 서비스를  시작합니다</div>
          		<div className="stepbox step1">
          			<div className="stepbox-title">
          				Step 01. 정확한 분석을 위해 아래의 데이터들을 입력해주세요
          			</div>
          			<div className="stepbox-wrap">
          				<table>
          					<thead>
          						<tr>
          							<th>필요 데이터</th>
          							<th>입력상태</th>
          							<th>만료일</th>
          						</tr>
          					</thead>
          					<tbody>
          					</tbody>
          				</table>
                  <Btn numneed={0} />
          			</div>
          		</div>
          	</div>
          </div>
        );
      }

    } else {
      return <div>Loading... </div>;
    }
  }
}

export default Step1;
