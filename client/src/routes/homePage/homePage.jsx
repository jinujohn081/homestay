import { AuthContext } from '../../context/AuthContext';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';
import { useContext } from 'react';

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className='homepage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>find real estate & get your dream place!!</h1>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
