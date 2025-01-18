"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-gray-100 text-gray-600">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
        {/* Texto o Información Adicional */}
        <div>
          <span className="font-medium">Síguenos en nuestras redes sociales</span>
        </div>

        {/* Íconos de Redes Sociales */}
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600">
            <FaFacebookF className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500">
            <FaInstagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black">
            <FaTiktok className="h-5 w-5" />
          </Link>
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500">
            <FaWhatsapp className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
