import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';

const TableRow = ({order_id, service_id, status, try_ended_at, try_started_at}) => {

  return (
    <tr>
      <td>{service_id}</td>
      <td>{order_id}</td>
      <td>###보고서명</td>
      <td>###가격</td>
      <td>###결제정보</td>
      <td>{try_started_at}</td>
      <td>{status==="complete" ? <Link className="btn_checkreport" to={"/report/"+order_id}>보고서보기</Link> : status}</td>
    </tr>
  );
}

// header : {Authorization: 'JWT ' + sessionStorage.getItem('access_token')}
// https://api.frisk.rocks/mypage/purchase
//

class MyOrder extends Component {
  getInitialState () {
      return ({ data:[]})
  }
  componentDidMount() {
      this.orderList()
        .then( (res) => {this.setState({data: res.data.data})});
  }

  orderList() {
    const token = 'JWT ' + sessionStorage.getItem('access_token');
    return axios.get("https://api.frisk.rocks/mypage/purchase",
                      {headers:
                        {Authorization: token}});
  }

  renderTableRow (order_id, service_id, status, try_ended_at, try_started_at) {
     return (<TableRow
       order_id={order_id}
       service_id={service_id}
       status={status}
       try_ended_at={try_ended_at}
       try_started_at={try_started_at}
       />
    );
  }

  render () {
    if (this.state) {
      return (
        <div className="my-table-wrap">
      		<div className="my-table">
      			<table>
      				<thead>
      					<tr>
      						<th>구분</th>
      						<th>주문번호</th>
      						<th>보고서명</th>
      						<th>가격</th>
      						<th>결제정보</th>
      						<th>주문날짜</th>
      						<th>주문상태</th>
      					</tr>
      				</thead>
      				<tbody>
      					{
                  this.state.data.map(
                  ( item ) => {
                     return this.renderTableRow(
                             item.id,
                             item.service_id,
                             item.status,
                             item.try_ended_at,
                             item.try_started_at
                           );
                      }
                  )
                }
      				</tbody>
      			</table>
      		</div>
      	</div>
      );
    } else {return (<div>'Loading'</div>);}
  }
}

export default MyOrder;
