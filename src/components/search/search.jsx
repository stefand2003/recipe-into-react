import React from 'react';
import './search.scss';

export default function search() {
  return (
    <div className='search'>
      <input type='text' placeholder='Search for a recipe' />
      <button>Search</button>
    </div>
  );
}
