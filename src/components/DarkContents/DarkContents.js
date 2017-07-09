import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';


class DarkContents extends Component {
  getNumOrder () {
    const token = 'JWT ' + sessionStorage.getItem('access_token');
    const auth = axios.get("https://api.frisk.rocks/mypage/purchase",
                      {headers:
                        {Authorization: token}});
    return auth.then((res) => sessionStorage.setItem('numorder', res.data.data.length));
  }

  getNumAuth () {
    const token = 'JWT ' + sessionStorage.getItem('access_token');
    const order = axios.get("https://api.frisk.rocks/auth/list",
                       {headers:
                         {Authorization: token}});
    return order.then((res) => sessionStorage.setItem('numauth', res.data.data.length));
  }

  render () {
    this.getNumAuth();
    this.getNumOrder();
    return (
      <div className="contents darkcontents">
        <div className="helloUser helloUser-align">
          <p className="mypage-hello">Hello</p>
          <p className="mypage-userid">{sessionStorage.getItem('id')}</p>
        </div>
        <div className="mypage-menu-wrap">
          <div className="mypage-myorder">
            <div className="mypage-myorder-count">{sessionStorage.getItem('numorder')}</div>
            <Link to="/mypage/myorder">주문내역</Link>
          </div>
          <div className="mypage-myauthentication">
            <div className="mypage-myauthentication-count">{sessionStorage.getItem('numauth')}</div>
            <Link to="/mypage/myauth">인증현황</Link>
          </div>
          <div className="mypage-mylikes">
            <div className="mypage-mylikes-count">0</div>
            <Link to="/mypage/mylikes">좋아요</Link>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="mysetting">
          <a className="iconsetting" href="#">
            <img src="/img/icon_setting.png" width="30" height="30" alt="setting" title="회원정보 수정" />
          </a>
        </div>
      </div>
    );
  }
}

export default DarkContents;
