import { Link } from 'react-router-dom';

export const LinkFooter = () => {
  return (
    <div className="flex gap-44 mt-4">
      <p className="text-gray-primary max-w-[295px]">
        Semina adalah tempat di mana anda dapat mencari event sesuai dengan minat & terdekat.
      </p>
      <div>
        <h4 className="font-medium mb-4">Features</h4>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="text-gray-primary">
              Virtual
            </a>
          </li>
          <li>
            <Link to="/" className="underline">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-primary">
              Merchant
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-primary">
              Tickets
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium mb-4">Company</h4>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="text-gray-primary">
              Jobs
            </a>
          </li>
          <li>
            <Link to="/" className="text-gray-primary">
              API
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-primary">
              Press
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-primary">
              Sitemap
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium mb-4">Learn</h4>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="text-gray-primary">
              Guidebook
            </a>
          </li>
          <li>
            <Link to="/" className="text-gray-primary">
              Inspiration
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-primary">
              Community
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-primary">
              Tools
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
