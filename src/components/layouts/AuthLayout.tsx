import type { ReactNode } from 'react';
import LogoRemi from '@/assets/logo/logo-remi.svg';
import authImg from '@/assets/images/auth-images.svg';

interface AuthLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const AuthLayout = ({ title, description, children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen grid-cols-9 md:grid">
      <div className="left-content hidden rounded-r-[56px] bg-cyan-600 md:col-span-4 md:flex justify-center md:items-center">
        <a href={'/'} className="absolute left-8 top-8 hidden md:block">
          <img src={LogoRemi} alt="Remi Logo" height={64} />
        </a>
        <img src={authImg} width={1000} height={1000} alt="Login Animation" className="w-1/2" />
      </div>
      <div className="right-content col-span-5 px-12 md:px-16 lg:px-20 xl:px-24">
        <header className="flex items-center justify-between py-5 md:justify-end md:gap-4 md:pt-8">
          <a href={'/'} className="md:hidden">
            <img src={LogoRemi} alt="Remi Logo" height={48} className="h-12" />
          </a>
        </header>
        <div className="mb-12 mt-2">
          <h1 className="mb-2 text-[32px] font-semibold text-remi-red md:text-4xl lg:text-5xl">
            {title} <span className="hidden md:inline">👏</span>
          </h1>
          <p className="text-sm font-normal tracking-widest text-slate-700 lg:text-[16px]">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
