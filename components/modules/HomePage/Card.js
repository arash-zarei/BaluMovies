import React, { useState } from "react";
import Link from "next/link";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icons
import * as Unicons from "@iconscout/react-unicons";

const Card = ({ data }) => {
  const [isExist, setIsExist] = useState(false);

  const { en_name, fa_name, genre, year_score, id } = data;

  const addHandler = () => {
    fetch("https://balu-movies-api.vercel.app/watch_list", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setIsExist(true);
        toast.success('اضافه شد', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
      .catch(() => {
        setIsExist(true)
        toast.warn("در لیست پخش موجود است", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <div className="rounded-xl mt-8 relative text-white w-fit">
      <ToastContainer />
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
              <p>{year_score[0].score}</p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <Link
              href={`movies/${id}`}
              className="w-full py-1 bg-primary hover:bg-yellow-400 text-black text-center rounded-md"
            >
              تماشا
            </Link>
            <button
              onClick={() => addHandler(id)}
              className={`p-1 rounded-md ${
                isExist ? "bg-primary text-black" : "bg-gray-600"
              } cursor-pointer`}
            >
              {isExist ? <Unicons.UilCheck /> : <Unicons.UilPlus />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
