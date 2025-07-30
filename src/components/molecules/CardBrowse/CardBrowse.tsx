import { Link } from 'react-router-dom';

interface CardBrowseProps {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  price: string;
}

export const CardBrowse = ({ id, title, category, date, imageUrl, price }: CardBrowseProps) => {
  return (
    <Link to={`/event/${id}`} className="max-w-[295px] bg-white pb-5 rounded-[20px]">
      <div className="h-[200px] relative overflow-hidden mb-5 rounded-t-[20px]">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 w-[60px] h-[30px]">
          <p className="text-sm text-green-primary bg-navy-primary rounded-[40px] text-center">
            {price}
          </p>
        </div>
      </div>
      <div className="flex flex-col px-5 ">
        <p className="text-lg font-medium text-navy-primary mb-8">{title}</p>
        <p className="text-sm text-gray-primary mb-[30px]">{category}</p>
        <p className="text-sm font-medium text-navy-primary">{date}</p>
      </div>
    </Link>
  );
};
