import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavLogo from "../assets/oldlogo.png";
import {NavLink} from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const goToContact=()=>{
    // window.scrollTo(0, document.body.scrollHeight);
    document.getElementById("contact-form").scrollIntoView();
  }

  return (
      <div className="z-20 app w-full">
        <nav className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]'>
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
                    <img src={NavLogo} alt="IC HACK 2.0" className='w-[128px] lg:w-[192px]'/>
                    {/*<h1 className='text-2xl'>*/}
                    {/*  IC HACK 2.0*/}
                    {/*</h1>*/}
                  </a>
                </div>
              </div>
              <div className="flex gap-6 align-middle">
                {/* primary */}
                <div className="hidden lg:inline-flex gap-8 align-middle relative items-center">
                  <NavLink
                      className='hover:font-bold'
                      to="/"
                      style={({ isActive, isPending }) => {
                        return {
                          // color: isActive ? "#282a36" : "#f8f8f2",
                          textDecoration: isActive ? "underline" : "none",
                          textUnderlineOffset: isActive ? "10%" : "",
                        };
                      }}
                  >HOME</NavLink>
                  <NavLink
                      className='hover:font-bold'
                      to="/tracks"
                      style={({ isActive, isPending }) => {
                        return {
                          // color: isActive ? "#282a36" : "#f8f8f2",
                          textDecoration: isActive ? "underline" : "none",
                          textUnderlineOffset: isActive ? "10%" : "",
                        };
                      }}
                  >TRACKS</NavLink>
                  <NavLink
                      className='hover:font-bold'
                      to="/schedule"
                      style={({ isActive, isPending }) => {
                        return {
                          // color: isActive ? "#282a36" : "#f8f8f2",
                          textDecoration: isActive ? "underline" : "none",
                          textUnderlineOffset: isActive ? "10%" : "",
                        };
                      }}
                  >SCHEDULE</NavLink>
                    <NavLink
                        className='hover:font-bold'
                        to="/instructions"
                        style={({ isActive, isPending }) => {
                            return {
                                // color: isActive ? "#282a36" : "#f8f8f2",
                                textDecoration: isActive ? "underline" : "none",
                                textUnderlineOffset: isActive ? "10%" : "",
                            };
                        }}
                    >INSTRUCTIONS</NavLink>
                  <NavLink
                      className='hover:font-bold'
                      to="/about"
                      style={({ isActive, isPending }) => {
                        return {
                          // color: isActive ? "#282a36" : "#f8f8f2",
                          textDecoration: isActive ? "underline" : "none",
                          textUnderlineOffset: isActive ? "10%" : "",
                        };
                      }}
                  >ABOUT
                  </NavLink>
                  {/*<NavLink*/}
                  {/*  className='hover:font-bold'*/}
                  {/*    to="/sponsors"*/}
                  {/*    style={({ isActive, isPending }) => {*/}
                  {/*      return {*/}
                  {/*        // color: isActive ? "#282a36" : "#f8f8f2",*/}
                  {/*textDecoration: isActive ? "underline" : "none",*/}
                  {/*textUnderlineOffset: isActive ? "10%" : "",*/}
                  {/*      };*/}
                  {/*    }}*/}
                  {/*>SPONSORS</NavLink>*/}
                  {/* ---#--- */}
                  {/*<NavLink*/}
                  {/*  className='hover:font-bold'*/}
                  {/*    to="/team"*/}
                  {/*    style={({ isActive, isPending }) => {*/}
                  {/*      return {*/}
                  {/*       // color: isActive ? "#282a36" : "#f8f8f2",*/}
                  {/*textDecoration: isActive ? "underline" : "none",*/}
                  {/*textUnderlineOffset: isActive ? "10%" : "",*/}
                  {/*      };*/}
                  {/*    }}*/}
                  {/*>TEAM</NavLink>*/}
                  <button className='hover:font-bold' onClick={()=>{goToContact(); setToggleMenu(!toggleMenu);}}>CONTACT US</button>
                  <a rel="noopener noreferrer" target="_noref" href="https://bit.ly/ieee_ic_hack_2023" className="px-6 py-2 font-medium border-dracula border-2 shadow-lg rounded text-pracula bg-dracula hover:bg-pracula hover:text-dracula">REGISTER</a>
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
              className={`z-40 w-full bg-pracula backdrop-blur-0 bg-opacity-0 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
                  !toggleMenu ? "h-0" : "h-screen bg-fixed py-12"
              }`}
          >
            <div className="px-8">
              <div className="flex flex-col font-light gap-12 text-2xl tracking-wider text-center">
                  <NavLink
                      className='hover:font-bold'
                      to="/"
                      style={({ isActive, isPending}) => {
                          return {
                              // color: isActive ? "#282a36" : "#f8f8f2",
                              textDecoration: isActive ? "underline" : "none",
                              textUnderlineOffset: isActive ? "10%" : "",
                          };
                      }}
                  >HOME</NavLink>
                  <NavLink
                      className='hover:font-bold'
                      to="/tracks"
                      style={({ isActive, isPending }) => {
                          return {
                              // color: isActive ? "#282a36" : "#f8f8f2",
                              textDecoration: isActive ? "underline" : "none",
                              textUnderlineOffset: isActive ? "10%" : "",
                          };
                      }}
                  >TRACKS</NavLink>
                  <NavLink
                      className='hover:font-bold'
                      to="/schedule"
                      style={({ isActive, isPending }) => {
                          return {
                              // color: isActive ? "#282a36" : "#f8f8f2",
                              textDecoration: isActive ? "underline" : "none",
                              textUnderlineOffset: isActive ? "10%" : "",
                          };
                      }}
                  >SCHEDULE</NavLink>
                  <NavLink
                      className='hover:font-bold'
                      to="/instructions"
                      style={({ isActive, isPending }) => {
                          return {
                              // color: isActive ? "#282a36" : "#f8f8f2",
                              textDecoration: isActive ? "underline" : "none",
                              textUnderlineOffset: isActive ? "10%" : "",
                          };
                      }}
                  >INSTRUCTIONS</NavLink>
                  <NavLink
                      className='hover:font-bold'
                      to="/about"
                      style={({ isActive, isPending }) => {
                          return {
                              // color: isActive ? "#282a36" : "#f8f8f2",
                              textDecoration: isActive ? "underline" : "none",
                              textUnderlineOffset: isActive ? "10%" : "",
                          };
                      }}
                  >ABOUT</NavLink>
                  {/*<NavLink*/}
                  {/*className='hover:font-bold'*/}
                  {/*    to="/sponsors"*/}
                  {/*    style={({ isActive, isPending }) => {*/}
                  {/*      return {*/}
                  {/*      //  color: isActive ? "#282a36" : "#f8f8f2",*/}
                  {/*textDecoration: isActive ? "underline" : "none",*/}
                  {/*textUnderlineOffset: isActive ? "10%" : "",*/}
                  {/*      };*/}
                  {/*    }}*/}
                  {/*>SPONSORS</NavLink>*/}
                  {/* ---#--- */}
                  {/*<NavLink*/}
                  {/*className='hover:font-bold'*/}
                  {/*    to="/team"*/}
                  {/*    style={({ isActive, isPending }) => {*/}
                  {/*      return {*/}
                  {/*      //  color: isActive ? "#282a36" : "#f8f8f2",*/}
                  {/*textDecoration: isActive ? "underline" : "none",*/}
                  {/*textUnderlineOffset: isActive ? "10%" : "",*/}
                  {/*      };*/}
                  {/*    }}*/}
                  {/*>TEAM</NavLink>*/}
                <button className='hover:font-bold' onClick={()=>{ setToggleMenu(!toggleMenu); goToContact();}}>CONTACT US</button>
                  <a rel="noopener noreferrer" target="_noref" href="https://bit.ly/ieee_ic_hack_2023" className="px-6 py-2 font-medium border-dracula border-2 shadow-lg rounded text-pracula bg-dracula hover:bg-pracula hover:text-dracula">REGISTER</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;