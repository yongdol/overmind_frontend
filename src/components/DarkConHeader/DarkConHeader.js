import React, {Component} from 'react';
import {Link} from 'react-router-relative-link';
//import axios from 'axios';


class DarkConHeader extends Component {

  render () {
    return (
      <div className="darkconheader">
    		<div className="helloUser helloUser-align">
    			<p className="mypage-hello">Hello</p>
    			<p className="mypage-userid">{sessionStorage.getItem('id')}</p>
    		</div>
    		<div className="mypage-menu-wrap">
    			<div className={"mypage-myorder" + (this.props.current === "order" ? " current-mypagesection" : "")}>
            <div className="mypage-myorder-count"></div>
    				<Link to="/mypage/myorder">주문내역</Link>
    			</div>
    			<div className={"mypage-myauthentication" + (this.props.current === "auth" ? " current-mypagesection" : "")}>
    				<div className="mypage-myauthentication-count"></div>
    				<Link to="/mypage/myauth">인증현황</Link>
    			</div>
    			<div className={"mypage-mylikes" + (this.props.current === "likes" ? " current-mypagesection" : "")}>
    				<div className="mypage-mylikes-count"></div>
    				<Link to="/mypage/mylikes">좋아요</Link>
    			</div>
    			<div className="clearfix"></div>
    		</div>
    		<div className="mysetting">
    			<Link className="iconsetting" to="./passwordcheck">
            <img src="/img/icon_setting.png" width="30" height="30" alt="setting" title="회원정보 수정" />
          </Link>
    		</div>
    	</div>
    );
  }
}

export default DarkConHeader;
