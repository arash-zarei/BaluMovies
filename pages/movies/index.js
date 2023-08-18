import Movies from "models/Movies";
import connectDB from "utils/connectDB";

// Components
import MoviesPage from "@/templates/MoviesPage";

const index = ({ movies }) => {
  return <MoviesPage data={movies} />;
};

export default index;

export async function getStaticProps() {
  try {
    await connectDB();
    const data = await Movies.find();
    return {
      props: { movies: JSON.parse(JSON.stringify(data)) },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
