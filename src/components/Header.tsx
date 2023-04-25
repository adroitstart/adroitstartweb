import { decodeEmail } from "../utils";

const  Logo = "images/Adroit_Logo_Blue-smaller.png"

const Header = () => {
  const benEmail = "YmVubmFkb2xza3lAYWRyb2l0c3RhcnQub3Jn"
  
  return (
    <section className="bg-white fixed w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center py-2 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <a href="#top">
              {/* <h1 className="text-4xl font-bold text-gray-800">ADROIT</h1> */}
              <img src={Logo} alt="ADROIT Logo" className="w-3xl mr-2 scale-75" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
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
          <nav className="hidden md:flex space-x-10">
            <a
              href="#about-us"
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
            >
              About Us
            </a>
            <a
              href="#programs"
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
            >
              Programs
            </a>
            <a
              href="#meet-us"
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
            >
              Meet Us
            </a>
            <a
              href={`mailto:${decodeEmail(benEmail)}`}
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
            >
              Get Involved
            </a>
          </nav>
          <div className="hidden md:flex items-center md:flex-1 lg:w-0">
            <a
              href="https://paypal.me/adroitstart?country.x=US&locale.x=en_US" target="_blank"
              className="ml-150 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-xl font-medium text-white bg-adroitBlue hover:bg-adroitOrange"
            >
              Donate
              {/* <FaDonate className="ml-2 h-5 w-5" /> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
