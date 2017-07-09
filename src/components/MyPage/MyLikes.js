import React, {Component} from 'react';
import Content from '../Contents/Content/Content';
import Masonry from 'react-masonry-component';
import axios from 'axios';
import $ from 'jquery';

class MyLikes extends Component {
  getInitialState () {
      return ( { data:null } )
  }
  componentDidMount() {
      this.serviceList()
        .then( (res) => this.setState( {data:res.data.data} ) )
  }
  serviceList() {
    return axios.get("https://api.frisk.rocks/service/");
  }

  renderContents (dimg, dtext, descr, dno) {
     return (<Content
              dimg={dimg}
              dtext={dtext}
              descr={descr}
              dno={dno}
             />
            )
  }

  animate () {
    $(document).ready(function(){
     $(".iconLike").css('opacity','0');
     $(".iconShare").css('opacity','0');
     $(".iconAddcart").css('opacity','0');
     $(".single-item-wrap").each(function(){
      $(this).hover(
        function(){
          $(this).find(".iconLike").stop().animate({"opacity":"1"},"1");
          $(this).find(".iconShare").stop().animate({"opacity":"1"},"1");
          $(this).find(".iconAddcart").stop().animate({"opacity":"1"},"1");
        },
        function(){
          $(this).find(".iconLike").stop().animate({"opacity":"0"},"1");
          $(this).find(".iconShare").stop().animate({"opacity":"0"},"1");
          $(this).find(".iconAddcart").stop().animate({"opacity":"0"},"1");
      });
     });
    });
  }

  render() {
    if (this.state) {
      const result = (
          <div className="wrap mylikesWrap">
              <Masonry
                  className="wrap"
                  options={{fitWidth: true}}
              >
              {
                  this.state.data.map(
                  ( item ) => {
                     return this.renderContents(
                             item.dimg,
                             item.dtext,
                             item.descr,
                             item.id)
                      }
                  )
              }
              </Masonry>
          </div>
      );
      this.animate();
      return result;
    }
    return ( <div> loading.. </div> )
  }
}

export default MyLikes;
