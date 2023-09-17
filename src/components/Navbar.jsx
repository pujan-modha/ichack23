import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const goToBottom=()=>{
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
      <div className="z-20 app w-full">
        <nav className='lg:mx-[10vw] mx-[5vw]'>
          <div
              className={`justify-around my-0  ${
                  !toggleMenu
                      ? " "
                      : "bg-[#FF3365] bg-opacity-0 backdrop-blur-0 duration-700"
              }`}
          >
            <div className="bg-[#FF3365] backdrop-blur-0 bg-opacity-0 w-full flex items-center align-middle justify-between mx-auto my-0">
              {/* Primary menu and logo */}
              <div className="flex flex-nowrap items-center align-middle justify-end gap-16 my-4">
                {/* logo */}
                <div>
                  <a href="/" className="flex items-center align-middle">
                    {/*<img*/}
                    {/*    src={logoIEEE}*/}
                    {/*    className="w-[150px] h-[45px]"*/}
                    {/*    alt="TECHNOID by IEEE"*/}
                    {/*/>*/}
                    <h1 className='text-2xl'>
                      IC HACK 2.0
                    </h1>
                  </a>
                </div>
              </div>
              <div className="flex gap-6 align-middle">
                {/* primary */}
                <div className="hidden lg:inline-flex gap-8 align-middle relative items-center">
                  <a href="/" className='hover:text-dracula'>HOME</a>
                  <a href="/src/pages/Tracks" className='hover:text-dracula'>TRACKS</a>
                  <a href="/about" className='hover:text-dracula'>ABOUT</a>
                  {/*<a href="/sponsor" className='hover:text-dracula'>SPONSORS</a>*/}
                  {/*<a href="/team" className='hover:text-dracula'>TEAM</a>*/}
                  <button className='hover:text-dracula' onClick={()=>{goToBottom(); setToggleMenu(!toggleMenu);}}>CONTACT US</button>
                  <a rel="noopener noreferrer" href="/register" className="px-6 py-2 font-medium border-white border-0 shadow-lg rounded text-pracula bg-dracula hover:bg-pracula hover:text-dracxt">REGISTER</a>
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
              className={`z-40 w-full bg-[#bd93f9] backdrop-blur-0 bg-opacity-0 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
                  !toggleMenu ? "h-0" : "h-screen py-16"
              }`}
          >
            <div className="px-8">
              <div className="flex flex-col font-light gap-16 text-2xl tracking-wider text-center">
                <a href="/" className=''>HOME</a>
                <a href="/src/pages/Tracks" className=''>TRACKS</a>
                <a href="/about" className=''>ABOUT</a>
                {/*<a href="/sponsor" className=''>SPONSORS</a>*/}
                {/*<a href="/team" className='underline underline-offset-4'>TEAM</a>*/}
                <button className='hover:text-dracula' onClick={()=>{ setToggleMenu(!toggleMenu); goToBottom();}}>CONTACT US</button>
                <a rel="noopener noreferrer" href="/register" className="px-6 py-2 font-medium border-white border-0 shadow-lg rounded text-pracula bg-dracula hover:bg-pracula hover:text-dracxt">REGISTER</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
