import './NavBar.scss';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
function NavBar() {
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className='left'>
        <a href='/' className='logo'>
          <img src='/logo.png' akt='' />
          <span>HomeStay</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/list'>Lists of Houses</a>
        <a href='/login'>Agents</a>
      </div>
      <div className='right'>
        {currentUser ? (
          <div className='user'>
            <img src={currentUser.avatar || 'noavatar.jpg'} alt='' />
            <span>{currentUser.username}</span>
            <Link to='/profile' className='profile'>
              <div className='notification'>3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to='/login'>Sign in</Link>
            <Link to='/register'> Sign up</Link>
          </>
        )}
        <div className='menuIcon'>
          <img
            src='/menu.png'
            alt=''
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Sign in</a>
          <a href='/'>Sign up</a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
