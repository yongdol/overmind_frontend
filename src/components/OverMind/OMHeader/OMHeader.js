import React , {Component} from 'react';
import {Link} from 'react-router';

class OMHeader extends Component {
    render () {

        const isLoggedIn = (sessionStorage.getItem('access_token') ? true : false);
        const member_type = sessionStorage.getItem('member_type');
        const fid = sessionStorage.getItem('firm_id');

        const guestHeader = (
            <div className="header">
                <div className="headerWrap">
                    <div className="leftheader beforelogin">
                        <div className="iconHamburger" href="#" onClick="">
                            <Link to="./sidebar">
                                <img src="/img/icon_hamburger.png" width="30" height="30" alt="drawer" title="메뉴"/>
                            </Link>
                        </div>
                        <div className="iconSearch" href="#" onClick="">
                            <Link to="./search">
                                <img src="/img/icon_search.png" width="30" height="30" alt="search" title="검색"/>
                            </Link>
                        </div>
                    </div>
                    <div className="logo">
                        <Link to="/overmind">
                            <h1 className="headerlogo">
                                Over Mind
                            </h1>
                        </Link>
                    </div>
                    <div className="rightheader">
                        <p className="areyoumember">ARE YOU MEMBER?</p>
                        <div className="registerlogin" href="#">
                            <Link to="/overmind/login">REGISTER / LOGIN</Link>
                        </div>
                        <div className="iconRegisterlogin" href="#">
                            <img src="/img/icon_signin.png" width="30" height="30" alt="login" title="가입/로그인"/>
                        </div>
                    </div>
                </div>
            </div>
        );

        const VcMemberHeader = (
            <div className="header">
                <div className="headerWrap">
                    <div className="leftheader">
                        <div className="iconHamburger" href="#">
                            <Link to="./sidebar"><img src="/img/icon_hamburger.png" width="30" height="30" alt="drawer" title="메뉴"/></Link>
                        </div>
                        <div className="iconSearch" href="#">
                            <Link to="./search"><img src="/img/icon_search.png" width="30" height="30" alt="search" title="검색"/></Link>
                        </div>
                    </div>
                    <div className="logo">
                        <Link to="/overmind/vf/pflist">
                            <h1 className="headerlogo">
                                Over Mind
                            </h1>
                        </Link>
                    </div>
                    <div className="rightheader">
                        <div className="iconMypage" href="#">
                            <Link to="/mypage">
                                <img src="/img/icon_mypage.png" width="30" height="30" alt="mypage" title="마이페이지"/>
                            </Link>
                        </div>
                        <a className="iconSignout" href="#" onClick={() => {
                            sessionStorage.clear();
                            location.href = '/';
                            return;
                        }}>
                            <img src="/img/icon_signout.png" width="30" height="30" alt="signout" title="로그아웃"/>
                        </a>
                    </div>
                </div>
            </div>
        );

        const PcMemberHeader = (
            <div className="header">
                <div className="headerWrap">
                    <div className="leftheader">
                        <div className="iconHamburger" href="#">
                            <Link to="./sidebar"><img src="/img/icon_hamburger.png" width="30" height="30" alt="drawer" title="메뉴"/></Link>
                        </div>
                        <div className="iconSearch" href="#">
                            <Link to="./search"><img src="/img/icon_search.png" width="30" height="30" alt="search" title="검색"/></Link>
                        </div>
                    </div>
                    <div className="logo">
                        <Link to={"/overmind/report/" + fid}>
                            <h1 className="headerlogo">
                                Over Mind
                            </h1>
                        </Link>
                    </div>
                    <div className="rightheader">
                        <div className="iconMypage" href="#">
                            <Link to="/mypage">
                                <img src="/img/icon_mypage.png" width="30" height="30" alt="mypage" title="마이페이지"/>
                            </Link>
                        </div>
                        <a className="iconSignout" href="#" onClick={() => {
                            sessionStorage.clear();
                            location.href = '/';
                            return;
                        }}>
                            <img src="/img/icon_signout.png" width="30" height="30" alt="signout" title="로그아웃"/>
                        </a>
                    </div>
                </div>
            </div>
        );
        // console.log(isLoggedIn);
        return (isLoggedIn ? (member_type==='vc' ? VcMemberHeader : PcMemberHeader) : guestHeader);


    }
}




export default OMHeader;
