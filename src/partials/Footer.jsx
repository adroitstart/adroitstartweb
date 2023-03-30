import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../images/Favicon_v2.png'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={Logo} alt="ADROIT Logo" className="w-16 h-16 scale-25 mr-2" />
          <p>705 Vosswood Dr.</p>
          <p>Nashville, TN 37205</p>
          <p>&copy;{currentYear} ADROIT</p>
        </div>
        <div className="flex items-center">
          <a href="#" className="mr-4">
            <FaFacebook className="text-3xl text-adroitBlue hover:text-adroitOrange" />
          </a>
          <a href="#" className="mr-4">
            <FaTwitter className="text-3xl text-adroitBlue hover:text-adroitOrange" />
          </a>
          <a href="#" className="mr-4">
            <FaInstagram className="text-3xl text-adroitBlue hover:text-adroitOrange" />
          </a>
          <a href="#" className="mr-4">
            <FaLinkedin className="text-3xl text-adroitBlue hover:text-adroitOrange" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;