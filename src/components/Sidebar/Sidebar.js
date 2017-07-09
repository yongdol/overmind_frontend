import React, {Component} from 'react';
import {hashHistory} from 'react-router';


class Sidebar extends Component {
  render () {
    return (
      <div className="drawer">
        <div className="drawerWrap">
          <div className="iconHamburgerWrap">
            <div className="iconHamburger" href="#" onClick={hashHistory.goBack}>
              <img src="/img/icon_hamburger.png" width="30" height="30" alt="drawer" title="메뉴" />
            </div>
          </div>
          <ul className="drawer-menuWrap">
            <li className="drawer-single-menu drawer-single-menu-current">Home</li>
            <li className="drawer-single-menu">Menu1</li>
            <li className="drawer-single-menu">Menu2</li>
            <li className="drawer-single-menu">Menu3</li>
            <li className="drawer-single-menu">Menu4</li>
            <li className="drawer-single-menu">Menu5</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar;
