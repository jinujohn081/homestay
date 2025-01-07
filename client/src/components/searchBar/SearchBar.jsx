import { useState } from 'react';
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
      <form>
        <input type='text' name='location' placeholder='City Location' />
        <input
          type='text'
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Mininum Price'
        />
        <input
          type='text'
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
        />
        <button>
          <img src='/search.jpg' alt='' />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
