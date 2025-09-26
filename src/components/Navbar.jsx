import { useState } from "react";

const navItems = [
  { name: "Our Path", href: "#ourpath" },
  { name: "About Us", href: "#aboutus" },
  { name: "Contact Us", href: "#contactus" },
  { name: "Registration", href: "#registration" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40  transition-all duration-300 pt-2 ">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold tracking-tight"
        >
          Haoma
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 backdrop-blur-md rounded-full">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="nav-hover transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 py-2 space-y-2">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="block text-gray-800 dark:text-white hover:text-[#08CB00] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;