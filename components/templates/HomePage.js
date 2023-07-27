import React from "react";
import Link from "next/link";

// Components
import Slider from "../modules/HomePage/Slider";
import Card from "../modules/HomePage/Card";

const HomePage = ({ data }) => {
  return (
    <div className="w-full px-4">
      <Slider />

      {/* card movie */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {data.map((movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </div>
      {/* end card movie */}

      <Link
        href="/movies"
        className="w-full block py-1 my-10 text-center bg-primary hover:bg-yellow-400 rounded-md"
      >
        فیلم های بیشتر
      </Link>
    </div>
  );
};

export default HomePage;
