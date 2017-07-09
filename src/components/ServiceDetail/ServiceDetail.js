import React, {Component} from 'react';
import {Link} from 'react-router-relative-link';
import axios from 'axios';
import $ from 'jquery';

class ServiceDetail extends Component {

  componentWillMount() {
    this.serviceList().then( (res) => this.setState( {data:res.data.data} ) )
  }

  serviceList() {
    return axios.get("https://api.frisk.rocks/service/detail?service_id=" + this.props.serviceid);
  }

  animate () {
    $(document).ready(function(){
      $(".sticky-widget").hide();//하단 스티키 위젯 숨기기
      $('.sectionHandler').css("position","initial");
      $(function(){
        $(window).scroll(function(){
          if($(this).scrollTop()<850){
            $('.sticky-widget').fadeOut();
            $('.sectionHandler').css("position","initial");
            $('.sectionHandler').css("padding","50px 0px");
            $('.toDetailExplanation').removeClass("currentSection");
          }else if(($(this).scrollTop()>850)&&($(this).scrollTop()<2300)){
            $('.sticky-widget').fadeIn();
            $('.sectionHandler').css("position","fixed");
            $('.sectionHandler').css("padding","15px 0px");
            $('.toDetailExplanation').addClass("currentSection");
            $('.toWhoLikes').removeClass("currentSection");

          }else if(($(this).scrollTop()>2300)&&($(this).scrollTop()<3000)){
            $('.toDetailExplanation').removeClass("currentSection");
            $('.toWhoLikes').addClass("currentSection");
            $('.toRelatedServices').removeClass("currentSection");
          }else if($(this).scrollTop()>3000){
            $('.toDetailExplanation').removeClass("currentSection");
            $('.toWhoLikes').removeClass("currentSection");
            $('.toRelatedServices').addClass("currentSection");
          }
      });  //y값 따라 하단 스티키 위젯 나타나게, 섹션핸들러 색상
    });
  });

  }

  render () {
    //console.log(this.props.serviceid);
    if (this.state) {
      const result = (
        <div className="contents">
          <div className="sticky-widget">
            <div className="toTop">
              <a href="#wrap" className="icon-totop"><img src="img/toTop.png" width="60px" height="60px" role="presentation"/></a>
            </div>
            <div className="sticky-buy-bar">
              <div className="sticky-item-name">[### Lorem Ipsum]</div>
              <a className="sticky-btn-buy" href="#"><img src="img/icon-buy-white.png" width="20px" height="20px" role="presentation"/><span>구매하기</span></a>
              <a className="sticky-btn-like" href="#"><img src="img/icon-like-white.png" width="20px" height="20px" role="presentation"/><span>좋아요</span></a>
            </div>
          </div>

        	<div id="wrap" className="wrap">
        		<div className="infoWrap">
        			<div className="featuredImage">
        				<div className="featuredWrap">
        					<div className="featuredImgTitle">{this.state.data.service_name}</div>
        					<img src={this.state.data.dimg} role="presentation"/>
        				</div>
        			</div>
        			<div className="serviceInfo">
        				<div className="serviceInfoTitle">{this.state.data.dtext}</div>
        				<div className="serviceNumber">{this.state.data.id}</div>
        				<div className="serviceSummary">{this.state.data.descr}</div>
        				<div className="serviceDetail">
        					<div className="lf-selling">누적 판매량</div>
        					<div className="rt-selling">0,000 회</div>
        					<div className="lf-popular">인기도</div>
        					<div className="rt-popular"><img src="img/pop-r-1.png" role="presentation"/><img src="img/pop-o-1.png" role="presentation"/><img src="img/pop-c-1.png" role="presentation"/><img src="img/pop-k-1.png" role="presentation"/><img src="img/pop-s-0.png" role="presentation"/></div>
        					<div className="lf-duration">평균 분석 기간</div>
        					<div className="rt-duration">00분</div>
        					<div className="lf-data">필요 데이터</div>
        					<div className="rt-data"><img src="img/icon-fa.png" role="presentation"/></div>
        					<div className="clearfix"></div>
        				</div>
        				<div className="btnService">
        					<Link className="btnItemOrder" to="./purchase/1"><img src="img/icon-buy-white.png" width="25px" height="25px" role="presentation"/><span>구매하기</span></Link>
        					<a className="btnLike" href="#"><img src="img/icon-like-white.png" width="20px" height="20px" role="presentation"/><span>좋아요</span></a>
        					<a className="btnShare" href="#"><img src="img/icon-share-white.png" width="20px" height="20px" role="presentation"/><span>공유하기</span></a>
        				</div>
        			</div>
        			<div className="clearfix"></div>
        		</div>
        		<div className="sectionHandler">
        			<a className="toDetailExplanation" href="#detailExplanation">상세 설명</a>
        			<a className="toWhoLikes" href="#whoLikes">누가 누가 좋아하나</a>
        			<a className="toRelatedServices" href="#relatedServices">추천 상품</a>
        		</div>
        		<div id="detailExplanation">
        			<div className="detailExplanation-txt-wrap">
        				<div className="detailExplanation-txt-01">
        					<h1 className="detailExplanation-h1">01</h1>
        					<p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis eget lorem et fringilla. Morbi et enim justo. Aenean id elit a turpis eleifend pretium sit amet mollis felis. Proin nisi metus, pretium eget condimentum id, venenatis quis diam. In eget ante nisl. Mauris quis dui ac nibh ornare vulputate non id leo. Phasellus at magna fringilla, rutrum sapien eu, elementum ipsum. Duis suscipit lacinia purus, vel sagittis mi.</p>
        				</div>
        				<div className="detailExplanation-txt-0204">
        					<div className="detailExplanation-txt-02">
        						<h1 className="detailExplanation-h1">02</h1>
        						<ul><h3 className="detailExplanation-h3">목차</h3>
        						<li>1. 0000</li>
        						<li>1.1. 00000</li>
        						<li>1.2. 000</li>
        						<li>2. 0000</li>
        						<li>2.1. 00000</li>
        						<li>2.2. 00000</li>
        						<li>3. 0000</li>
        						<li>3.1. 00</li>
        						<li>3.2. 00000000</li>
        						</ul>
        					</div>
        					<div className="detailExplanation-txt-04">
        						<h1 className="detailExplanation-h1">04</h1>
        						<h3 className="detailExplanation-h3">만든이</h3>
        						<p>MS Kim</p>
        						<h3 className="detailExplanation-h3">업데이트</h3>
        						<p>0000-00-00</p>
        					</div>
        				</div>
        				<div className="detailExplanation-txt-0305">
        					<div className="detailExplanation-txt-03">
        						<h1 className="detailExplanation-h1">03</h1>
        						<h3 className="detailExplanation-h3">데이터명</h3>
        						<p>페이스북</p>
        						<h3 className="detailExplanation-h3">최소 조건</h3>
        						<p>최소 7일 이상 페이스북 포스트 기록</p>
        					</div>
        					<div className="detailExplanation-txt-05">
        						<h1 className="detailExplanation-h1">05</h1>
        						<h3 className="detailExplanation-h3">키워드</h3>
        						<p>#000  #0000  #0000  #000</p>
        					</div>
        				</div>
        			</div>
        			<div className="detailExplanation-img">
        			<img src="img/detail-img-1.png" role="presentation"/>
        			<img src="img/detail-img-2.png" role="presentation"/>
        			</div>
        		</div>
        		<div id="whoLikes">
        			<div className="icon-whoLikes-wrap">
        				<h2>이 서비스를 구매하는 주요 고객은</h2>
        				<img src="img/icon-wholikes-man.png" role="presentation"/>
        				<img src="img/icon-wholikes-20s.png" role="presentation"/>
        				<img src="img/icon-wholikes-student.png" role="presentation"/>
        			</div>
        			<div className="press-wrap">
        				<h2>관련 기사</h2>
        				<table>
        					<thead>
        						<tr>
        							<th>구분</th>
        							<th>제목</th>
        							<th>출처</th>
        						</tr>
        					</thead>
        					<tbody>
        						<tr>
        							<td>1</td>
        							<td><a href="#">"잉여력을 측정해주마"사용 고객의 60% 직장 내 승진도 높아져</a></td>
        							<td>블로터</td>
        						</tr>
        						<tr>
        							<td>2</td>
        							<td><a href="#">SNS 사용량과 커뮤니케이션 능력의 연관성이 밝혀졌다</a></td>
        							<td>ZD Net Korea</td>
        						</tr>
        						<tr>
        							<td>3</td>
        							<td><a href="#">[SNS]직장 내 페이스북 사용에 대한 고찰</a></td>
        							<td>디지털 타임즈</td>
        						</tr>
        					</tbody>
        				</table>
        			</div>
        		</div>
        		<div id="relatedServices">
        			<h2>추천 상품</h2>
        			<div className="relatedServices-Wrap">
        				<div className="related-single-service">

        					<img src="img/relatedservice-img.png" role="presentation"/>
        					<div className="related-single-rollover">
        						<h3>Lorem Ipsum</h3>
        						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque neque, convallis ut egestas nec, efficitur [...]</p>
        					</div>
        				</div>
        				<div className="related-single-service">

        					<img src="img/relatedservice-img.png" role="presentation"/>
        					<div className="related-single-rollover">
        						<h3>Lorem Ipsum</h3>
        						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque neque, convallis ut egestas nec, efficitur [...]</p>
        					</div>
        				</div>
        				<div className="related-single-service">

        					<img src="img/relatedservice-img.png" role="presentation"/>
        					<div className="related-single-rollover">
        						<h3>Lorem Ipsum</h3>
        						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque neque, convallis ut egestas nec, efficitur [...]</p>
        					</div>
        				</div>
        				<div className="related-single-service">

        					<img src="img/relatedservice-img.png" role="presentation"/>
        					<div className="related-single-rollover">
        						<h3>Lorem Ipsum</h3>
        						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque neque, convallis ut egestas nec, efficitur [...]</p>
        					</div>
        				</div>
        				<div className="clearfix"></div>
        			</div>
        		</div>
        	</div>
        </div>
      );
      this.animate();
      return result;
    } else {
      return (
        <div>Loading ... </div>
      );
    }
  }
}
/*
*/

export default ServiceDetail;
