import React, {Component} from 'react';
import axios from 'axios';


const TableRow = ({acc_type, disp_name, authid}) => {
  return (
    <tr>
      <td>{authid}</td>
      <td>{disp_name}</td>
      <td>{acc_type}</td>
      <td>###</td>
      <td>###</td>
    </tr>
  );
}

class MyAuth extends Component {

  getInitialState () {
      return ({ data:[]})
  }
  componentDidMount() {
      this.serviceList()
        .then( (res) => {this.setState({data: res.data.data})});
  }

  serviceList() {
    const token = 'JWT ' + sessionStorage.getItem('access_token');

   return axios.get("https://api.frisk.rocks/auth/list",
                      {headers:
                        {Authorization: token}});
  }

  renderTableRow (acc_type, disp_name, id) {
     return (<TableRow
        acc_type={acc_type}
        disp_name={disp_name}
        authid={id}
       />
    );
  }

  render () {
    if (this.state) {
      return (
        <div>
          <div className="my-table-wrap">
            <div className="my-table">
              <table>
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>이름</th>
                    <th>상태</th>
                    <th>인증기한</th>
                    <th>발급</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.data.map(
                  ( item ) => {
                     return this.renderTableRow(
                             item.acc_type,
                             item.disp_name,
                             item.id
                           );
                      }
                  )
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div>Loading ...</div>);
    }
  }
}

export default MyAuth;
