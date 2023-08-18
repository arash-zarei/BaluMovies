import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";

import connectDB from "utils/connectDB";

// Components
import MoviePage from "@/templates/MoviePage";
import Loading from "@/modules/MoviePage/Loading";
import Movies from "models/Movies";

const MovieDetails = ({ movie }) => {
  const params = useRouter();

  if (params.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{movie.fa_name}</title>
        <meta name="description" content={movie.synopsis} />
      </Head>
      <MoviePage data={movie} />
    </>
  );
};

export default MovieDetails;

export async function getStaticPaths() {
  try {
    await connectDB();
    const data = await Movies.find();
    const limitData = data.slice(0, 15);
    const paths = limitData.map((item) => ({
      params: { movieId: item._id.toString() },
    }));
    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticProps(context) {
  const {
    params: { movieId },
  } = context;
  try {
    await connectDB();
    const data = await Movies.findOne({ _id: movieId });
    return {
      props: { movie: JSON.parse(JSON.stringify(data)) },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
