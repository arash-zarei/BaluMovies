import React from 'react';

// Components
import Card from '@/modules/HomePage/Card'

const MoviesPage = ({ data }) => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8 px-4">
            {data.map(movie => (
                <Card key={movie.id} data={movie} />
            ))}
        </div>
    );
};

export default MoviesPage;