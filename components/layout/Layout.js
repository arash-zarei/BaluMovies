import React, { useState } from "react";

// Components
import Header from "../modules/layout/Header";
import Navbar from "../modules/layout/Navbar";

const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    const navbarHandler = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="flex max-w-6xl mx-auto relative">
      {/* bgNavbar */}

      {isOpen && <div className="hidden sm:block absolute w-full h-screen blur-sm opacity-70 z-30 bg-gray-800"></div>}
      
      {/* end bgNavbar */}

        {/* navbar */}
      <div className={`absolute w-[100%] z-40 ${isOpen ? "right-0 max-xl:max-h-screen max-xl:overflow-y-auto" : "right-[-100%]" } transition-all sm:w-[70%] md:w-[50%] xl:w-[20%] xl:static bg-black`}>
        <Navbar navbarHandler={navbarHandler} />
      </div>
      {/* end navbar */}

      <div className={`w-[100%] xl:w-[80%] min-h-screen ${isOpen ? "max-xl:max-h-screen max-xl:overflow-hidden" : ""} bg-black`}>
        <Header navbarHandler={navbarHandler} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
