import imgCard1 from '@/assets/images/card-1.png';
import imgCard2 from '@/assets/images/card-2.png';
import imgCard3 from '@/assets/images/card-3.png';
import imgCard4 from '@/assets/images/card-4.png';
import { CardBrowse } from '@/components/molecules/CardBrowse/CardBrowse';

export const Browse = () => {
  return (
    <section id="browse" className="bg-[#F5F7F9] py-[100px]">
      <div className="max-w-7xl mx-auto">
        <p className="font-semibold text-xl bg-gradient-to-r from-[#F32FB8] to-[#FDD7BE] inline-block text-transparent bg-clip-text mb-1">
          Grow Today
        </p>
        <h3 className="font-medium text-[32px] text-navy-primary mb-[50px]">Featured Events</h3>
        <div className="flex items-start gap-5">
          <CardBrowse
            id="1"
            title="Learn Jira for Sprint Design Venture"
            category="Product Design"
            date="Bandung, 22 Jan 2022"
            imageUrl={imgCard1}
            price="Free"
          />
          <CardBrowse
            id="2"
            title="Team Management for Long Term Success"
            category="UX Design"
            date="Bandung, 23 Jan 2022"
            imageUrl={imgCard2}
            price="Free"
          />
          <CardBrowse
            id="3"
            title="Learn React for Frontend Development"
            category="Frontend Development"
            date="Bandung, 24 Jan 2022"
            imageUrl={imgCard3}
            price="Free"
          />
          <CardBrowse
            id="4"
            title="Learn Node.js for Backend Development"
            category="Backend Development"
            date="Bandung, 25 Jan 2022"
            imageUrl={imgCard4}
            price="Free"
          />
        </div>
      </div>
    </section>
  );
};
