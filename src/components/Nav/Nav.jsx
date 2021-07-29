import React, { useState } from "react";
import mainLogo from "../../assets/images/logo.PNG";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const [close, setclose] = useState(false);
  function handleMenuClick() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
    setclose(!close);
  }
  return (
    <nav className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Link to="/" className="h-10 w-10 cursor-pointer">
                <img src={mainLogo} alt="logo" />
              </Link>
            </div>
            {props.seperator}
            <div className="hidden md:flex items-center space-x-1">
              <span className="py-5 text-gray-700">{props.title}</span>
            </div>
            <div className="md:hidden flex items-center space-x-1">
              <span className="font-bold py-5 text-2xl">Codingal</span>
            </div>
          </div>

          {props.data}

          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button cursor-pointer"
              onClick={handleMenuClick}
            >
              {close ? (
                <svg
                  x-show="showMenu"
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-menu hidden md:hidden flex flex-wrap flex-col py-3 px-6">
        {props.dataMB}
      </div>
    </nav>
  );
}
