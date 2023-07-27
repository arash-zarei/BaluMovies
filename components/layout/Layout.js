import React, { useState } from "react";

// Components
import Header from "../modules/layout/Header";
import Navbar from "../modules/layout/Navbar";

const Layout = () => {

    const [isOpen, setIsOpen] = useState(false)
    const navbarHandler = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="flex max-w-6xl mx-auto relative">
        {/* navbar */}
      <div className={`absolute w-[100%] ${isOpen ? "right-0 max-xl:max-h-screen max-xl:overflow-y-auto" : "right-[-100%]" } transition-all sm:w-[70%] md:w-[50%] xl:w-[20%] xl:static bg-black`}>
        <Navbar navbarHandler={navbarHandler} />
      </div>
      {/* end navbar */}
      
      <div className={`w-[100%] xl:w-[80%] h-[300vh] ${isOpen ? "max-h-screen" : ""} bg-yellow-400`}>
        <Header navbarHandler={navbarHandler} />
      </div>
    </div>
  );
};

export default Layout;
