import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {Link} from 'react-router-relative-link';
import axios from 'axios';


const TableRow = ({job_id, step_co_name, step_id}) => {
    return (
      <tr>
        <td>{job_id}</td>
        <td>단계 {step_id}</td>
        <td>{step_co_name}</td>
      </tr>
    );

}

const Btn = (status) => {
  //console.log(status);
  if (status.status === true) {
    return (
      <div className="stepbox-3-btn-wrap">
        <Link className="goback" to="." onClick={hashHistory.goBack}>뒤로 가기</Link>
        <Link className="gotostep" to="../4">다음 단계로</Link>
        <Link className="gohome" to="/">홈으로 가기</Link>
      </div>
    );
  } else {
    return (
      <div className="stepbox-3-btn-wrap">
        <Link className="goback" to="." onClick={hashHistory.goBack}>뒤로 가기</Link>
        <Link className="gotostep inactive-submit" to=".">다음 단계로</Link>
        <Link className="gohome" to="/">홈으로 가기</Link>
      </div>
    );
  }
}



class Step3 extends Component {

  componentWillMount () {
      this.getServiceInfo()
        .then((res) => this.setState({title: res.data.data.dtext}));

      this.getOrderStatus()
        .then((res) => this.setState({olist: res.data.data}));
  }

  getServiceInfo () {
    var token = 'JWT ' + sessionStorage.getItem('access_token');
    return axios.get("https://api.frisk.rocks/service/detail?service_id=" + this.props.sid,
                      {headers: {Authorization: token}});
  }

  getOrderStatus () {
    var token = 'JWT ' + sessionStorage.getItem('access_token');
    return axios.get("https://api.frisk.rocks/mypage/purchase/status?order_id=" + sessionStorage.getItem('orderid'),
                      {headers: {Authorization: token}});
  }

  isFinished () {
    //console.log(this.state.olist);
    return this.state.olist[this.state.olist.length - 1].e_msg === "OK" ;
  }


  render () {
    if (this.state && this.state.olist && this.state.title) {
      //console.log(this.isFinished());
      return (
        <div className="contents">
        	<div className="wrap">
        		<div className="front-img-step-3-1">
        			<img className="frontImg-l" src="img/front-img-step-3-1.png" role="presentation"/>
        			<img className="frontImg-s" src="img/front-img-step-3-1-s.png" role="presentation"/>
        		</div>
        		<div className="current-step-noti">{'"' + this.state.title + '"'} 분석 서비스가 <span style={{color:"#F97897"}}>진행 중</span> 입니다</div>
        		<div className="stepbox step3">
        			<div className="stepbox-title">
        				Step 03. 분석 진행 조회
        			</div>
        			<div className="stepbox-wrap">
                <Link to=".">
                  <div className="stepbox-3-refresh" onClick={() => {this.getOrderStatus().then((res) => this.setState({olist: res.data.data})); console.log('refresh')}}>새로고침</div>
                </Link>
        				<div className="leftTime">남은 예상 시간 : 알 수 없음</div>
        				<table>
        					<thead>
        						<tr>
        							<th>신청 ID</th>
        							<th>분석 단계</th>
        							<th>단계별 수행 결과</th>
        						</tr>
        					</thead>
        					<tbody>
                    {
                      this.state.olist.map((obj) =>
                      <TableRow
                        job_id={obj.job_id}
                        step_co_name={obj.step_co_name}
                        step_id={obj.step_id}
                      />
                      )
                    }
        					</tbody>
        				</table>
        				<div className="stepbox-caption">
        					<p>* 왼쪽 상단의 "새로고침"으로 조회 내역을 업데이트 할 수 있습니다.</p>
        				</div>
                <Btn status={this.isFinished()} />

        			</div>
        		</div>
        	</div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Step3;
