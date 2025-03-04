import React from 'react';
import Link  from 'next/link';
import styled from 'styled-components';
import { getAuth, signOut } from "firebase/auth";
import { useStateContext } from '@/context/StateContext';
import {useRouter} from 'next/router';
import { useEffect } from 'react';

const GetStarted = () => {
    const {user } = useStateContext()
    const router = useRouter();

    const onSubmit = () => {
        if (user === null) {
          router.push('/auth/signup');
        } else {
          router.push('/dashboard');
        }
      };

  return (
    <GetStartedButton onClick={onSubmit}>Get Started</GetStartedButton>
  );
};


const GetStartedButton = styled.div`
    display: flex;
    justify-content: center;
    background-color: #008000;
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    border-radius: 12px;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    width: 250px;
    height: 50px;
    align-items: center;
    font-family: sans-serif;
    margin-top: 20px;

     &:hover {
    background-color: black; // Adjust hover effect as needed
    color:white;
  }
`;
export default GetStarted