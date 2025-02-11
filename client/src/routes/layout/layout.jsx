import './layout.scss';
import '../../components/navBar/NavBar';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../footer/footer';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Layout() {
  return (
    <div className='layout'>
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to='/login' />
  ) : (
    <div className='layout'>
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout, RequireAuth };
