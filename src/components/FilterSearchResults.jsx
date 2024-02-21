import React, { useState } from 'react';
import '../styles/FilterSearchResults.css';

const FilterSearchResults = () => {
    const dummyjson = [
        { id: 1, value: 10 },
        { id: 1, value: 21 },
        { id: 1, value: 49 },
        { id: 1, value: 72 },
        { id: 2, value: 1 },
        { id: 3, value: 19 },
    ]
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [data] = useState(dummyjson);
  
    const handleSearchQuery = () => {
      if (searchQuery === '') {
        setResults([]);
        return;
      }
  
      const filteredResults = data.filter((item) => {
        return item.value.toString().includes(searchQuery);
      });
      setResults(filteredResults);
    };
  
    return (
      <div className='filter_search'>
        <div className='search_bar'>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search...'
          />
          <button onClick={handleSearchQuery}>Search</button>
        </div>
        <div className='data_container'>
          <div className='original_data'>
            <h3>Data</h3>
            {data?.map((query) => (
              <p key={query.id}>{query.value}</p>
            ))}
          </div>
          <div className='filtered_results'>
                <h3>Filtered Results</h3>
                {(results?.length > 0) && (
                  results.map((res) => <p key={res.id}>{res.value}</p>)
                )}
          </div>
        </div>
      </div>
    );
  };

export default FilterSearchResults;
