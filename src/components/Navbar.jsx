import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
      <div className="z-20 app w-full">
        <nav className='mx-[10vw]'>
          <div
              className={`justify-around my-0  ${
                  !toggleMenu
                      ? " "
                      : "bg-[#FF3365] bg-opacity-0 backdrop-blur-0 duration-700"
              }`}
          >
            <div className="bg-[#FF3365] backdrop-blur-sm bg-opacity-0 w-full flex items-center justify-between mx-auto my-0 ">
              {/* Primary menu and logo */}
              <div className="flex flex-nowrap items-center justify-end gap-16 my-4">
                {/* logo */}
                <div>
                  <a href="/" className="flex items-center">
                    {/*<img*/}
                    {/*    src={logoIEEE}*/}
                    {/*    className="w-[150px] h-[45px]"*/}
                    {/*    alt="TECHNOID by IEEE"*/}
                    {/*/>*/}
                    IC HACK 2023
                  </a>
                </div>
              </div>
              <div className="flex gap-6">
                {/* primary */}
                <div className="hidden lg:flex gap-8">
                  <a href="#" className="">
                    HOME
                  </a>
                  <a href="#">SERVICES</a>
                  <a href="#">CONTACT US</a>
                  <a href="#">ABOUT US</a>
                </div>
                {/* Mobile navigation toggle */}
                <div className="lg:hidden flex items-center">
                  <button onClick={() => setToggleMenu(!toggleMenu)}>
                    <Bars3Icon className="h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* mobile navigation */}
          <div
              className={`z-40 w-full bg-[#FF3365] backdrop-blur-sm bg-opacity-50 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
                  !toggleMenu ? "h-0" : "h-screen py-20"
              }`}
          >
            <div className="px-8">
              <div className="flex flex-col font-light gap-16 text-2xl underline underline-offset-8 tracking-wider">
                <a href="#" className="">
                  HOME
                </a>
                <a href="#">SERVICES</a>
                <a href="#">CONTACT US</a>
                <a href="#">ABOUT US</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
