import React, {Component} from 'react';
import axios from 'axios';
import C3Chart from 'react-c3js';
import { mdReact } from 'markdown-react-js';
import 'c3/c3.css';

class Report extends Component {

  getInitialState () {
      return ( { data:null } )
  }

  componentWillMount() {
      this.serviceList()
        .then( (res) => this.setState( {data:res.data.data}));
  }

  serviceList() {
    const token = 'JWT ' + sessionStorage.getItem('access_token');
   return axios.get("https://api.frisk.rocks/mypage/purchase/report",
                      {headers: {Authorization: token},
                       params: {job_id: this.props.oid}});
  }


  renderCol (item, type) {
    switch (type) {
      case 'th':
        return <th>{item}</th>;
      case 'td':
      default:
        return <td>{item}</td>;
    }
  }


  renderRow (obj) {
    var answer = [];
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


  printmap (obj) {
    //console.log(obj);
    switch(obj.form) {
      case "markdown":
        return (
          <div>
            <h2>{obj.title}</h2>
            <div>{mdReact()(obj.markdown)}</div>
          </div>
        );

      case "graph":
        return (
          <div>
            <h2>{obj.title}</h2>
            <C3Chart data={obj.data} axis={obj.axis} point={obj.point}/>
          </div>
        );

      case "table":
        var tab = obj.data[0];

        return (
          <div>
            <h1></h1>
            <h2>{obj.title}</h2>
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

  render () {
    if (this.state) {
      var data = eval('(' + this.state.data.big_json + ')');
      //console.log(data);

      return (
        <div className="contents">
          <div></div>
          <h1></h1>
          <h2>{data.title}</h2>
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
      return (<div></div>);
    }
  }
}
export default Report;
