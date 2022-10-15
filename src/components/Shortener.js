import React, { useState, useEffect } from "react";
import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";

// https://api.shrtco.de/v2/shorten?url=

const getLinks = () => {
  let links = localStorage.getItem("links");

  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};

function Shortener() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLinks);
  const [buttonText, setButtonText] = useState("Copy");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Input is empty");
    } else {
      const shortenLink = async () => {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${text}`
        );
        const data = await response.json();

        console.log(data);
        setLinks(data.result);
        setText("");
      };
      shortenLink();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setButtonText("Copied!");
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <>
      <section className="w-3/4 mx-auto shortener relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <input
              type="url"
              placeholder="Shorten a link here"
              className="w-full py-2 px-6 rounded-lg mb-2 md:mb-0  md:w-2/3 placeholder:text-center"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button
              type="submit"
              className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
          <article>
            <h6 className="mb-3 md:mb-0">{links.original_link}</h6>
          </article>
          <article>
            <ul className="md:flex md:items-center">
              <li className="md:mr-5">
                <button className="text-[#2acfcf]">
                  {links.full_short_link}
                </button>
              </li>
              <li>
                <button
                  className={`btn-cta rounded-lg text-sm w-full focus:bg-[#232127]`}
                  onClick={handleCopy}
                >
                  {buttonText}
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}

export default Shortener;
