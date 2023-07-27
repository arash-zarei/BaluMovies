import React from "react";
import Link from "next/link";

// Icons
import * as Unicons from "@iconscout/react-unicons";

const Card = ({ data }) => {

  const {  en_name, fa_name, genre, score, id } = data

  return (
    <div className="rounded-xl mt-8 relative text-white w-fit">
      <img src={`/images/${id}.jpg`} alt={fa_name} className="rounded-xl" />
      <div className="detailsCard">
        <div>
          <p className="text-left">{en_name}</p>
          <p>{fa_name}</p>
        </div>
        <div className="flex justify-between items-center flex-col gap-10">
          <div className="w-full flex justify-between items-center">
            <p>{genre}</p>
            <div className="flex items-center gap-1">
              <img src="/images/imdb.png" alt="imdb" className="w-7" />
              <p>{score}</p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <Link href={`movies/${id}`} className="w-full py-1 bg-primary hover:bg-yellow-400 text-black text-center rounded-md">
              تماشا
            </Link>
            <span className="p-1 rounded-md bg-gray-600 cursor-pointer">
              <Unicons.UilPlus />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;