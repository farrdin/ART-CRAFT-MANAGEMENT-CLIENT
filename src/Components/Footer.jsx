import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-backL dark:bg-backD p-10 text-paraL dark:text-paraD ">
        <nav>
          <h6 className="footer-title text-butL dark:text-butD">Services</h6>
          <a className="link link-hover hover:text-linL dark:hover:text-linD">
            Shipping & Returns:
          </a>
          <a className="link link-hover hover:text-linL dark:hover:text-linD">
            Terms of Service
          </a>
          <a className="link link-hover hover:text-linL dark:hover:text-linD">
            Site Map
          </a>
          <a className="link link-hover hover:text-linL dark:hover:text-linD">
            Customer Testimonials
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-butL dark:text-butD">Company</h6>
          <a className="link link-hover hover:text-linL dark:hover:text-linD">
            About us
          </a>
          <a className="link link-hover hover:text-linL dark:hover:text-linD">
            Contact
          </a>
          <a className="link link-hover hover:text-linL dark:hover:text-linD">
            Email US
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-butL dark:text-butD">Legal</h6>
          <a className="link link-hover hover:text-linL dark:hover:text-linD">
            Terms of use
          </a>
          <a className="link link-hover hover:text-linL dark:hover:text-linD">
            Privacy policy
          </a>
          <a className="link link-hover hover:text-linL dark:hover:text-linD">
            Cookie policy
          </a>
        </nav>
      </footer>
      <footer className="footer bg-backL dark:bg-backD text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <Link to="/">
            <img src={logo} className="h-10" />
          </Link>
          <Link
            to="/"
            className="text-paraL dark:text-paraD text-2xl font-merri font-bold"
          >
            CraftyHub
          </Link>
          <p className="text-paraL dark:text-paraD text-xs font-raleway font-medium">
            Craft Your Imagination
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link to="#">
              <FaYoutube className="text-xl text-butL dark:text-butD  bg-base-300 box-content px-3 py-3 rounded-full shadow-lg shadow-butD/30 hover:shadow-inner hover:shadow-butD/30 duration-300 cursor-pointer hover:text-blue-600 hover:text-[red] hover:dark:text-[red]" />
            </Link>
            <Link to="#">
              <FaXTwitter className="text-xl text-butL dark:text-butD bg-base-300 box-content px-3 py-3 rounded-full shadow-lg shadow-butD/30 hover:shadow-inner hover:shadow-butD/30 duration-300 cursor-pointer hover:text-blue-600 hover:text-secondary hover:dark:text-secondary" />
            </Link>
            <Link to="#">
              <FaFacebookF className="text-xl text-butL dark:text-butD bg-base-300 box-content px-3 py-3 rounded-full shadow-lg shadow-butD/30 hover:shadow-inner hover:shadow-butD/30 duration-300 cursor-pointer hover:text-blue-600 hover:text-[blue] hover:dark:text-[blue]" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
