import { useState, useEffect } from "react";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const activeLink = "text-blue-700   font-semibold scale-105";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1184);
      if (window.innerWidth >= 1184) {
        setNavOpen(false);
        setServicesOpen(false);
        setAcademicsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle main nav
  const toggleNav = () => {
    setNavOpen((prev) => {
      if (prev) {
        setServicesOpen(false);
        setAcademicsOpen(false);
      }
      return !prev;
    });
  };

  // Toggle dropdowns only on mobile
  const toggleServices = () => {
    if (isMobile) setServicesOpen((prev) => !prev);
  };
  const toggleAcademics = () => {
    if (isMobile) setAcademicsOpen((prev) => !prev);
  };

  // Close menus on link click (mobile only)
  const closeMobileMenu = () => {
    if (isMobile) {
      setNavOpen(false);
      setServicesOpen(false);
      setAcademicsOpen(false);
    }
  };

  return (
    <>
      {/* Header top */}
      <div className="header-top z-50 bg-blue-900 py-5 md:h-12 md:items-center hidden min-[1184px]:flex md:justify-between px-8 text-white">
        <div className="md:flex gap-10 md:w-1/2 md:col-span-2">
          <p>
            <a
              href="https://maps.app.goo.gl/hxHdDUJHLUdRmj4m6"
              target="_blank"
              rel="noopener noreferrer"
              className="md:flex md:items-center gap-1 font-medium"
            >
              <FaLocationDot />
              1st Block, Rajajinagar, Bangalore
            </a>
          </p>
          <p>
            <Link to="/contact" className="md:flex items-center gap-1 font-medium">
              <IoIosMail />
              marketing@research-assist.com
            </Link>
          </p>
        </div>

        <h4 className="footer-title text-white md:ml-130 items-center align-middle">Follow Us:</h4>
        <div className="flex justify-between gap-3 text-white">
          <a href="https://www.facebook.com/ChanRericr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:scale-110 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="https://in.linkedin.com/company/chanre-rheumatology-&-immunology-center-&-research" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/user/chanre1" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <FaYoutube />
          </a>
          <a href="https://twitter.com/ChanreCenter?t=aCWSkO9R7XsQNm2hlJ6s2g&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky  top-0 bg-white shadow-lg z-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" onClick={closeMobileMenu}>
                <img
                  className="h-10 w-auto"
                  src="https://www.research-assist.com/assets/img/logo24.jpg"
                  alt="Your Company"
                />
              </Link>
            </div>

            {/* Hamburger Button */}
            <div className="flex items-center min-[1185px]:hidden">

              <button
                onClick={toggleNav}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                aria-controls="mobile-menu"
                aria-expanded={navOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                {navOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Nav Links */}
            <div className="hidden min-[1185px]:flex space-x-6 items-center">

              {/* Center nav links on desktop */}
              <NavLink to="/" className= {({ isActive }) => (isActive ? activeLink :"text-gray-700  font-medium hover:text-blue-600")}>
                Home
              </NavLink>
              <NavLink to="/about" className= {({ isActive }) => (isActive ? activeLink :"text-gray-700 font-medium hover:text-blue-600 ")}>
                About Us
              </NavLink>

              {/* Services Dropdown (Desktop: hover) */}
              <div className="relative group">
                <NavLink
                  type="button"
                  className="peer inline-flex items-center text-gray-700 font-medium hover:text-blue-600 focus:outline-none"
                >
                  <span>Services</span>
                  <svg
                    className="ml-1 h-4 w-4 fill-current group-hover:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </NavLink>

                {/* Dropdown menu */}
                <div className="absolute top-full left-0 z-50   hidden peer-hover:flex hover:flex flex-col bg-blue-900 text-white rounded-md shadow-lg w-46">
                  <Link to="/english" className="px-4 py-2 hover:bg-blue-700">English Language Editing</Link><hr className="brightness-60 " />
                  <Link to="/research" className="px-4 py-2 hover:bg-blue-700">Research Designing</Link><hr className="brightness-60 " />
                  <Link to="/manuscriptEditing" className="px-4 py-2 hover:bg-blue-700">Manuscript Editing</Link><hr className="brightness-60 " />
                  <Link to="/manuscriptWriting" className="px-4 py-2 hover:bg-blue-700">Manuscript Writing</Link><hr className="brightness-60 " />
                  <Link to="/clinicalDesign" className="px-4 py-2 hover:bg-blue-700">Clinical Trial Designing</Link><hr className="brightness-60 " />
                  <Link to="/figurePreparation" className="px-4 py-2 hover:bg-blue-700">Figure Preparation</Link><hr className="brightness-60 " />
                  <Link to="/dataManagement" className="px-4 py-2 hover:bg-blue-700">Data Management</Link><hr className="brightness-60 " />
                  <div className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Utility & Tools</div><hr className="brightness-60 " />
                  <div className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Preview Demo</div><hr className="brightness-60 " />
                </div>
              </div>


              {/* Academics Dropdown (Desktop: hover) */}
              <div className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center text-gray-700 font-medium hover:text-blue-600 focus:outline-none"
                >
                  <span>Academics</span>
                  <svg
                    className="ml-1 h-4 w-4 fill-current group-hover:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

                <ul className="absolute hidden group-hover:block bg-blue-900 text-white rounded-md shadow-lg w-46 z-50 ">
                  <Link to="/regularBiostatic" onClick={closeMobileMenu}>
                    <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Regular Biostatic Program</li><hr className="brightness-60 " />
                  </Link>
                  <Link to="/research" onClick={closeMobileMenu}>
                    <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Sir Lecture Series</li><hr className="brightness-60 " />
                  </Link>
                  <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Virtual Training Program on R</li><hr className="brightness-60 " />
                  <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">High-end Statistics Training Programme for Doctors</li><hr className="brightness-60 " />
                </ul>
              </div>

              <NavLink to="/payments" className={({ isActive }) => (isActive ? activeLink :"text-gray-700 font-medium hover:text-blue-600 ")}>
                Payments
              </NavLink>
              <NavLink to="/manuscript" className={({ isActive }) => (isActive ? activeLink :"text-gray-700 font-medium hover:text-blue-600 ")}>
                Upload Manuscripts
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? activeLink :"text-gray-700 font-medium hover:text-blue-600 ")}>
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {navOpen && (
          <div className="block min-[1185px]:hidden bg-white shadow-inner">

            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" onClick={closeMobileMenu} className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-gray-100 rounded">
                Home
              </Link>
              <Link to="/about" onClick={closeMobileMenu} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded">
                About Us
              </Link>

              {/* Services Dropdown Mobile */}
              <div>
                <button
                  onClick={toggleServices}
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded focus:outline-none"
                >
                  <span>Services</span>
                  <svg
                    className={`h-5 w-5 transform transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="pl-4">
                    <Link to="/english" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      English Language Editing
                    </Link>
                    <Link to="/research" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Research Designing
                    </Link>
                    <Link to="/manuscriptEditing" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Manuscript Editing
                    </Link>
                    <Link to="/manuscriptWriting" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Manuscript Writing
                    </Link>
                    <Link to="/clinicalDesign" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Clinical Trial Designing
                    </Link>
                    <Link to="/figurePreparation" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Figure Preparation
                    </Link>
                    <Link to="/dataManagement" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Data Management
                    </Link>
                    <div className="block px-3 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded">Utility & Tools</div>
                    <div className="block px-3 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded">Preview Demo</div>
                  </div>
                )}
              </div>

              {/* Academics Dropdown Mobile */}
              <div>
                <button
                  onClick={toggleAcademics}
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded focus:outline-none"
                >
                  <span>Academics</span>
                  <svg
                    className={`h-5 w-5 transform transition-transform ${academicsOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {academicsOpen && (
                  <div className="pl-4">
                    <Link to="/regularBiostatic" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Regular Biostatic Program
                    </Link>
                    <Link to="/research" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Sir Lecture Series
                    </Link>
                    <div className="block px-3 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded">
                      Virtual Training Program on R
                    </div>
                    <div className="block px-3 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded">
                      High-end Statistics Training Programme for Doctors
                    </div>
                  </div>
                )}
              </div>

              <Link to="/payments" onClick={closeMobileMenu} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded">
                Payments
              </Link>
              <Link to="/manuscript" onClick={closeMobileMenu} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded">
                Upload Manuscripts
              </Link>
              <Link to="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
