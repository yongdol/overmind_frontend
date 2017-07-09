import React from 'react';

const MinusPortfolio = ({dfn, dstat, drunway, dabm, dcr}) => {

    return (
        <div className="portfolio-wrap">
            <div className="portfolio-container">
                <p className="name-red">{dfn}</p>
                <hr color="red"/>
                <p className="remain-month-red">남은기간 : {drunway}개월</p>
                <p className="monthly-use">한달사용금액 : {dabm} 원</p>
                <p className="remain-money">남은금액 : {dcr} 원</p>
                <p className="remain-money">상태 : {dstat}</p>
            </div>
        </div>
    );
}



export default MinusPortfolio;