import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import logo from "../images/footer-logo.svg";
function Footer() {
  return (
    <>
      <footer className="bg-[#232127] py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 text-center md:text-left">
          <article className="mb-2 flex md:block align-middle justify-center">
            <img src={logo} alt="logo" />
          </article>

          <article className="mb-2">
            <h3 className="text-[#fff] text-lg font-bold tracking-wide mb-2">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-[#bfbfbf] hover:text-[#2acfcf] mb-1 text-sm mt-1">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-[#bfbfbf] hover:text-[#2acfcf] mb-1  text-sm mt-1">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-[#bfbfbf] hover:text-[#2acfcf] mb-1  text-sm mt-1">
                  Analytics
                </button>
              </li>
            </ul>
          </article>
          {/*  */}
          <article className="mb-2">
            <h3 className="text-white text-lg font-bold tracking-wide mb-2">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-[#bfbfbf] hover:text-[#2acfcf] mb-1  text-sm mt-1">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-[#bfbfbf] hover:text-[#2acfcf] mb-1  text-sm mt-1">
                  Developers
                </button>
              </li>
              <li>
                <button className="text-[#bfbfbf] hover:text-[#2acfcf] mb-1  text-sm mt-1">
                  Support
                </button>
              </li>
            </ul>
          </article>
          {/*  */}
          <article className="mb-2">
            <h3 className="text-white text-lg font-bold tracking-wide mb-2">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-[#bfbfbf] hover:text-[#2acfcf] mb-1  text-sm mt-1">
                  About
                </button>
              </li>
              <li>
                <button className="text-[#bfbfbf] hover:text-[#2acfcf] mb-1  text-sm mt-1">
                  Our Team
                </button>
              </li>
              <li>
                <button className="text-[#bfbfbf] hover:text-[#2acfcf] mb-1  text-sm mt-1">
                  Careers
                </button>
              </li>
              <li>
                <button className="text-[#bfbfbf] hover:text-[#2acfcf] mb-1  text-sm mt-1">
                  Contact
                </button>
              </li>
            </ul>
          </article>
          <article className="mb-2 flex md:block align-middle justify-center">
            <ul className="flex">
              <li>
                <img src={facebook} alt="facebook" />
              </li>
              <li className="ml-5">
                <img src={twitter} alt="twitter" />
              </li>
              <li className="mx-5">
                <img src={pinterest} alt="pinterest" />
              </li>
              <li>
                <img src={instagram} alt="instagram" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  );
}

export default Footer;
