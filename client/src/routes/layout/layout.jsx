import './layout.scss';
import '../../components/navBar/NavBar';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../footer/footer';

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

export default Layout;
