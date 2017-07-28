import React, {Component} from 'react';
import {Link} from "react-router";

class OMVcHeader extends Component {
    render() {
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
        );
    }
}

export default OMVcHeader;