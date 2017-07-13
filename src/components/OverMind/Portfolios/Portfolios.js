import React from 'react';
import PlusPortfolio from './Portfolio/PlusPortfolio';
import MinusPortfolio from './Portfolio/MinusPortfolio';
import $ from 'jquery';


class Portfolios extends React.Component {

    getInitialState () {
        return ({
            data: null
        });
    }

    componentWillMount() {
        const values = this.serviceList();
        this.setState({data: values.data, e_msg: values.e_msg.message});
    }

    serviceList() {
        let result = null;
        let token = 'JWT' + sessionStorage.getItem('access_token');

        $.ajax({
            url: "http://localhost:5505/api/overmind/vc/pflist",
            method: "get",
            headers: {
                Authorization: token
            },
            async: false
        }).done((res) => {
            result = res;
            console.log('res', res);
        });
  		return result;
  	}

    renderPortfolios(dfn, dstat, drunway, dabm, dcr, dfid) {
        const plmidrunway = ((drunway > 0) ? true : false);
        return ( plmidrunway ?
                    <PlusPortfolio
                        dfn={dfn}
                        dstat={dstat}
                        drunway={drunway}
                        dabm={dabm}
                        dcr={dcr}
                        dfid={dfid}
                    />
                :  <MinusPortfolio
                        dfn={dfn}
                        dstat={dstat}
                        drunway={drunway}
                        dabm={dabm}
                        dcr={dcr}
                        dfid={dfid}
                    />

        )
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

	render() {
        if (this.state.data) {
            return (
                <div className="portfolio">
                    <div>
                        {
                            this.state.data.map(
                                (item) => {
                                    return this.renderPortfolios(
                                        item.firm_name,
                                        item.status,
                                        item.runway.toString().slice(0, 4),
                                        this.numberWithCommas(item.avg_burn_mon),
                                        this.numberWithCommas(item.cash_remaining),
                                        item.firm_id)
                                }
                            )
                        }
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="contents">
                    <h2>{this.state.e_msg}</h2>
                </div>
            )
        }
    }
}

export default Portfolios;
