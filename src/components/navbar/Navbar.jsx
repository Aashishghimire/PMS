import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font main__header">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link
            to="/"
            className="mr-5 hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="mr-5 hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="mr-5 hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            Blog
          </Link>
          <Link
            to="/profile"
            className="mr-5 hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            Profile
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-900 nav__list"
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
          >
            My Cart
          </Link>
        </nav>
        <a
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 "
          style={{ cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
            style={{ backgroundColor: "#22c514" }}
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Go Green</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link to="/signup">
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 nav__button"
              style={{ color: "#22c514" }}
            >
              Sign In
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
