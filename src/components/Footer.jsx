import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-4">Contact Us</h3>
            <p className="mb-2">Email: info@montasirmihad.com</p>
            <p className="mb-2">Phone: +1 (234) 567-890</p>
            <p>Address: 123, Main Street, City, Country</p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-blue-500 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-300 hover:text-blue-500 transition duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-300 hover:text-blue-500 transition duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-300 hover:text-blue-500 transition duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-300 hover:text-blue-500 transition duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/home" className="hover:text-blue-500 transition duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500 transition duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500 transition duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500 transition duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
      </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Montasir Mihad. All Rights Reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
