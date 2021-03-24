import React from 'react';

const Search = ({typedCharAtSearchInput}) => {
    return (
        <div className="table__header_search">
          <p>Search: </p>
          <input 
            placeholder="Type here"
            onChange={typedCharAtSearchInput}
          />
        </div>
    );
}

export default Search;