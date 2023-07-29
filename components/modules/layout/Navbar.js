import React, { useEffect, useState } from "react";
import Link from "next/link";
import {useRouter} from 'next/router'

// Icons
import * as Unicons from "@iconscout/react-unicons";

const Navbar = ({ navbarHandler }) => {

  const [isActiveHome, setIsActiveHome] = useState(true)
  const [isActiveCategories, setIsActiveCategories] = useState(true)
  const [isActiveMovies, setIsActiveMovies] = useState(true)
  const [isActiveWatchList, setIsActiveWatchList] = useState(true)

  const router = useRouter()

  useEffect(() => {
    // Home
    if(router.pathname === "/"){
      setIsActiveHome(true)
    } else{
      setIsActiveHome(false)
    }
    // Category
    if(router.pathname === "/categories"){
      setIsActiveCategories(true)
    }else{
      setIsActiveCategories(false)
    }
    // Movie
    if(router.pathname === "/movies"){
      setIsActiveMovies(true)
    }else{
      setIsActiveMovies(false)
    }
    // WatchList
    if(router.pathname === "/watchlist"){
      setIsActiveWatchList(true)
    }else{
      setIsActiveWatchList(false)
    }

  }, [router.pathname])

  return (
    <div className="w-full bg-black min-h-screen">
      {/* heder Navbar */}
      <div className="flex justify-between items-center px-4 bg-black xl:sticky xl:top-0 static">
        <Link href="/" className="h3 text-white p-4" onClick={()=> navbarHandler()}>
          <span className="text-primary">بالو</span>مووی
          <br />
          <span className="text-primary">Balu</span>Movie
        </Link>
        <span onClick={() => navbarHandler()} className="btnSpan xl:hidden">
          <Unicons.UilMultiply />
        </span>
      </div>
      {/* end heder Navbar */}

      {/* list Navbar */}
      <div className="pr-4">
        <ul>
          <p className="text-gray-500">منو</p>
          <li className="listLi" onClick={()=> navbarHandler()}>
            <Link href="/" className={`w-full listLi py-0 ${isActiveHome && "activeLi"}`}>
              <Unicons.UilEstate />
              خانه
            </Link>
          </li>
          <li className="listLi" onClick={()=> navbarHandler()}>
            <Link href="/categories" className={`w-full listLi py-0 ${isActiveCategories && "activeLi"}`}>
              <Unicons.UilFilter />
              یافتن
            </Link>
          </li>
          <li className="listLi" onClick={()=> navbarHandler()}>
            <Link href="/movies" className={`w-full listLi py-0 ${isActiveMovies && "activeLi"}`}>
            <Unicons.UilClapperBoard />
            فیلم ها</Link>
          </li>
          <li className="listLi" onClick={()=> navbarHandler()}>
            <Link href="/watchlist" className={`w-full listLi py-0 ${isActiveWatchList && "activeLi"}`}>
            <Unicons.UilEye />
            لیست تماشا
            </Link>
          </li>
        </ul>
        <ul>
          <p className="text-gray-500 mb-4">کتاب خانه</p>
          <li className="listLi">
            <Unicons.UilCheckCircle />
            سلبریتی
          </li>
          <li className="listLi">
            <Unicons.UilClock />
            اخیر
          </li>
          <li className="listLi">
            <Unicons.UilStar />
            برترین ها
          </li>
          <li className="listLi">
            <Unicons.UilAward />
            جوایز
          </li>
          <li className="listLi">
            <Unicons.UilImport />
            دانلودها
          </li>
          <li className="listLi">
            <Unicons.UilCheck />
            تکمیل شده
          </li>
        </ul>
        <ul>
          <p className="text-gray-500 mb-4">عمومی</p>
          <li className="listLi">
            <Unicons.UilSetting />
            تنظیمات
          </li>
          <li className="listLi hover:text-red-600">
            <Unicons.UilSignOutAlt />
            خروج
          </li>
        </ul>
      </div>
      {/* end list Navbar */}
    </div>
  );
};

export default Navbar;
