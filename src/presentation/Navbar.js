import React from "react";
// import { ALL_JOB, HOME_PAGE } from "../utils/routeConstant";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "../description/navBar.description";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Post Job
              </span>
            </div>
          </div>

          <div>
            <ul>
              <li>
                {navItems.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.path}
                    className={`text-white bg-gray-700 hover:bg-gray-600 p-[10px] rounded-[8px] ${
                      pathname === item.path ? "hidden" : ""
                    }`}
                  >
                    {item.itemName}
                  </NavLink>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
