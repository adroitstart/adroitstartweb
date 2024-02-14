import { useState } from 'react';
import { decodeEmail } from "../utils";

const Logo = "images/Adroit_Logo_Blue-smaller.png"

const Header = () => {
  const [navigatorOnMobileOpen, setNavigatorOnMobileOpen] = useState(false);
  const benEmail = "YmVubmFkb2xza3lAYWRyb2l0c3RhcnQub3Jn"

  const toogleMenu = () => {
    setNavigatorOnMobileOpen(!navigatorOnMobileOpen)    
  }
  
  const closeMenu = () => {
      setNavigatorOnMobileOpen(false)
    // required for the anchor elements to enable following the link
    return true; 
    
  } 
  
  return (
    <section className="bg-white fixed w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center py-2 md:justify-start md:space-x-10 headerHeight">
          <div className="lg:w-0 lg:flex-1">
            <a href="/#top">
              {/* <h1 className="text-4xl font-bold text-gray-800">ADROIT</h1> */}
              <img src={Logo} alt="ADROIT Logo" className="w-xl mr-2 scale-50" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toogleMenu}
              type="button"
              className="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-adroitBlue hover:text-gray-900 hover:bg-adroitOrange focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className={ (navigatorOnMobileOpen == true ? 'mobileNavigator' : 'hidden')  + ' md:flex space-x-10 items-center'}>
            <a
              href="/#about-us"
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
              onClick={closeMenu}
            >
              About Us
            </a>
            <a
              href="/programs"
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
              onClick={closeMenu}
            >
              Programs
            </a>
            <a
              href="/#meet-us"
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
              onClick={closeMenu}
            >
              Meet Us
            </a>
            <a
              href={`mailto:${decodeEmail(benEmail)}`}
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
            >
              Get Involved
            </a>
            <a
              href="files/Impact_Report_ADROIT.pdf"
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
              target="_blank"
            >
              Impact Report
            </a>
            <a
              href="/donate"
              className={(navigatorOnMobileOpen == true ? 'bg-adroitOrange' : 'bg-adroitBlue')  +  " ml-150 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-xl font-medium text-white hover:bg-adroitOrange"}
              onClick={closeMenu}
            >
              Donate
              {/* <FaDonate className="ml-2 h-5 w-5" /> */}
            </a>

          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
