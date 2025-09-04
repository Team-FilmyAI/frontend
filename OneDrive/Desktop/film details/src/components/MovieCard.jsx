import React from 'react';

const MovieCard = ({ title, poster }) => {
  return (
    <div className="shadow-card bg-muted-bg p-4 rounded-lg">
      <img src={poster} alt={title} className="rounded mb-2" />
      <h2 className="text-lg font-bold text-primary">{title}</h2>
    </div>
  );
};


export default MovieCard;
