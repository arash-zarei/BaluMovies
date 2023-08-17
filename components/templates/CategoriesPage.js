import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// Components
import Card from "@/modules/HomePage/Card";

const CategoriesPage = ({ data }) => {
  const [query, setQuery] = useState({ score: "", year: "" });

  useEffect(() => {
    const { score, year } = route.query;
    if (query.score !== score || query.year !== year) {
      setQuery({ score, year });
    }
  }, []);

  const route = useRouter();

  const selectHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

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
          value={query.score}
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
          value={query.year}
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
      {data.length ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 my-6">
          {data.map((movie) => (
            <Card key={movie.id} data={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-10 w-full">
          <Image width={512} height={512} src="/images/search.svg" alt="search" className="w-72 mx-auto" />
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
