import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icons
import * as Unicons from "@iconscout/react-unicons";

const Card = ({ data }) => {
  const [movieData, setMovieData] = useState(data);
  const { en_name, fa_name, genre, year_score, _id, img, existing } = movieData;

  const addHandler = (id) => {
    axios.post("/api/watchlist", { ...data, existing: true }).then(() => {
      console.log("added");
      axios.patch(`/api/movies/${id}`, { existing: true }).then((data) => {
        setMovieData(data.data.data);
        toast.success("اضافه شد", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
    });
  };

  return (
    <div className="rounded-xl mt-8 relative text-white w-fit">
      <ToastContainer />
      <Image
        src={`/images/${img}.jpg`}
        width={1175}
        height={1763}
        alt={fa_name}
        className="rounded-xl"
      />
      <div className="detailsCard">
        <div>
          <p className="text-left">{en_name}</p>
          <p>{fa_name}</p>
        </div>
        <div className="flex justify-between items-center flex-col gap-10">
          <div className="w-full flex justify-between items-center">
            <p>{genre}</p>
            <div className="flex items-center gap-1">
              <Image
                src="/images/imdb.png"
                width={512}
                height={512}
                alt="imdb"
                className="w-7"
              />
              <p>{year_score[0].score}</p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <Link
              href={`movies/${_id}`}
              className="w-full py-1 bg-primary hover:bg-yellow-400 text-black text-center rounded-md"
            >
              تماشا
            </Link>
            <button
              onClick={() => addHandler(_id)}
              disabled={existing}
              className={`p-1 rounded-md ${
                existing ? "bg-primary text-black" : "bg-gray-600"
              } cursor-pointer`}
            >
              {existing ? <Unicons.UilCheck /> : <Unicons.UilPlus />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
