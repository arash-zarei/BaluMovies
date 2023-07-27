// Componets
import HomePage from "../components/templates/HomePage";


const Home = ({ movies }) => {
  return <HomePage data={movies} />
}

export default Home;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3030/movies");
  const data = await res.json()
  const limitData = data.slice(0, 9)

  return {
    props: { movies: limitData }
  }
}