import React, { useState } from 'react';

function GifSearch({ onSubmit }){
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for gifs"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;
