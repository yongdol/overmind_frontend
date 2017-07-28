import React, {Component} from 'react';
import {Link} from "react-router";

class OMPcHeader extends Component {

    render() {
        const firm_id = sessionStorage.getItem('firm_id');
        const member_type = sessionStorage.getItem('member_type');
        if (member_type === 'portco') {
            return (
                <div className="darkconheader">
                    <div className="helloUser helloUser-align">
                        <p className="mypage-hello">Hello</p>
                        <p className="mypage-userid">{sessionStorage.getItem('id')}</p>
                    </div>
                    <div className="mypage-menu-wrap">
                        <div className="mypage-myorder">
                            <div className="mypage-myorder-count"></div>
                            <Link to={"/overmind/report/" + firm_id}>대시보드가기</Link>
                        </div>
                        <div className="mypage-myorder">
                            <div className="mypage-myorder-count"></div>
                            <Link to={"/overmind/account/" + firm_id}>계좌관리</Link>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="mysetting">
                        <Link className="iconsetting">
                            <img src="/img/icon_setting.png" width="30" height="30" alt="setting" title="회원정보 수정"/>
                        </Link>
                    </div>
                </div>
            );
        } else {
            return (
            <div className="darkconheader">
                <div className="helloUser helloUser-align">
                    <p className="mypage-hello">Hello</p>
                    <p className="mypage-userid">{sessionStorage.getItem('id')}</p>
                </div>

                <div className="mypage-menu-wrap">
                    <div className="mypage-myorder">
						<div className="mypage-myorder-count"></div>
						<Link to="/overmind/vc/pflist">포트폴리오 확인하기</Link>
					</div>
                    <div className="clearfix"></div>
                </div>
                <div className="mysetting">
                    <Link className="iconsetting">
                        <img src="/img/icon_setting.png" width="30" height="30" alt="setting" title="회원정보 수정"/>
                    </Link>
                </div>
            </div>
            )
        }

    }
}

export default OMPcHeader;