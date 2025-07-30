import { useParams } from 'react-router-dom';

const CheckOutPage = () => {
  const eventId = useParams();
  console.log('Event ID:', eventId);

  return <div>CheckOutPage</div>;
};

export default CheckOutPage;
