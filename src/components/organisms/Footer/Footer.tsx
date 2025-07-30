import logoEvent from '@/assets/logo/logo-event.svg';
import { LinkFooter } from '@/components/molecules/LinkFooter/LinkFooter';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className="bg-navy-primary text-white py-[70px]">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <img src={logoEvent} alt="Logo event" className="h-8 md:h-12 " />
        </Link>
        <LinkFooter />
        <p className="text-gray-primary mt-[70px] text-center">
          All Rights Reserved. Semina Angga 2022.
        </p>
      </div>
    </footer>
  );
};
