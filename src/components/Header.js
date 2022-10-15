import React, { useState } from "react";
import logo from "../images/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="header max-width py-5">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" />
          {isOpen && (
            <div className="absolute left-5 right-5 top-20 bg-[#232127] text-slate-200 text-center py-10 rounded-md md:hidden">
              <nav>
                <ul className="md:flex md:items-center md:justify-start">
                  <li>
                    <button>Features</button>
                  </li>
                  <li className="my-5 md:mx-5">
                    <button>Pricing</button>
                  </li>
                  <li>
                    <button>Resources</button>
                  </li>
                </ul>
                <div className="nav-line"></div>
              </nav>
              <ul
                className="md:flex md:items-center md:ml-[150px]
               lg:ml-[350px]"
              >
                <li className="my-5 md:my-0 md:mr-5">
                  <button>Login</button>
                </li>
                <li>
                  <button className="btn-cta sign-up rounded-full px-[30px]">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
                  )}
                  {/* Tablet & Desktop */}
          <div className="hidden md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
            <nav>
              <ul className="md:flex md:items-center md:justify-start">
                <li>
                  <button>Features</button>
                </li>
                <li className="my-5 md:mx-5">
                  <button>Pricing</button>
                </li>
                <li>
                  <button>Resources</button>
                </li>
              </ul>
              <div className="nav-line"></div>
            </nav>
            <ul
              className="md:flex md:items-center md:ml-[150px]
               lg:ml-[350px]"
            >
              <li className="my-5 md:my-0 md:mr-5">
                <button>Login</button>
              </li>
              <li>
                <button className="btn-cta sign-up rounded-full px-[30px]">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
          <button
            className="text-[35px] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
