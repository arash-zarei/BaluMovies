// Components
import MoviesPage from "../../components/templates/MoviesPage";

const index = ({ movies }) => {
    return <MoviesPage data={movies} />
};

export default index;

export async function getStaticProps() {
    const res = await fetch("http://localhost:3030/movies");
    const data = await res.json()
  
    return {
      props: { movies: data }
    }
  }