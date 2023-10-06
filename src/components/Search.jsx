import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
const Search = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      alert('Oops pencarian kosong'); 
      return;
    }
    navigate(`/search/${search}`); 
    
  };

  return (
    <>
      <form onSubmit={handleSearch} className='flex items-centers justify-center w-full' >
        <div className='relative flex items-center w-3/4'>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className='text-white bg-transparent w-full outline outline-1 outline-red-500 pl-4 pr-10 py-2 rounded-full  '
            placeholder='What do you want to watch?'
            type='text'
            
          />
          <button type="submit" className="absolute right-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
