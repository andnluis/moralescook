"use client";


import { Disclosure} from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const leftmenu = [
    { label: "Nuestros Servicios", href: "/services" },
    { label: "Nuestra Promesa", href: "/promise" },
  ];

  const rightmenu = [
    { label: "Nuestras Referencias", href: "/references" },
    { label: "Contáctanos", href: "/contact" }, 
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];
 
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo Morales Cook"
                width={120}
                height={120}
                className="h-12 w-12"
              />
            </Link>

            {/* Mobile Menu Button */}
            <Disclosure.Button
              className="md:hidden flex items-center justify-center p-2 text-gray-500 hover:text-blue-500 focus:outline-none">
              {open ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </Disclosure.Button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {leftmenu.map((item) => (
                <Link key={item.label} href={item.href} className="text-gray-600 hover:text-blue-500">
                  {item.label}
                </Link>
              ))}
              {rightmenu.map((item) => (
                <Link key={item.label} href={item.href} className="text-gray-600 hover:text-blue-500">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-2 px-4 pt-2 pb-3">
              {mobilemenu.map((item) => (
                <Link key={item.label} href={item.href} className="block text-gray-600 hover:text-blue-500">
                  {item.label}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
