import React, {Component} from 'react';
import {hashHistory} from 'react-router';

class Search extends Component {

  render () {
    return (
      <div className="search">
        <div className="header searchWrap">
          <div className="headerWrap searchconWrap">
            <div className="icon-search" onClick={hashHistory.goBack}>
              <img src="/img/icon_search.png" width="30" height="30" alt="search" />
            </div>
            <div className="area-search">
              <input type="text" autoComplete="off" name="search" placeholder="Search" />
            </div>
            <div className="bt-search-close" href="#" onClick={hashHistory.goBack}>
              <img src="/img/btn_close2.png" width="60" height="60" alt="close" title="닫기" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
