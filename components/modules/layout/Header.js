import React from "react";
import Link from "next/link";

// Icons
import * as Unicons from "@iconscout/react-unicons";

const Header = ({ navbarHandler }) => {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-black">
      <span onClick={() => navbarHandler()} className="btnSpan xl:hidden">
        <Unicons.UilBars />
      </span>
      <ul className="flex items-center justify-around gap-9">
        <li className="hover:text-yellow-400 text-white">تلوزیون</li>
        <li className="text-primary border-b-2 border-primary">فیلم ها</li>
        <li className="hover:text-yellow-400 text-white">انیمه</li>
      </ul>
    <Link href="/categories" className="btnSpan">
    <Unicons.UilFilter />
    </Link>
    </div>
  );
};

export default Header;
