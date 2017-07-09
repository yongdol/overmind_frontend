import React from 'react';


const PlusPortfolio = ({dfn, dstat, drunway, dabm, dcr}) => {
    return (
        <div className="portfolio-wrap">
            <div className="portfolio-container">
                <p className="name">{dfn}</p>
                <hr/>
                <p className="remain-month">남은기간 : {drunway}개월</p>
                <p className="monthly-use">한달사용금액 : {dabm} 원</p>
                <p className="remain-money">남은금액 : {dcr} 원</p>
                <p className="remain-money">상태 : {dstat} </p>
            </div>
        </div>
    );
};


export default PlusPortfolio;