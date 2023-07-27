import React from "react";
import Link from "next/link";

// Icons
import * as Unicons from "@iconscout/react-unicons";

const Header = ({ navbarHandler }) => {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-black sticky top-0 z-20">
      <span onClick={() => navbarHandler()} className="btnSpan xl:hidden">
        <Unicons.UilBars />
      </span>
      <ul className="flex items-center justify-around gap-9">
        <li className="hover:text-yellow-400 text-white cursor-pointer">تلوزیون</li>
        <li className="text-primary border-b-2 cursor-pointer border-primary">فیلم ها</li>
        <li className="hover:text-yellow-400 text-white cursor-pointer">انیمه</li>
      </ul>
    <Link href="/categories" className="btnSpan">
    <Unicons.UilFilter />
    </Link>
    </div>
  );
};

export default Header;
