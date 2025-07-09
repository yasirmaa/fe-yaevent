import { Navbar } from '@/components/organisms/Navbar/Navbar';
import useToast from '@/hooks/useToast';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const { toastSuccess } = useToast();

  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold">Home Page</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => toastSuccess('Welcome!', 'This is a success message from the Home Page.')}
      >
        Show Toast
      </button>
    </>
  );
};

export default HomePage;
