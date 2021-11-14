import React from 'react'
import './menu-item.styles.scss'
import {useLocation,useNavigate} from 'react-router';
function MenuItem({title, imageUrl, size,navigate,linkUrl,location})
{ console.log(location);
    return(
 <div className={`${size} menu-item`} onClick={()=>{navigate(`${linkUrl}`)}}>
     <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW </span>
        </div>
        </div>
        );
}
function withRouter( Child ) {
    return ( props ) => {
      const location = useLocation();
      const navigate = useNavigate();
      return <Child { ...props } navigate={ navigate } location={ location } />;
    }
  };
export default withRouter(MenuItem);