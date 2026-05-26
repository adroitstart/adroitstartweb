import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { decodeEmail } from "../utils";

const Logo = '/images/Favicon_v2.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const benEmail = "YmVubmFkb2xza3lAYWRyb2l0c3RhcnQub3Jn";

  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img src={Logo} alt="ADROIT Logo" className="w-16 h-16 mb-2" />
            <p>500 Interstate Blvd S #200</p>
            <p>Nashville, TN 37210</p>
            <p>&copy;{currentYear} ADROIT</p>
          </div>

          <div className="flex flex-1 flex-col items-center gap-6 lg:px-12">
            <nav className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-adroitBlue font-semibold">
              <a href="/#about-us" className="hover:text-adroitOrange">
                About Us
              </a>
              <a href="/programs" className="hover:text-adroitOrange">
                Programs
              </a>
              <a href="/#meet-us" className="hover:text-adroitOrange">
                Meet Us
              </a>
              <a href={`mailto:${decodeEmail(benEmail)}`} className="hover:text-adroitOrange">
                Get Involved
              </a>
              <a
                href="/files/Impact_Report_ADROIT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-adroitOrange"
              >
                Impact Report
              </a>
              <a href="/donate" className="hover:text-adroitOrange">
                Donate
              </a>
            </nav>

            <div className="h-px w-full max-w-3xl bg-gray-300"></div>

            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-adroitBlue font-semibold">
              <a href="/title-vi-notice" className="hover:text-adroitOrange">
                Title VI Notice
              </a>
              <span className="text-adroitBlue">|</span>
              <a
                href="/files/Fraud_Waste_Abuse_Poster.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-adroitOrange"
              >
                Comptroller Notice
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-center gap-6 lg:items-end">
            <a
              href="/donate"
              className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-full shadow-sm text-xl font-semibold text-white bg-adroitBlue hover:bg-adroitOrange"
            >
              Donate
            </a>
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-3xl text-adroitBlue hover:text-adroitOrange" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-3xl text-adroitBlue hover:text-adroitOrange" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-3xl text-adroitBlue hover:text-adroitOrange" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-3xl text-adroitBlue hover:text-adroitOrange" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
