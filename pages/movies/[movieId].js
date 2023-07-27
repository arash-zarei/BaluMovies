import React from 'react';

const MovieDetails = ({ movie }) => {
    return (
        <div>
            
        </div>
    );
};

export default MovieDetails;

export async function getStaticpaths(){
    const res = await fetch("http://localhost:3030/movies");
    const data = await res.json()
    const limitData = data.slice(0, 15)
    const paths = limitData.map(item => ({
        params: { movieId: item.id.toString() }
    }))

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { params: { movieId } } = context;
    const res = await fetch(`http://localhost:3030/movies/${movieId}`);
    const data = await res.json();

    return {
        props: { movie: data }
    }
}