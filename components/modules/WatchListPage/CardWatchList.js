import React from "react";
import { useRouter } from "next/router"


// Icons
import * as Unicons from "@iconscout/react-unicons";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardWatchList = ({ data }) => {
  const { id, fa_name, time } = data;

  const route = useRouter()

  const deleteHandler = (id) => {
    fetch(`http://localhost:3030/watch_list/${id.toString()}`,{
        method: "DELETE"
    }).then(() => {
        toast.error('حذف شد', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            route.push({
              pathname: "/watchlist",
              query: `deleted-${id}`
            })
    })
  };

  return (
    <div className="relative rounded-md overflow-hidden h-44">
        <ToastContainer />
      <img
        src={`/images/${id}.jpg`}
        alt={fa_name}
        className="w-full h-full opacity-30 object-cover"
      />
      <div className="absolute w-full h-full flex flex-col justify-between top-0 right-0 p-2">
          <p className="text-white">{fa_name}</p>
          <p className="text-white text-left">{time} دقیقه</p>{" "}
        <div className="w-full flex items-center gap-1">
          <button className="w-full p-1 rounded-md bg-primary text-black cursor-pointer">
            پخش
          </button>
          <span
            onClick={()=> deleteHandler(id)}
            className="p-1 rounded-md bg-red-600 text-black cursor-pointer"
          >
            <Unicons.UilTrash />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardWatchList;
