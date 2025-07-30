import appleLogo from '@/assets/images/apple-111.svg';
import adobeLogo from '@/assets/images/Adobe.svg';
import slackLogo from '@/assets/images/slack-21.svg';
import spotifyLogo from '@/assets/images/spotify-11.svg';
import googleLogo from '@/assets/images/google-2015.svg';

export const Brand = () => {
  return (
    <section className="text-center py-16 ">
      <p className="mb-7 font-medium text-gray-primary">
        Events held by top & biggest global companies
      </p>
      <div className="flex flex-row flex-wrap justify-center items-center gap-[70px]">
        <img src={appleLogo} alt="Apple Logo" className="h-[30px]" />
        <img src={adobeLogo} alt="Adobe Logo" className="h-[30px]" />
        <img src={slackLogo} alt="Slack Logo" className="h-[30px]" />
        <img src={spotifyLogo} alt="Spotify Logo" className="h-[30px]" />
        <img src={googleLogo} alt="Google Logo" className="h-[30px]" />
      </div>
    </section>
  );
};
