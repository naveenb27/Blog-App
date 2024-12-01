import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../services/api';

const AuthContext = createContext();
  
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axiosInstance.get('/getCurrentUser');
        setUser(response.data.name);
      } catch (e) {
        console.log('error while getting user from cookies ', e);
        setUser(null);
      }
    };

    getUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
