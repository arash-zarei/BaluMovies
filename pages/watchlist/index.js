// Components
import WatchListPage from "../../components/templates/WatchListPage";

const WatchList = ({ watchlist }) => {
  return <WatchListPage data={watchlist} />;
};

export default WatchList;

export async function getServerSideProps() {
  const res = await fetch("https://balu-movies-api.vercel.app/watch_list");
  const data = await res.json();

  return {
    props: { watchlist: data },
  };
}
