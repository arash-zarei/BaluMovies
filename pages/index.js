import connectDB from "utils/connectDB";
import Movies from "models/Movies";

// Componets
import HomePage from "@/templates/HomePage";

const Home = ({ movies }) => {
  return <HomePage data={movies} />;
};

export default Home;

export async function getStaticProps() {
  try {
    await connectDB();
    const data = await Movies.find();
    const limitMovies = data.slice(0, 11);

    return {
      props: { movies: JSON.parse(JSON.stringify(limitMovies)) },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
