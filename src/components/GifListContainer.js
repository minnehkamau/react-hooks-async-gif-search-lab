import React from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';



function GifListContainer(){
    return(
        <div>
            <GifSearch />
            <GifList />
        </div>
    )
}
export default GifListContainer;