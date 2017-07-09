import React, {Component} from 'react';
//import {Link} from 'react-router';
import {Link} from 'react-router-relative-link';
//import {Search, Sidebar} from '../../components';

class Header extends Component {

  render () {
    const isLoggedIn = (sessionStorage.getItem('access_token') ? true : false);

    const guestHeader = (
      <div className="header">
        <div className="headerWrap">
      		<div className="leftheader beforelogin">
      			<div className="iconHamburger" href="#" onClick="">
              <Link to="./sidebar"><img src="/img/icon_hamburger.png" width="30" height="30" alt="drawer" title="메뉴" /></Link>
            </div>
      			<div className="iconSearch" href="#" onClick="">
              <Link to="./search"><img src="/img/icon_search.png" width="30" height="30" alt="search" title="검색" /></Link>
            </div>
      		</div>
      		<div className="logo">
      			<div className="logoFrisk" href="#">
              <Link to="/">
                <img src="/img/logo_frisk.png" width="83" height="30" alt="frisk" title="FRISK" />
              </Link>
            </div>
      		</div>
          <div className="rightheader">
            <p className="areyoumember">ARE YOU MEMBER?</p>
            <div className="registerlogin" href="#">
              <Link to="./login">REGISTER / LOGIN</Link>
            </div>
            <div className="iconRegisterlogin" href="#">
              <img src="/img/icon_signin.png" width="30" height="30" alt="login" title="가입/로그인" />
            </div>
          </div>
      	</div>
      </div>
    );

    const memberHeader = (
      <div className="header">
        <div className="headerWrap">
      		<div className="leftheader">
      			<div className="iconHamburger" href="#">
              <Link to="./sidebar"><img src="/img/icon_hamburger.png" width="30" height="30" alt="drawer" title="메뉴" /></Link>
            </div>
      			<div className="iconSearch" href="#">
              <Link to="./search"><img src="/img/icon_search.png" width="30" height="30" alt="search" title="검색" /></Link>
            </div>
      		</div>
      		<div className="logo">
      			<div className="logoFrisk" href="#">
              <Link to="/">
                <img src="/img/logo_frisk.png" width="83" height="30" alt="frisk" title="FRISK" />
              </Link>
            </div>
      		</div>
          <div className="rightheader">
            <div className="iconMypage" href="#">
              <Link to="/mypage">
                <img src="/img/icon_mypage.png" width="30" height="30" alt="mypage" title="마이페이지" />
              </Link>
            </div>
            <a className="iconSignout" href="#" onClick={() => {sessionStorage.clear(); location.href='/'; return;}}>
              <img src="/img/icon_signout.png" width="30" height="30" alt="signout" title="로그아웃" />
            </a>
          </div>
      	</div>
      </div>
    );

    return (isLoggedIn ? memberHeader : guestHeader);
  }
}

class DarkHeader extends Component {
  render () {
    return (
      <div className="header dark">
      	<div className="headerWrap">
      		<div className="leftheader">
      			<div className="iconHamburger" href="#">
              <Link to="./sidebar"><img src="/img/icon_hamburger_white.png" width="30" height="30" alt="drawer" title="메뉴" /></Link>
            </div>
      			<div className="iconSearch" href="#">
              <Link to="./search"><img src="/img/icon_search_white.png" width="30" height="30" alt="search" title="검색" /></Link>
            </div>
      		</div>
      		<div className="logo">
      			<div className="logoFrisk" href="#"><Link to="/"><img src="/img/logo_frisk_white.png" width="83" height="30" alt="frisk" title="FRISK" /></Link></div>
      		</div>
      		<div className="rightheader">
      			<div className="iconMypage" href="#">
              <Link to="/mypage"><img src="/img/icon_mypage_white.png" width="30" height="30" alt="mypage" title="마이페이지" /></Link>
            </div>
      			<div className="iconSignout" onClick={() => {sessionStorage.clear(); location.href='/';}}>
              <img src="/img/icon_signout_white.png" width="30" height="30" alt="signout" title="로그아웃" />
            </div>
      		</div>
      	</div>
      </div>
    );
  }
}

export {Header, DarkHeader};
