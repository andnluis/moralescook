"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Image
                src="/logo.png"
                alt="Logo en footer"
                width={85}
                height={85}
              />
            </div>
            <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
              9993-9192
              <br />
              moralescook22@gmail.com
              <br />
              Tegucigalpa, Honduras.
            </p>
          </div>
          {/* Redes sociales colocadas debajo del párrafo */}
          <div className="mt-6 flex justify-center space-x-6 text-gray-500">
            <Link
              href="https://www.facebook.com/moralescook22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/moralescook3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@moralescook?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaTiktok className="h-5 w-5" />
            </Link>
            <Link
              href="https://wa.link/bs28ik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    );
}

export default Footer;