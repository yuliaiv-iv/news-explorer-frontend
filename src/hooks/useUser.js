import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../utils/MainApi';

export const CurrentUserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: false,
    user: null,
  });

  const getUser = async () => {
    setState(state => ({ ...state, loading: true }));
    let fetchedUser = null;
    try {
      fetchedUser = await api.getUserData();
    } catch (error) {
      console.log(error)
    } finally {
      setState({
        user: fetchedUser,
        loading: false,
      })
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  // console.log(state)
  return (
    <CurrentUserContext.Provider 
    value={{
      ...state,
      getUser,
    }}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useUser = () => {
  const user = useContext(CurrentUserContext);
  return user
}



