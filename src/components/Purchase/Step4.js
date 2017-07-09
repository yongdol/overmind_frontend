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


class Step4 extends Component {

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

  render () {
    if (this.state && this.state.olist && this.state.title) {
      return (
        <div className="contents">
        	<div className="wrap">
        		<div className="front-img-step-4-1">
        			<img className="frontImg-l" src="img/front-img-step-4-1.png" role="presentation"/>
        			<img className="frontImg-s" src="img/front-img-step-4-1-s.png" role="presentation"/>
        		</div>
        		<div className="current-step-noti">{this.state.title}분석 서비스가 <span style={{color:"#F97897"}}>완료</span> 되었습니다.</div>
        		<div className="stepbox step4">
        			<div className="stepbox-title">
        				Step 04. 완료
        			</div>
        			<div className="stepbox-wrap">
        				<div className="leftTime finished">성공적으로 완료되었습니다.</div>
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
        					<p>* 보고서를 열람하실 수 있습니다.</p>
        				</div>
        				<div className="stepbox-4-btn-wrap">
        					<Link className="goback" to="." onClick={hashHistory.goBack}>뒤로 가기</Link>
        					<Link className="gotostep" to={"/report/" + sessionStorage.getItem('orderid')}>보고서 보러 가기</Link>
        					<Link className="gohome" to="/">홈으로 가기</Link>
        				</div>
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

export default Step4;
