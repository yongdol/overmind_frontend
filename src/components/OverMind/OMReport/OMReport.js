import React, {Component} from 'react';
import C3Chart from 'react-c3js';
import {mdReact} from 'markdown-react-js';
import 'c3/c3.css';
import * as $ from "jquery";
import axios from "axios";

class OMReport extends Component {

    constructor(props) {
    super(props);
        this.state = {
            data:null,
        };
    }

    componentWillMount() {
        this.getReport().then((res) => this.setState({data:res.data.data, e_msg:res.e_msg}))
        // const values = this.getReport();
        // this.setState({data: values.data, e_msg: values.e_msg.message});
    }

    getReport() {
        // let result = null;
        let token = 'JWT' + sessionStorage.getItem('access_token');
        // let data = this.props.fid;
        // $.ajax({
        //     url: "https://13.124.106.247/overmind/report",
            // url: "http://localhost:5505/api/overmind/report",
            // method: "get",
            // headers: {
            //     Authorization: token
            // },
            // data: {
            //     pf_id: this.props.fid
            // },
            // async: false,
        // }).done((res) => {
        //     result = res;

        // });
        // return result;
        return axios.get("http://localhost:5505/api/overmind/report", {
                headers: {
                    Authorization: token
                },
                params: {
                    pf_id: this.props.fid
                }
        });
    }

    renderCol(item, type) {
        switch (type) {
            case 'th':
                return <th>{item}</th>;
            case 'td':
            default:
                return <td>{item}</td>;
        }
    }

    renderRow(obj) {
        // var answer = new Array();
        const answer = [];
        for (const key in obj) {
            if (key === "") {
                continue;
            } else {
                answer.push(
                    <tr>
                        <td>{key}</td>
                        {obj[key].map((item) => this.renderCol(item, 'td'))}
                    </tr>
                );
            }
        }
        return answer;
    }

    printmap(obj) {
        switch (obj.form) {
            case "markdown":
                return (
                    <div>
                        <h2 className="report-h2">{obj.title}</h2>
                        <div>{mdReact()(obj.markdown)}</div>
                    </div>
                );

            case "graph":
                return (
                    <div>
                        <h2 className="report-h2">{obj.title}</h2>
                        <C3Chart data={obj.data} axis={obj.axis} point={obj.point}/>
                    </div>
                );

            case "table":
                var tab = obj.data[0];

                return (
                    <div>
                        <h1></h1>
                        <h2 className="report-h2">{obj.title}</h2>
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                {tab[""].map((x) => (this.renderCol(x, "th")))}
                            </tr>
                            </thead>
                            <tbody>
                            {this.renderRow(tab)}
                            </tbody>
                        </table>
                    </div>
                );

            default:
                return <div>Error! {obj.form}</div>;
        }
    }

    render() {
        // if (this.state.data) {
        if (this.state) {
        //     let data = eval('(' + this.state.data[0]['big_json'] + ')');
            let data = eval('(' + this.state.data.big_json + ')');

            return (
                <div className="contents">
                    <div></div>
                    <h1></h1>
                    <h2 className="report-h2">{data.title}</h2>
                    <div>
                        {
                            data.body.map((obj) => (this.printmap(obj)))
                        }
                    </div
                    >
                </div>
            );
        }
        else {
            return (
                <div className="contents">
                    <h2>{this.state.e_msg}</h2>
                </div>);
        }
    }
}


export default OMReport;