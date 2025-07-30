import { Navbar } from '@/components/organisms/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import image2 from '@/assets/images/details-image.png';
import { CardSpeaker } from '@/components/molecules/CardSpeaker/CardSpeaker';
import iconCheck from '@/assets/icons/ic-check.svg';

const DetailPage = () => {
  const { eventId } = useParams();
  return (
    <div>
      <Navbar />
      <section className="pt-24 md:pt-[190px]">
        <div className="bg-navy-primary absolute inset-0 h-[1080px] -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <img src={image2} alt={`Event ${eventId}`} className="rounded-[30px] " />
          <div className="grid grid-cols-12 gap-10 mt-[70px]">
            <div className="col-span-7">
              <h1 className="py-6 font-semibold text-2xl md:text-[42px] text-white">
                Start Your Design Career With Design Sprint
              </h1>
              <div id="event-details" className="flex flex-col gap-5 mt-[140px] mb-[50px]">
                <h4 className="font-semibold text-xl text-navy-primary">Event Details</h4>
                <p className="text-navy-secondary leading-[34px]">
                  Most realtors and investors are using Social Media (Facebook and Google)
                  ineffectively because they don't know what they're doing or to start. They spend
                  hours and hours trying different things and getting nowhere. This makes them feel
                  like giving up on marketing altogether.
                </p>
                <p className="text-navy-secondary leading-[34px]">
                  We are a group of professionals who have decided to help people making travel
                  experiences whenever they want and wherever they are. Our virtual tours have as
                  their topic the beauties of the ancient world, such as Ancient Egypt or Ancient
                  Rome, Art and History.
                </p>
              </div>
              <div id="keypoints" className="flex flex-col gap-5 mb-[50px]">
                <h4 className="font-semibold text-xl text-navy-primary">Keypoints</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <img src={iconCheck} alt="Keypoints" className="w-6 h-6" />
                    <p className="text-navy-secondary">
                      Hours trying different things and getting nowhere makes them feel like giving
                      up on marketing altogether.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <img src={iconCheck} alt="Keypoints" className="w-6 h-6" />
                    <p className="text-navy-secondary">
                      Hours trying different things and getting nowhere makes them feel like giving
                      up on marketing altogether.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <img src={iconCheck} alt="Keypoints" className="w-6 h-6" />
                    <p className="text-navy-secondary">
                      Hours trying different things and getting nowhere makes them feel like giving
                      up on marketing altogether.
                    </p>
                  </div>
                </div>
              </div>
              <div id="location" className="flex flex-col gap-5 mb-[70px]">
                <h4 className="font-semibold text-xl text-navy-primary">Maps Location</h4>
              </div>
            </div>
            <div className="col-span-4 col-start-9">
              <CardSpeaker />
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default DetailPage;
