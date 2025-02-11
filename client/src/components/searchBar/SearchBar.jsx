import { useState } from 'react';
import { Link } from 'react-router-dom';
import './searchBar.scss';

const type = ['buy', 'rent'];

function SearchBar() {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: '',
    maxPrice: '',
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className='searchbar'>
      <div className='type'>
        {type.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <div className='formContainer'>
        <form>
          <input
            type='text'
            name='city'
            placeholder='City'
            onChange={handleChange}
          />
          <input
            type='text'
            name='minPrice'
            min={0}
            max={10000000}
            onChange={handleChange}
            placeholder='Mininum Price'
          />
          <input
            type='text'
            name='maxPrice'
            min={0}
            max={10000000}
            onChange={handleChange}
            placeholder='Max Price'
          />
          <Link
            to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          >
            <button>
              <img src='/search.png' alt='' />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
