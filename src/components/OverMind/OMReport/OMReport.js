import React, {Component} from 'react';
import C3Chart from 'react-c3js';
import {mdReact} from 'markdown-react-js';
import 'c3/c3.css';
import * as $ from "jquery";
import FileUpload from '../FileUpload/FileUpload';

class OMReport extends Component {

    getInitialState() {
        return ({data: null})
    }

    componentWillMount() {
        const values = this.getReport();
        this.setState({data: values.data, e_msg: values.e_msg.message});
        // console.log('data', values.data);
        // console.log('errormsg', values.e_msg);
    }

    getReport() {
        let result = null;
        let token = 'JWT' + sessionStorage.getItem('access_token');

        $.ajax({
            url: "http://localhost:5505/api/overmind/portco/report",
            method: "get",
            headers: {
                Authorization: token
            },
            async: false
        }).done((res) => {
            result = res;
            // console.log('res', res);
        });
        return result;
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
        var answer = new Array();
        for (var key in obj) {
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
        if (this.state.data) {
            var data = eval('(' + this.state.data.big_json + ')');
            // console.log("data", data);

            return (
                <div className="contents">
                    <div></div>
                    <h1></h1>
                    <h2 className="report-h2">{data.title}</h2>
                    <div>
                        {
                            data.body.map((obj) =>
                                (this.printmap(obj)))
                        }
                    </div>
                </div>

            );
        }

        else {
            return (
                <div className="contents">
                    <h2>{this.state.e_msg}</h2>
                    <FileUpload />
                </div>);
        }
    }
}

export default OMReport;