import React, {Component} from 'react';
import {Link} from "react-router";
import OMAccountManage from "../OMAccountManage/OMAccountManage"

class OMAccount extends Component {
    render() {
        const firm_id = sessionStorage.getItem('firm_id');
        return (
            <div className="contents">
                <div>
                    <p>수집된 은행 거래내역 데이터가 없습니다.</p>
                    <p>은행 거래내역 데이터를 입력해 주세요.</p>
                    <Link to={"/overmind/account/manage/" + firm_id}>
                        <button>
                            데이터 수집 설정하기
                        </button>
                    </Link>
                </div>
                <div>
                    <p>연동된 기관회원(투자자)이 없습니다.</p>
                    <p>기관회원을 연동해 주세요.</p>
                    <Link>
                        <button>
                            기관회원 연동 화면으로 이동
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

}

export default OMAccount;