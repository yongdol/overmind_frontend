import React from 'react';
import PlusPortfolio from './Portfolio/PlusPortfolio';
import MinusPortfolio from './Portfolio/MinusPortfolio';
import $ from 'jquery';
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
    // getInitialState () {
    //     return ({
    //         data: null
    //     });
    // }

    componentDidMount() {
    // componentDidMount() {
        this.pfList().then((res) => this.setState({data:res.data.data, err_msg:res.data.e_msg.message}))
        // this.pfList().then(res => console.log(res.data.e_msg.message))
        // this.pfList().then(response => { console.log(response); } )
                     // .catch((res) => this.setState({e_msg:res.data}));
                     // .catch(response => { console.log(response); } );
        // const values = this.pfList();
        // this.setState({data: values.data, e_msg: values.e_msg.message});
        // console.log("data",this.state.data);
        // console.log("data",this.state.e_msg);
    }

    pfList() {
        // let result = null;
        let token = 'JWT' + sessionStorage.getItem('access_token');

        // $.ajax({
        //     // url: "https://13.124.106.247/overmind/vc/pflist",
        //     url: "http://localhost:5505/api/overmind/vc/pflist",
        //     method: "get",
        //     headers: {
        //         Authorization: token
        //     },
        //     async: false
        // }).done((res) => {
        //     result = res;
        // });
  		// return result;
        // return axios.get("http://localhost:5505/api/overmind/vc/pflist", {
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
            console.log("im render 1");
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
            console.log("im render 2");
            return (
                <div className="contents">
                    <h2>{this.state.err_msg}</h2>
                </div>
            )
        }
    }
}

export default Portfolios;
