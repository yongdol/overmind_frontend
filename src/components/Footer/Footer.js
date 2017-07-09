import React, {Component} from 'react';

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <p>Copyright (c) 2017. sentience All Rights Reserved</p>
      </div>
    );
  }
}

class DarkFooter extends Component {
  render () {
    return (
      <div className="footer darkfooter">
        <p>Copyright (c) 2017. sentience All Rights Reserved</p>
      </div>
    );
  }
}

export {Footer, DarkFooter};
