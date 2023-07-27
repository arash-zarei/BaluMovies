import { useRouter } from 'next/router';
import React from 'react';

// Components
import MoviePage from '../../components/templates/MoviePage';
import Loading from '../../components/modules/MoviePage/Loading';

const MovieDetails = ({ movie }) => {

    const params = useRouter()

    if(params.isFallback) {
        return <Loading />
    }

    return <MoviePage data={movie} />
};

export default MovieDetails;

export async function getStaticPaths (){
    const res = await fetch("https://balu-movies-api.vercel.app/movies");
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
    const res = await fetch(`https://balu-movies-api.vercel.app/movies/${movieId}`);
    const data = await res.json();

    return {
        props: { movie: data }
    }
}