import React, { useEffect, useState } from "react";
import Link from "next/link";
import {useRouter} from 'next/router'

// Icons
import * as Unicons from "@iconscout/react-unicons";

const Navbar = ({ navbarHandler }) => {

  const [isActiveHome, setIsActiveHome] = useState(true)
  const [isActiveCategories, setIsActiveCategories] = useState(true)
  const [isActiveMovies, setIsActiveMovies] = useState(true)

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

  }, [router.pathname])

  return (
    <div className="w-full bg-black">
      {/* heder Navbar */}
      <div className="flex justify-between items-center px-4 bg-black xl:sticky xl:top-0 static">
        <Link href="/" className="h3 text-white p-4">
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
          <li className="listLi">
            <Link href="/" className={`w-full listLi py-0 ${isActiveHome && "activeLi"}`}>
              <Unicons.UilEstate />
              خانه
            </Link>
          </li>
          <li className="listLi">
            <Link href="/categories" className={`w-full listLi py-0 ${isActiveCategories && "activeLi"}`}>
              <Unicons.UilFilter />
              یافتن
            </Link>
          </li>
          <li className="listLi">
            <Link href="/movies" className={`w-full listLi py-0 ${isActiveMovies && "activeLi"}`}>
            <Unicons.UilClapperBoard />
            فیلم ها</Link>
          </li>
          <li className="listLi">
            <Unicons.UilEye />
            لیست تماشا
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
            <Unicons.UilHeart />
            لیست پخش
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
