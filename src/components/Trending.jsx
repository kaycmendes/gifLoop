import React from 'react';
import Gif from './Gif';

const TrendingGifs = props => {

  const trendResults = props.data;
  let gifs = trendResults.map(gif =>
    <Gif 
    url={gif.images.fixed_height.url}
    key={gif.id}
     />
  )

  return (
    <ul className="gif-list trending">
      {gifs}
    </ul>
  );
}

export default TrendingGifs;
