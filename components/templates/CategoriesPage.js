import React, { useState } from "react";
import { useRouter } from "next/router";

const CategoriesPage = () => {
  const [query, setQuery] = useState({ score: "", year: "" });

  const selectHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const route = useRouter();

  const searchHandler = () => {
    route.push({
      pathname: "categories",
      query,
    });
  };

  return (
    <div className="w-full px-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
        <select
          onChange={selectHandler}
          name="score"
          id=""
          className="bg-dark text-primary rounded-md outline-none p-1 cursor-pointer"
        >
          <option value="">امتیاز</option>
          <option value="2-5">2 تا 5</option>
          <option value="5-7">5 تا 7</option>
          <option value="7">7 به بالا</option>
        </select>

        <select
          onChange={selectHandler}
          name="year"
          id=""
          className="bg-dark text-primary rounded-md outline-none p-1 cursor-pointer"
        >
          <option value="">سال انتشار</option>
          <option value="2010">2010</option>
          <option value="2014">2014</option>
          <option value="2017">2017</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>

        <button
          onClick={searchHandler}
          className="bg-primary text-black p-1 rounded-md"
        >
          جستجو
        </button>
      </div>

      <div className="w-full">
        <img
          src="/images/search.svg"
          alt="search"
          className="w-80 mt-24 mx-auto opacity-80"
        />
      </div>
    </div>
  );
};

export default CategoriesPage;
