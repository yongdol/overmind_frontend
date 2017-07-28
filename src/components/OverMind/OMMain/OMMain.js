import React, {Component} from 'react';
import OMVcHeader from "../OMHeader/OMVcHeader";
import OMPcHeader from "../OMHeader/OMPcHeader";

class OMMain extends Component {

    render() {
        const isLoggedIn = (sessionStorage.getItem('access_token') ? true : false);
        const member_type = sessionStorage.getItem('member_type');
        const notlogin = (
            <div className="contents">
                <h1 className="main">OverMind Main Page, Login or Register please :)</h1>
            </div>
        );
        return (
            isLoggedIn ? (member_type==='vc' ? <OMVcHeader/> : <OMPcHeader/>) : notlogin);
    }
}

export default OMMain;