import {Outlet, Link} from 'react-router-dom';
import {Fragment} from 'react';

const Navigation = ()=>{
  return (
    <Fragment>
      <div className='navigation'>
        <Link classNaem='logo-container' to='/'>
          <div>Logo</div>
        </Link>
        <div className='nav-link-container'>
          <Link classname='nav-link' to='/shop/'>
          SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;