// Components
import WatchListPage from "../../components/templates/WatchListPage";

const WatchList = ({ watchlist }) => {
  return <WatchListPage data={watchlist} />;
};

export default WatchList;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3030/watch_list");
  const data = await res.json();

  return {
    props: { watchlist: data },
  };
}
