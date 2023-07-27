import React from "react";

// Icons
import * as Unicons from "@iconscout/react-unicons";

const Navbar = ({ navbarHandler }) => {
  return (
    <div className="w-full bg-black">
        {/* heder Navbar */}
      <div className="flex justify-between items-center px-4">
        <h1 className="h3 text-white p-4">
          <span className="text-primary">بالو</span>موی
          <br />
          <span className="text-primary">Balu</span>Movie
        </h1>
        <span onClick={() => navbarHandler()} className="btnSpan xl:hidden">
          <Unicons.UilMultiply />
        </span>
      </div>
      {/* end heder Navbar */}

      {/* list Navbar */}
      <div className="pr-4">
        <ul>
          <p className="text-gray-500">منو</p>
          <li className="flex gap-2 py-2 border-l-2 border-primary text-primary cursor-pointer">
            <Unicons.UilEstate />
            خانه
          </li>
          <li className="listLi">
            <Unicons.UilSearch />
            یافتن
          </li>
          <li className="listLi">
            <Unicons.UilAward />
            جوایز
          </li>
          <li className="listLi">
            <Unicons.UilCheckCircle />
            سلبریتی
          </li>
        </ul>
        <ul>
          <p className="text-gray-500 mb-4">کتاب خانه</p>
          <li className="listLi">
            <Unicons.UilClock />
            اخیر
          </li>
          <li className="listLi">
            <Unicons.UilStar />
            برترین ها
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
            <Unicons.UilClapperBoard />
            لیست تماشا
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
