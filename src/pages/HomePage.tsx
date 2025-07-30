import { Footer } from '@/components/organisms/Footer/Footer';
import { Brand } from '@/components/organisms/landing/Brand/Brand';
import { Browse } from '@/components/organisms/landing/Browse/Browse';
import { Hero } from '@/components/organisms/landing/Hero/Hero';
import { Navbar } from '@/components/organisms/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Brand />
      <Browse />
      <Footer />
    </div>
  );
};

export default HomePage;
