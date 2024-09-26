import React from "react";
import { ALL_JOB, HOME_PAGE } from "../utils/routeConstant";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Post Job
              </span>
            </a>
          </div>

          <div>
            <ul>
              <li>
                <NavLink
                  to={HOME_PAGE}
                  className={`text-white bg-gray-700 hover:bg-gray-600 p-[10px] rounded-[8px] ${
                    pathname === HOME_PAGE ? "hidden" : ""
                  }`}
                >
                  Post Job
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ALL_JOB}
                  className={`text-white bg-gray-700 hover:bg-gray-600 p-[10px] rounded-[8px] ${
                    pathname === ALL_JOB ? "hidden" : ""
                  }`}
                >
                  All Jobs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
