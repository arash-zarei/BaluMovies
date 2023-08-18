import React from "react";

// Components
import CardWatchList from "@/modules/WatchListPage/CardWatchList";

const WatchListPage = ({ data }) => {
  return (
    <div className="w-full px-4">
      {data.length ? (
        <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-24">
          {data.map((movie) => (
            <CardWatchList key={movie._id} id={movie._id} data={movie.watchlist[0]} />
          ))}
        </div>
      ) : (
        <div className="w-full text-center mt-24">
          <h1 className="h1 text-primary">لیست پخش خالی است</h1>
        </div>
      )}
    </div>
  );
};

export default WatchListPage;
