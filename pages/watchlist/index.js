import connectDB from "utils/connectDB";
import WatchList from "models/WatchList";

// Components
import WatchListPage from "@/templates/WatchListPage";

const WatchListSSR = ({ watchlist }) => {
  return <WatchListPage data={watchlist} />;
};

export default WatchListSSR;

export async function getServerSideProps() {
  try {
    await connectDB();
    const data = await WatchList.find();

    return {
      props: { watchlist: JSON.parse(JSON.stringify(data)) },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
