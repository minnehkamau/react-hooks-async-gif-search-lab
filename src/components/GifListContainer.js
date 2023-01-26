import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        async function fetchData() {
            const url =`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=PCNqjJOhxwMSlo1FmoqLpQLB2pqnIMIn&rating=g`;
            try {
                const response = await fetch(url);
                const json = await response.json();
                setGifs(json.data.slice(0, 3));
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [query]);

    function handleSubmit(query) {
        setQuery(query);
    }

    return (
        <div>
            <GifSearch onSubmit={handleSubmit} />
            <GifList gifs={gifs} />
        </div>
    );
}

export default GifListContainer;

