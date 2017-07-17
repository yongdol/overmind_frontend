import React, {Component} from 'react';
import {Link} from "react-router-relative-link";

class OMMain extends Component {

    render() {
        const isLoggedIn = (sessionStorage.getItem('access_token') ? true : false);
        const member_type = sessionStorage.getItem('member_type');
        const firm_id = sessionStorage.getItem('firm_id');
        const vclogin = (
            <div className="contents">
                <h1> {member_type} login success!!</h1>
                <Link to="vc/pflist">포트폴리오 대시보드가기</Link>
            </div>
        );

        const portcologin = (
            <div className="contents">
                <h1> {member_type} login success!!</h1>
                <p>
                    <Link to={"report/" + firm_id}>대시보드가기</Link>
                </p>
                <p>
                    <Link to={"account/" + firm_id}>자산현황관리</Link>
                </p>
            </div>
        );

        const notlogin = (
            <div className="contents">
                <h1 className="main">OverMind Main Page, Login or Regiser please :)</h1>
            </div>
        );

        return (
            isLoggedIn ? (member_type==='vc' ? vclogin : portcologin) : notlogin);
    }
}

export default OMMain;