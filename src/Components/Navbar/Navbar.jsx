import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/images/Logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("Home");
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Determine the active NavLink based on the URL pathname
    const pathname = location.pathname;
    if (pathname === "/") {
      setActiveNavLink("Home");
    } else if (pathname === "/donation") {
      setActiveNavLink("Donation");
    } else if (pathname === "/statistic") {
      setActiveNavLink("Statistic");
    } else {
      setActiveNavLink("/"); // Set to an empty string for other cases
    }
  }, [location.pathname]);

  return (
    <div className="navbar flex justify-between lg:px-[100px] pt-[20px] md:pt-[50px] relative">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div>
        <div className={`nav-items hidden lg:block ${menuOpen ? "open" : ""}`}>
          <ul className="flex gap-12 text-[18px]">
            <NavLink
              to="/"
              className={`cursor-pointer ${
                activeNavLink === "Home" ? "text-[#FF444A] font-semibold border-b-2 border-[#FF444A]" : "hover:text-[#FF444A] border-b-2 border-[transparent] font-semibold hover:border-b-2 hover:border-[#FF444A] duration-200"
              }`}
            >
              Home
            </NavLink>
            <NavLink to="/donation">
            <li
              className={`cursor-pointer ${
                activeNavLink === "Donation" ? "text-[#FF444A] font-semibold border-b-2 border-[#FF444A]" : "hover:text-[#FF444A] border-b-2 border-[transparent] font-semibold hover:border-b-2 hover:border-[#FF444A] duration-200"
              }`}
            >
              Donation
            </li>
            </NavLink>
            <NavLink to="/statistic">
            <li
              className={`cursor-pointer ${
                activeNavLink === "Statistic" ? "text-[#FF444A] font-semibold border-b-2 border-[#FF444A]" : "hover:text-[#FF444A] border-b-2 border-[transparent] font-semibold hover:border-b-2 hover:border-[#FF444A] duration-200"
              }`}
            >
              Statistics
            </li>
            </NavLink>
          </ul>
        </div>
        {/* drop-down */}
        <div className={`dropdown ${menuOpen ? "open" : ""}`}>
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
            <GiHamburgerMenu className="text-[30px] text-gray-600" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] py-2 px-4 shadow rounded-lg ml-[-40px] bg-gray-300"
          >
           <NavLink
              to="/"
              className={`cursor-pointer ${
                activeNavLink === "Home" ? "text-[#FF444A] font-semibold border-b-2 border-[#FF444A]" : "hover:text-[#FF444A] border-b-2 border-[transparent] font-semibold hover:border-b-2 hover:border-[#FF444A] duration-200"
              }`}
            >
              Home
            </NavLink>
            <NavLink to="/donation">
            <li
              className={`cursor-pointer ${
                activeNavLink === "Donation" ? "text-[#FF444A] font-semibold border-b-2 border-[#FF444A]" : "hover:text-[#FF444A] border-b-2 border-[transparent] font-semibold hover:border-b-2 hover:border-[#FF444A] duration-200"
              }`}
            >
              Donation
            </li>
            </NavLink>
            <NavLink to="/statistic">
            <li
              className={`cursor-pointer ${
                activeNavLink === "Statistic" ? "text-[#FF444A] font-semibold border-b-2 border-[#FF444A]" : "hover:text-[#FF444A] border-b-2 border-[transparent] font-semibold hover:border-b-2 hover:border-[#FF444A] duration-200"
              }`}
            >
              Statistics
            </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
