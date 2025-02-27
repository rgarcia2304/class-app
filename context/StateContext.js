import { useRouter } from 'next/router';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { onIdTokenChanged } from 'firebase/auth';
import {auth} from '@/backend/Firebase'

const Context = createContext();

export const StateContext = ({ children }) => {

  // Variables to Carry Across Multiple Pages
  const [user, setUser] = useState(undefined)

  const router = useRouter()
  const { asPath } = useRouter()

  //AUTHENTICATION REMEMBER ME USEEFFECT
  useEffect(() => {
    //initialy user 
  const unsubscribe = onIdTokenChanged(auth, (user) => {
    if (user) {
      console.log('Token or user state changed:', user);
      user.getIdToken().then((token) => {
        console.log('New ID token:', token);
      });
      setUser(user);
      window.currentUser = user; // global assignment for debugging
    } else {
      //if someone 
      setUser(null);
      window.currentUser = null;
    }
  });
  return () => unsubscribe();
}, []);




return(
    <Context.Provider
    value={{
        user,
        setUser
    }}
    >
      {children}
    </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
