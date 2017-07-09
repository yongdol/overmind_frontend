import React from 'react';
import {Link} from 'react-router-relative-link';

const Content = ({dimg, dtext, descr, dno}) => {
  return (
    <div className="single-item-wrap">
      <Link to={"/service/"+dno}>
        <div className="img-wrap">
          <div className="hover-element-top">
    				<a className="iconLike" href="#"><img src="/img/icon_like.png" width="40" height="40" alt="like" title="like" /></a>
    				<a className="iconShare" href="#"><img src="/img/icon_share.png" width="40" height="40" alt="share" title="share" /></a>
    			</div>
    			<div className="hover-element-bottom">
    				<a className="iconAddcart" href="#"><img src="/img/icon_addcart.png" width="50" height="50" alt="add cart" title="add cart" /></a>
    			</div>
          <img src={dimg} alt={dimg} width='437px'/>
        </div>
      </Link>
      <div className="list-txt">
        <p className="listTitle">{dtext}</p>
        <p className="listDescription">{descr}</p>
      </div>
    </div>
  );
}

export default Content;
