import image1 from '@/assets/images/1.png';
import image2 from '@/assets/images/2.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-navy-primary h-[880px] pt-48 py-10 mb-24 md:mb-64 flex flex-col items-center"
    >
      <h1 className="text-center text-4xl md:text-[45px] font-semibold leading-normal text-white mb-[30px]">
        Expand Your{' '}
        <span className="bg-gradient-to-r from-[#00A0F5] to-[#00F7E6] inline-block text-transparent bg-clip-text">
          Knowledge
        </span>
        <br />
        by{' '}
        <span className="bg-gradient-to-r from-[#F32FB8] to-[#FDD7BE] inline-block text-transparent bg-clip-text">
          Joining
        </span>{' '}
        Our Greatest Event
      </h1>
      <p className="text-center text-sm md:text-base text-gray-primary font-normal leading-[30px] mb-[30px]">
        Kami menyediakan berbagai acara terbaik untuk membantu
        <br />
        anda dalam meningkatkan skills di bidang teknologi
      </p>
      <Link to={'/events'} className="text-center mb-[100px]">
        <button className="bg-green-primary w-[160px] h-[54px] text-navy-primary font-semibold text-center rounded-[45px] shadow-lg shadow-green-primary/50">
          Browse Now
        </button>
      </Link>
      <div className="flex flex-row flex-nowrap justify-center items-center gap-5">
        <img src={image1} alt="Hero" className="w-[662px] h-auto" />
        <img src={image2} alt="Hero" className="w-[838px] h-auto" />
        <img src={image1} alt="Hero" className="w-[662px] h-auto" />
      </div>
    </section>
  );
};
