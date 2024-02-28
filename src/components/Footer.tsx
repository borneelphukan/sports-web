import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center w-1/2 mx-auto"> {/* Adjust the width as needed */}
      <footer className="text-center py-8 text-gray-950">
        {/* Horizontal Line */}
        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"/>

        {/* Row of Links */}
        <div className="flex justify-center mb-4">
          <a href="#" className="mr-4 text-sm font-extralight">
            Jobs
          </a>
          <a href="#" className="mr-4 text-sm font-extralight">
            Legal Notice
          </a>
          <a href="#" className="mr-4 text-sm font-extralight">
            Privacy Policy
          </a>
          <a href="#" className="mr-4 text-sm font-extralight">
            Contact
          </a>
          <a href="#" className="mr-4 text-sm font-extralight">
            Shop
          </a>
        </div>

        {/* All Rights Reserved tagline */}
        <p className="mt-8 text-sm">
          Borneel Bikash Phukan &copy; {new Date().getFullYear()} All Rights
          Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
