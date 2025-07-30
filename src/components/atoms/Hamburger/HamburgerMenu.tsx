interface HamburgerMenuProps {
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const HamburgerMenu = ({ toggleMobileMenu, isMobileMenuOpen }: HamburgerMenuProps) => {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMobileMenu}
        className="flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
      >
        <span className="sr-only">Open main menu</span>
        <div className="relative w-6 h-6">
          {/* Hamburger Icon */}
          <span
            className={`absolute top-0 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          ></span>
          <span
            className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`absolute top-5 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};
