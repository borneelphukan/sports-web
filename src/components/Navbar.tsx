import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const handleLinkClick = (linkText: string) => {
    setSelectedLink(linkText);
  };

  useEffect(() => {
    setSelectedLink("Home"); // Set the initial selected link here if needed.
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  return (
    <nav className="relative top-0 left-0 w-full bg-emerald-500 py-1 px-6 flex flex-col">
      {/* Company Logo */}
      <div className="flex items-center mb-4 pt-2">
        {/* Company Logo */}
        <div className="flex items-center pt-2">
          <Image
            src="/logo.svg"
            alt="Company Logo"
            width={50}
            height={50}
            className="h-10 w-auto ml-[5%]"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex justify-center space-x-8 mt-4">
        <Link
          id="strike"
          href="/"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Home" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Home")}
        >
          Overview
        </Link>

        {/*Portfolio*/}
        <Link
          id="strike"
          href="/Portfolio"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Portfolio" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Portfolio")}
        >
          News
        </Link>

        {/*Tournaments*/}
        <Link
          id="strike"
          href="/Tournaments"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Tournaments" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Tournaments")}
        >
          Tournament
        </Link>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {showMobileMenu && (
        <div className="lg:hidden flex flex-col mt-1 space-y-2">
          <Link
            href="/"
            className={`text-white hover:text-gray-300 ${
              selectedLink === "Home" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Home");
              toggleMobileMenu();
            }}
          >
            Overview
          </Link>

          {/* Portfolio */}
          <div className="relative">
            <Link
              href="/Portfolio"
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Portfolio" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Portfolio");
                toggleMobileMenu();
              }}
            >
              News
            </Link>
          </div>

          {/* Services */}
          <div className="relative">
            <Link
              href="/Services"
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Services" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Services");
              }}
            >
              Tournament
            </Link>
          </div>
        </div>
      )}

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden flex items-center justify-end m-1">
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-blue-400 focus:outline-none pb-2"
          aria-label="Open Mobile Menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {showMobileMenu ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 5h22v2H1V5zm0 7h22v2H1v-2zm0 7h22v2H1v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 5h22v2H1V5zm0 7h22v2H1v-2zm0 7h22v2H1v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Style for the underline */}
      <style jsx>
        {`
          .selected {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
