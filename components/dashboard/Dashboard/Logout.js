import React from 'react';
import Link  from 'next/link';
import styled from 'styled-components';
import { getAuth, signOut } from "firebase/auth";
import { useStateContext } from '@/context/StateContext';
import {useRouter} from 'next/router';

const LogOut = () => {
    const { setUser } = useStateContext();
    const auth = getAuth();
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
          // Sign-out successful.
          setUser(null);
          router.push('/');
        }).catch((error) => {
          // An error happened.
        });
    
      };

  return (
    <LogoutButton onClick={onSubmit}>LogOut</LogoutButton>
  );
};


const LogoutButton = styled.div`
      background-color:  #008000; 
      border: none;
      color: white;
      padding: 10px 15px;
      text-align: center;
      border-radius: 12px;
      font-size: 16px;
      text-decoration: none;
      font-weight: 600;

       &:hover {
    background-color: black; // Adjust hover effect as needed
  }
`;
export default LogOut