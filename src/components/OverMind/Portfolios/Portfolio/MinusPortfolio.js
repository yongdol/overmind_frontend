import React from 'react';
import {Link} from "react-router-relative-link";

const MinusPortfolio = ({dfid, dfn, dstat, drunway, dabm, dcr}) => {

    return (
        <div className="portfolio-wrap">
            <Link to={"/overmind/report/" + dfid }>
                <div className="portfolio-container">
                    <p className="name-red">{dfn}</p>
                    <p className="remain-month-red">남은기간 : {drunway}개월</p>
                    <p className="monthly-use">한달사용금액 : {dabm} 원</p>
                    <p className="remain-money">남은금액 : {dcr} 원</p>
                    <p className="remain-money">상태 : {dstat}</p>
                </div>
            </Link>
        </div>
    );
}



export default MinusPortfolio;