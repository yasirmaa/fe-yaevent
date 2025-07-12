import { useAppDispatch } from '@/store/hook';
import { setCredentials } from '@/store/slices/authSlice';
import { getCookie } from '@/utils/cookie';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useAppDispatch();

  const hydrateAuth = () => {
    try {
      const token = getCookie({ name: 'token' });
      if (token) {
        setIsAuthenticated(true);
        dispatch(setCredentials({ token: token }));
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log('Error hydrating auth:', error);
    }
  };
  useEffect(() => {
    hydrateAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isAuthenticated,
  };
};
