import React from 'react';
import PlusPortfolio from './Portfolio/PlusPortfolio';
import MinusPortfolio from './Portfolio/MinusPortfolio';
import axios from 'axios';
import BACKEND_URL from '../config';

class Portfolios extends React.Component {

    constructor(props) {
    super(props);
        this.state = {
            data:null,
            err_msg:null,
        };
    }

    componentDidMount() {
        this.pfList().then((res) => this.setState({data:res.data.data, err_msg:res.data.e_msg.message}))
    }

    pfList() {
        let token = 'JWT' + sessionStorage.getItem('access_token');
        return axios.get(BACKEND_URL + "/vc/pflist", {
            headers: {
                'Authorization': token
            }
        })
  	}

    renderPortfolios(dfn, dstat, drunway, dabm, dcr, dfid) {
        const plmidrunway = ((drunway > 0) ? true : false);
        return ( plmidrunway ?
                    <PlusPortfolio key={dfid}
                        dfn={dfn}
                        dstat={dstat}
                        drunway={drunway}
                        dabm={dabm}
                        dcr={dcr}
                        dfid={dfid}
                    />
                :  <MinusPortfolio key={dfid}
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

            );
        }
        else {
            return (
                <div className="contents">
                    <h2>{this.state.err_msg}</h2>
                </div>
            )
        }
    }
}

export default Portfolios;
