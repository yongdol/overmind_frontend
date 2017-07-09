import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {Link} from 'react-router-relative-link';
import axios from 'axios';
import $ from 'jquery';


class Step2 extends Component {

  componentWillMount () {
    this.getServiceInfo()
      .then((res) => (this.setState({data:res.data.data})));

    this.checkout()
      .then((res) => (this.setState({checkout: res.data.data})));
  }


  checkout () {
    return $.ajax({
      url:"https://api.frisk.rocks/order/completed",
      method:"post",
      data: {service_id:this.props.sid},
      headers: {Authorization: 'JWT ' + sessionStorage.getItem('access_token')}
    }).done((res) => {
      //console.log(res.data);
      sessionStorage.setItem('orderid', res.data.id);});
  }


  getServiceInfo () {
    var token = 'JWT ' + sessionStorage.getItem('access_token');
    return axios.get("https://api.frisk.rocks/service/detail?service_id=" + this.props.sid,
                      {headers: {Authorization: token}});
  }

  render () {
    if (this.state) {
      const info = this.state.data;
      return (
        <div className="contents">
        	<div className="wrap">
        		<div className="front-img-step-2-1">
        			<img className="frontImg-l" src="img/front-img-step-2-1.png" role="presentation"/>
        			<img className="frontImg-s" src="img/front-img-step-2-1-s.png" role="presentation"/>
        		</div>
        		<div className="current-step-noti">{'"' + info.dtext + '"'} 서비스가 신청 완료되었습니다!</div>
        		<div className="stepbox step2">
        			<div className="stepbox-title">
        				Step 02. 신청 내역 확인
        			</div>
        			<div className="stepbox-wrap">
        				<div className="step2-con">
        					<div className="featuredWrap-s">
        						<div className="featuredImgTitle-s">{info.service_name}</div>
        						<img src={info.dimg} role="presentation"/>
        					</div>
        					<div className="submitInfo-wrap">
        						<div className="lf-serviceName">
        							서비스명
        						</div>
        						<div className="rt-serviceName">
        							{info.dtext}
        						</div>
        						<div className="lf-submitTime">
        							신청 시간
        						</div>
        						<div className="rt-submitTime">
        							{new Date().toLocaleString()}
        						</div>
        						<div className="lf-finishTime">
        							완료 예상 시간
        						</div>
        						<div className="rt-finishTime">
        							(알 수 없음)
        						</div>
        						<div className="txt">
        							하단의 분석상황 조회 버튼을 통해 진행 상황을 확인하실 수 있습니다.
        						</div>
        					</div>
        				</div>
        				<div className="stepbox-2-btn-wrap">
        					<Link className="goback" to="." onClick={hashHistory.goBack}>뒤로 가기</Link>
        					<Link className="gotostep" to="../3">다음 단계로</Link>
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

export default Step2;
