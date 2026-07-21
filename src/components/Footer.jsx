import { Link } from "react-router-dom";
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import {
//   Instagram,
//   Twitter,
//   Youtube,
//   Mail,
// } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>

          <h2 className="text-3xl font-bold text-white">
            NewsPulse
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Delivering breaking news, trusted journalism and
            insightful stories from around the world.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link className="hover:text-red-500 transition" to="/">
              Home
            </Link>

            <Link className="hover:text-red-500 transition" to="/about">
              About
            </Link>

            <Link className="hover:text-red-500 transition" to="/search">
              Search
            </Link>

            <Link className="hover:text-red-500 transition" to="/bookmark">
              Bookmarks
            </Link>

          </div>

        </div>

        {/* Categories */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Categories
          </h3>

          <div className="flex flex-col gap-3">

            <p className="hover:text-red-500 transition cursor-pointer">
              Technology
            </p>

            <p className="hover:text-red-500 transition cursor-pointer">
              Sports
            </p>

            <p className="hover:text-red-500 transition cursor-pointer">
              Business
            </p>

            <p className="hover:text-red-500 transition cursor-pointer">
              Health
            </p>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Stay Connected
          </h3>

          <div className="flex items-center gap-3 mb-5">

            <FontAwesomeIcon icon={faEnvelope} />

            <span>support@novanews.com</span>

          </div>

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-zinc-800 p-3 rounded-full hover:bg-red-600 transition"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="#"
              className="bg-zinc-800 p-3 rounded-full hover:bg-red-600 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="#"
              className="bg-zinc-800 p-3 rounded-full hover:bg-red-600 transition"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a
              href="#"
              className="bg-zinc-800 p-3 rounded-full hover:bg-red-600 transition"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 NovaNews. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              className="hover:text-red-500 transition"
              to="/privacy"
            >
              Privacy Policy
            </Link>

            <Link
              className="hover:text-red-500 transition"
              to="/terms"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer; 