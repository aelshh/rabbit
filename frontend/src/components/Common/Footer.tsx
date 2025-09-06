import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t  border-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 ">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="font-medium text-sm mb-6 text-gray-600">
            Sign up and get 10% off your first order.
          </p>

          {/* News letter form */}

          <form className="flex ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button className="bg-black text-white hover:bg-gray-800 rounded-r-md  px-6 py-3  text-sm transition-all">
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-500  transition-colors">
              <Link to="#">Men's Top Wear</Link>
            </li>
            <li className="hover:text-gray-500  transition-colors">
              <Link to="#">Women's Top Wear</Link>
            </li>
            <li className="hover:text-gray-500  transition-colors">
              <Link to="#">Men's Bottom Wear</Link>
            </li>
            <li className="hover:text-gray-500  transition-colors">
              <Link to="#">Women's Bottom Wear</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-500  transition-colors">
              <Link to="#">Contact Us</Link>
            </li>
            <li className="hover:text-gray-500  transition-colors">
              <Link to="#">About Us</Link>
            </li>
            <li className="hover:text-gray-500  transition-colors">
              <Link to="#">FAQs</Link>
            </li>
            <li className="hover:text-gray-500  transition-colors">
              <Link to="#">Features</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6 ">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <TbBrandMeta className="w-5 h-5 " />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoInstagram className="w-5 h-5 " />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXLine className="w-4 h-4 " />
            </a>
          </div>

          <p className="text-gray-500">Call Us</p>
          <p>
            <FiPhoneCall className="inline-block mr-2" />
            0123-456-789
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-600 text-sm tracking-tigher text-center">
          © 2025, Rabbit. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
