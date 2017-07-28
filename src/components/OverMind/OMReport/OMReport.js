import React, {Component} from "react";
import C3Chart from "react-c3js";
import {mdReact} from "markdown-react-js";
import "c3/c3.css";
import axios from "axios";
import BACKEND_URL from "../config";

/* eslint no-eval: 0 */
class OMReport extends Component {

    constructor(props) {
    super(props);
        this.state = {
            data:null,
        };
    }

    componentDidMount() {
        this.getReport().then((res) => this.setState({data:res.data.data, e_msg:res.e_msg}))
    }

    getReport() {
        let token = 'JWT' + sessionStorage.getItem('access_token');
        return axios.get(BACKEND_URL + "/report", {
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

    printmap(obj, i) {
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
                    <div key={i}>
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
        if (this.state.data) {
            let data = eval('(' + this.state.data[0]['big_json'] + ')');
            // let data = '(' + this.state.data[0]['big_json'] + ')';
            // console.log(data)
            return (
                <div>
                    <div className="report-contents">
                        <div></div>
                        <h1></h1>
                        <h2 className="report-h2">{data.title}</h2>
                        <div>
                            {
                                data.body.map((obj, i) => (this.printmap(obj, i)))
                            }
                        </div
                        >
                    </div>
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