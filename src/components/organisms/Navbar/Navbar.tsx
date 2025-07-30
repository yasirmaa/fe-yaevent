import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoEvent from '@/assets/logo/logo-event.svg';
import { HamburgerMenu } from '@/components/atoms/Hamburger/HamburgerMenu';
import clsx from 'clsx';

const menuItems = [
  { to: '/', label: 'Home' },
  { to: '/browse', label: 'Browse' },
  { to: '/stories', label: 'Stories' },
  { to: '/about', label: 'About' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={clsx('fixed top-0 z-50 w-full bg-navy-primary shadow-md', {
        'bg-white/30 backdrop-blur-sm': isMobileMenuOpen,
        'bg-navy-primary': !isMobileMenuOpen,
      })}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-0 md:py-3">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <img src={logoEvent} alt="Logo event" className="h-4 md:h-8 " />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  clsx('nav-link text-gray-primary hover:text-white', {
                    'active border-b-2 border-green-primary text-white': isActive,
                  })
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center">
            <Link to="/login">
              <button className="w-[140px] h-[50px] text-base font-medium text-white bg-navy-secondary hover:bg-navy-secondary/80 rounded-[45px] transition-colors duration-200 cursor-pointer hover:text-green-primary">
                Login
              </button>
            </Link>
          </div>
          {/* Hamburger Menu Mobile */}
          <HamburgerMenu toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </div>
      <div
        className={`md:hidden bg-blur transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col items-center gap-2 pb-4 text-white">
          {menuItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx('nav-link text-gray-primary hover:text-white', {
                  'active border-b-2 border-green-primary text-white': isActive,
                })
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
